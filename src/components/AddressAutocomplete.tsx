'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// Serbian Latin ↔ Cyrillic transliteration
// Multi-char digraphs must be checked before single-char mappings
const LATIN_TO_CYR: [string, string][] = [
  ['lj', 'љ'], ['nj', 'њ'], ['dž', 'џ'], ['Lj', 'Љ'], ['Nj', 'Њ'], ['Dž', 'Џ'],
  ['LJ', 'Љ'], ['NJ', 'Њ'], ['DŽ', 'Џ'],
  ['đ', 'ђ'], ['Đ', 'Ђ'], ['č', 'ч'], ['Č', 'Ч'], ['ć', 'ћ'], ['Ć', 'Ћ'],
  ['š', 'ш'], ['Š', 'Ш'], ['ž', 'ж'], ['Ž', 'Ж'],
  ['a', 'а'], ['b', 'б'], ['c', 'ц'], ['d', 'д'], ['e', 'е'], ['f', 'ф'],
  ['g', 'г'], ['h', 'х'], ['i', 'и'], ['j', 'ј'], ['k', 'к'], ['l', 'л'],
  ['m', 'м'], ['n', 'н'], ['o', 'о'], ['p', 'п'], ['r', 'р'], ['s', 'с'],
  ['t', 'т'], ['u', 'у'], ['v', 'в'], ['z', 'з'],
  ['A', 'А'], ['B', 'Б'], ['C', 'Ц'], ['D', 'Д'], ['E', 'Е'], ['F', 'Ф'],
  ['G', 'Г'], ['H', 'Х'], ['I', 'И'], ['J', 'Ј'], ['K', 'К'], ['L', 'Л'],
  ['M', 'М'], ['N', 'Н'], ['O', 'О'], ['P', 'П'], ['R', 'Р'], ['S', 'С'],
  ['T', 'Т'], ['U', 'У'], ['V', 'В'], ['Z', 'З'],
];

const CYR_TO_LATIN: [string, string][] = [
  ['љ', 'lj'], ['њ', 'nj'], ['џ', 'dž'], ['Љ', 'Lj'], ['Њ', 'Nj'], ['Џ', 'Dž'],
  ['ђ', 'đ'], ['Ђ', 'Đ'], ['ч', 'č'], ['Ч', 'Č'], ['ћ', 'ć'], ['Ћ', 'Ć'],
  ['ш', 'š'], ['Ш', 'Š'], ['ж', 'ž'], ['Ж', 'Ž'],
  ['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],
  ['з', 'z'], ['и', 'i'], ['ј', 'j'], ['к', 'k'], ['л', 'l'], ['м', 'm'],
  ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'], ['с', 's'], ['т', 't'],
  ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'c'],
  ['А', 'A'], ['Б', 'B'], ['В', 'V'], ['Г', 'G'], ['Д', 'D'], ['Е', 'E'],
  ['З', 'Z'], ['И', 'I'], ['Ј', 'J'], ['К', 'K'], ['Л', 'L'], ['М', 'M'],
  ['Н', 'N'], ['О', 'O'], ['П', 'P'], ['Р', 'R'], ['С', 'S'], ['Т', 'T'],
  ['У', 'U'], ['Ф', 'F'], ['Х', 'H'], ['Ц', 'C'],
];

function applyMap(text: string, map: [string, string][]): string {
  let result = '';
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const [from, to] of map) {
      if (text.startsWith(from, i)) {
        result += to;
        i += from.length;
        matched = true;
        break;
      }
    }
    if (!matched) { result += text[i]; i++; }
  }
  return result;
}

const latinToCyrillic = (s: string) => applyMap(s, LATIN_TO_CYR);
const cyrillicToLatin = (s: string) => applyMap(s, CYR_TO_LATIN);

function isCyrillic(s: string) {
  return /[\u0400-\u04FF]/.test(s);
}

interface NominatimResult {
  place_id: number;
  display_name: string;
  type: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    suburb?: string;
    road?: string;
    house_number?: string;
    county?: string;
    state?: string;
  };
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchType: 'city' | 'address';
  inputClassName?: string;
}

function formatPrimary(item: NominatimResult, searchType: 'city' | 'address'): string {
  const addr = item.address ?? {};
  if (searchType === 'city') {
    return addr.city ?? addr.town ?? addr.village ?? addr.municipality ?? item.display_name.split(',')[0];
  }
  const road = addr.road ?? '';
  const num = addr.house_number ? ` ${addr.house_number}` : '';
  if (road) return `${road}${num}`;
  return item.display_name.split(',')[0];
}

function formatSecondary(item: NominatimResult): string {
  const parts = item.display_name.split(',');
  return parts.slice(1, 3).join(',').trim();
}

export default function AddressAutocomplete({ value, onChange, placeholder, searchType, inputClassName }: Props) {
  const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
  const [inputIsCyrillic, setInputIsCyrillic] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const queryNominatim = useCallback(async (q: string, signal: AbortSignal): Promise<NominatimResult[]> => {
    const params = new URLSearchParams({
      q,
      countrycodes: 'rs',
      format: 'json',
      limit: '6',
      addressdetails: '1',
    });
    if (searchType === 'city') params.set('featureType', 'settlement');
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      signal,
      headers: { 'Accept-Language': 'sr,sr-Latn,en' },
    });
    return res.json();
  }, [searchType]);

  const fetchSuggestions = useCallback(async (q: string) => {
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    setLoading(true);
    try {
      const cyrillicInput = isCyrillic(q);
      // When Latin input, also query with Cyrillic transliteration (OSM Serbia data is primarily Cyrillic)
      const queries = cyrillicInput
        ? [q]
        : [q, latinToCyrillic(q)];

      const results = await Promise.all(queries.map(query => queryNominatim(query, signal)));
      const seen = new Set<number>();
      const merged: NominatimResult[] = [];
      for (const batch of results) {
        for (const item of batch) {
          if (!seen.has(item.place_id)) { seen.add(item.place_id); merged.push(item); }
        }
      }
      setSuggestions(merged);
      setOpen(merged.length > 0);
    } catch (err: unknown) {
      if ((err as Error)?.name !== 'AbortError') setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, [searchType, queryNominatim]);

  const handleChange = (val: string) => {
    onChange(val);
    setInputIsCyrillic(isCyrillic(val));
    setSuggestions([]);
    setOpen(false);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length < 2) return;

    debounceRef.current = setTimeout(() => fetchSuggestions(val), 420);
  };

  const handleSelect = (item: NominatimResult) => {
    let primary = formatPrimary(item, searchType);
    // Convert result to match the script the user was typing in
    if (!inputIsCyrillic && isCyrillic(primary)) primary = cyrillicToLatin(primary);
    else if (inputIsCyrillic && !isCyrillic(primary)) primary = latinToCyrillic(primary);
    onChange(primary);
    setOpen(false);
    setSuggestions([]);
  };

  const displayPrimary = (item: NominatimResult) => {
    let name = formatPrimary(item, searchType);
    if (!inputIsCyrillic && isCyrillic(name)) name = cyrillicToLatin(name);
    else if (inputIsCyrillic && !isCyrillic(name)) name = latinToCyrillic(name);
    return name;
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className={inputClassName}
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 animate-spin text-[#E05A2B]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        )}
        {!loading && value && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#B0AEAD]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#E8E3D9] rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="px-3 py-1.5 bg-[#FAF9F5] border-b border-[#F0EDE5]">
            <p className="text-[10px] text-[#B0AEAD] font-semibold uppercase tracking-wide">
              OpenStreetMap — {suggestions.length} rezultata
            </p>
          </div>
          {suggestions.map((item) => (
            <button
              key={item.place_id}
              type="button"
              onMouseDown={() => handleSelect(item)}
              className="w-full text-left px-4 py-3 hover:bg-[#FAF9F5] border-b border-[#F0EDE5] last:border-0 transition-colors group"
            >
              <div className="flex items-start gap-2.5">
                <span className="text-[#E05A2B] mt-0.5 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#0C1827] truncate group-hover:text-[#E05A2B] transition-colors">
                    {displayPrimary(item)}
                  </p>
                  <p className="text-xs text-[#B0AEAD] truncate mt-0.5">
                    {formatSecondary(item)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
