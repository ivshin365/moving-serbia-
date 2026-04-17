'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { MoveItem, StepTwoData } from '@/lib/types';

const CATEGORIES = [
  { key: 'livingRoom', items: ['sofa', 'armchair', 'tv', 'tvstand', 'table', 'wardrobe'] },
  { key: 'bedroom',    items: ['bed_single', 'bed_double', 'bed_king', 'mattress', 'dresser', 'nightstand'] },
  { key: 'kitchen',   items: ['fridge', 'washing_machine', 'dishwasher', 'microwave'] },
  { key: 'other',     items: ['bicycle', 'piano', 'desk', 'office_chair'] },
] as const;

const ITEM_ICONS: Record<string, string> = {
  sofa: '🛋️', armchair: '🪑', tv: '📺', tvstand: '📦', table: '🪵', wardrobe: '🚪',
  bed_single: '🛏️', bed_double: '🛏️', bed_king: '👑', mattress: '🛏️', dresser: '🗄️', nightstand: '🪑',
  fridge: '🧊', washing_machine: '🫧', dishwasher: '🍽️', microwave: '📡',
  bicycle: '🚲', piano: '🎹', desk: '🖥️', office_chair: '💺',
};

interface Props {
  defaultValues: StepTwoData;
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
}

export default function StepTwo({ defaultValues, onNext, onBack }: Props) {
  const t = useTranslations('step2');
  const [items, setItems] = useState<MoveItem[]>(defaultValues.items);
  const [boxes, setBoxes] = useState(defaultValues.boxes);

  const getItem = (key: string) => items.find((i) => i.key === key);

  const toggle = (key: string) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.key === key);
      return exists ? prev.filter((i) => i.key !== key) : [...prev, { key, qty: 1 }];
    });
  };

  const setQty = (key: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty } : i)));
  };

  const totalSelected = items.length + (boxes > 0 ? 1 : 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#0C1827]">{t('title')}</h2>
        <p className="text-sm text-[#6B7490] mt-1">{t('subtitle')}</p>
      </div>

      {CATEGORIES.map((cat) => (
        <div key={cat.key}>
          <h3 className="text-xs font-bold text-[#6B7490] uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="h-px flex-1 bg-[#E8E3D9]" />
            {t(cat.key)}
            <span className="h-px flex-1 bg-[#E8E3D9]" />
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cat.items.map((itemKey) => {
              const selected = getItem(itemKey);
              return (
                <div key={itemKey} className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggle(itemKey)}
                    className={`relative flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border text-center transition-all ${
                      selected
                        ? 'bg-[#E05A2B]/5 border-[#E05A2B] text-[#E05A2B]'
                        : 'bg-white border-[#E8E3D9] text-[#6B7490] hover:border-[#C0BCBA] hover:text-[#0C1827]'
                    }`}
                  >
                    {selected && (
                      <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#E05A2B] rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                    <span className="text-2xl leading-none">{ITEM_ICONS[itemKey]}</span>
                    <span className="text-[11px] font-medium leading-tight">{t(`items.${itemKey}`)}</span>
                  </button>

                  {selected && (
                    <div className="flex items-center justify-between bg-[#FAF9F5] rounded-lg px-2 py-1 border border-[#E8E3D9]">
                      <button
                        type="button"
                        onClick={() => setQty(itemKey, selected.qty - 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-[#E8E3D9] text-[#6B7490] hover:border-[#E05A2B] hover:text-[#E05A2B] text-sm font-bold flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-bold text-[#0C1827] w-5 text-center">{selected.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(itemKey, selected.qty + 1)}
                        className="w-6 h-6 rounded-lg bg-white border border-[#E8E3D9] text-[#6B7490] hover:border-[#E05A2B] hover:text-[#E05A2B] text-sm font-bold flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Boxes */}
      <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#E8E3D9]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-[#0C1827] uppercase tracking-widest flex items-center gap-2">
              <span className="text-base">📦</span> {t('boxesLabel')}
            </p>
            <p className="text-xs text-[#6B7490] mt-0.5">{t('boxes')}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBoxes(Math.max(0, boxes - 1))}
              className="w-9 h-9 rounded-xl bg-white border border-[#E8E3D9] text-[#6B7490] hover:border-[#E05A2B] hover:text-[#E05A2B] font-bold flex items-center justify-center transition-colors"
            >
              −
            </button>
            <span className="text-2xl font-bold text-[#0C1827] w-8 text-center tabular-nums">{boxes}</span>
            <button
              type="button"
              onClick={() => setBoxes(boxes + 1)}
              className="w-9 h-9 rounded-xl bg-white border border-[#E8E3D9] text-[#6B7490] hover:border-[#E05A2B] hover:text-[#E05A2B] font-bold flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {totalSelected > 0 && (
        <p className="text-xs text-center text-[#6B7490]">
          {totalSelected} {totalSelected === 1 ? 'stavka izabrana' : 'stavki izabrano'}
        </p>
      )}

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 border border-[#E8E3D9] text-[#6B7490] font-semibold rounded-xl hover:border-[#0C1827] hover:text-[#0C1827] transition-all text-sm"
        >
          ← {t('back')}
        </button>
        <button
          type="button"
          onClick={() => onNext({ items, boxes })}
          className="flex-1 py-3.5 bg-[#E05A2B] hover:bg-[#C84D22] text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-[#E05A2B]/25 hover:-translate-y-0.5 text-sm"
        >
          {t('next')} →
        </button>
      </div>
    </div>
  );
}
