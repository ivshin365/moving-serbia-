'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

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

  const fetchSuggestions = useCallback(async (q: string) => {
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    try {
      const params = new URLSearchParams({
        q,
        countrycodes: 'rs',
        format: 'json',
        limit: '6',
        addressdetails: '1',
      });
      if (searchType === 'city') params.set('featureType', 'settlement');

      const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
        signal: abortRef.current.signal,
        headers: { 'Accept-Language': 'sr,en' },
      });
      const data: NominatimResult[] = await res.json();
      setSuggestions(data);
      setOpen(data.length > 0);
    } catch (err: unknown) {
      if ((err as Error)?.name !== 'AbortError') setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, [searchType]);

  const handleChange = (val: string) => {
    onChange(val);
    setSuggestions([]);
    setOpen(false);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.length < 2) return;

    debounceRef.current = setTimeout(() => fetchSuggestions(val), 420);
  };

  const handleSelect = (item: NominatimResult) => {
    const primary = formatPrimary(item, searchType);
    onChange(primary);
    setOpen(false);
    setSuggestions([]);
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
                    {formatPrimary(item, searchType)}
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
