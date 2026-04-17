'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { StepOneData, StepTwoData } from '@/lib/types';
import { useRouter } from '@/i18n/navigation';

interface Props {
  stepOne: StepOneData;
  stepTwo: StepTwoData;
  onBack: () => void;
}

export default function StepThree({ stepOne, stepTwo, onBack }: Props) {
  const t = useTranslations('step3');
  const tItems = useTranslations('step2.items');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...stepOne, ...stepTwo }),
      });
      if (!res.ok) throw new Error();
      router.push('/success');
    } catch {
      setError('Greška pri slanju. Pokušajte ponovo.');
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-[#0C1827]">{t('title')}</h2>
        <p className="text-sm text-[#6B7490] mt-1">{t('subtitle')}</p>
      </div>

      {/* Move details */}
      <div className="rounded-2xl border border-[#E8E3D9] overflow-hidden">
        <div className="bg-[#0C1827] px-5 py-3 flex items-center gap-2">
          <span className="text-sm">🚛</span>
          <span className="text-xs font-bold text-white uppercase tracking-widest">{t('moveDetails')}</span>
        </div>
        <div className="p-5 space-y-4 bg-white">
          {/* Name + phone */}
          <div className="grid grid-cols-2 gap-4">
            <ReviewField label={t('name')} value={stepOne.name} />
            <ReviewField label={t('phone')} value={stepOne.phone} />
          </div>

          {/* From → To */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <LocationCard
              label={t('from')}
              city={stepOne.from_city}
              address={stepOne.from_address}
              floor={stepOne.from_floor}
              elevator={stepOne.from_elevator}
              elevatorYes={t('elevatorYes')}
              elevatorNo={t('elevatorNo')}
              floorLabel={t('floor')}
              elevatorLabel={t('elevator')}
              accent="#E05A2B"
              bg="#FFF6F2"
              border="#FDDDD1"
            />
            <LocationCard
              label={t('to')}
              city={stepOne.to_city}
              address={stepOne.to_address}
              floor={stepOne.to_floor}
              elevator={stepOne.to_elevator}
              elevatorYes={t('elevatorYes')}
              elevatorNo={t('elevatorNo')}
              floorLabel={t('floor')}
              elevatorLabel={t('elevator')}
              accent="#0C1827"
              bg="#F2F5F8"
              border="#D6E1EA"
            />
          </div>

          {/* Date */}
          <div className="grid grid-cols-2 gap-4">
            <ReviewField label={t('date')} value={stepOne.move_date} icon="📅" />
            <ReviewField label={t('time')} value={stepOne.move_time} icon="🕐" />
          </div>
        </div>
      </div>

      {/* Inventory */}
      <div className="rounded-2xl border border-[#E8E3D9] overflow-hidden">
        <div className="bg-[#E05A2B] px-5 py-3 flex items-center gap-2">
          <span className="text-sm">📦</span>
          <span className="text-xs font-bold text-white uppercase tracking-widest">{t('inventory')}</span>
        </div>
        <div className="p-5 bg-white">
          {stepTwo.items.length === 0 && stepTwo.boxes === 0 ? (
            <p className="text-sm text-[#B0AEAD] italic">{t('noItems')}</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {stepTwo.items.map((item) => (
                <span
                  key={item.key}
                  className="inline-flex items-center gap-1.5 bg-[#FAF9F5] border border-[#E8E3D9] text-[#0C1827] text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tItems(item.key as Parameters<typeof tItems>[0])}
                  <span className="bg-[#E05A2B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.qty}
                  </span>
                </span>
              ))}
              {stepTwo.boxes > 0 && (
                <span className="inline-flex items-center gap-1.5 bg-[#FAF9F5] border border-[#E8E3D9] text-[#0C1827] text-xs font-medium px-3 py-1.5 rounded-full">
                  📦 {t('boxes')}
                  <span className="bg-[#E05A2B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {stepTwo.boxes}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
          ⚠ {error}
        </div>
      )}

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="flex-1 py-3.5 border border-[#E8E3D9] text-[#6B7490] font-semibold rounded-xl hover:border-[#0C1827] hover:text-[#0C1827] transition-all disabled:opacity-40 text-sm"
        >
          ← {t('back')}
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 py-3.5 bg-[#0C1827] hover:bg-[#152236] text-white font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-[#0C1827]/20 disabled:opacity-40 text-sm flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t('submitting')}
            </>
          ) : (
            <>{t('submit')} ✓</>
          )}
        </button>
      </div>
    </div>
  );
}

function ReviewField({ label, value, icon }: { label: string; value: string; icon?: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-[#6B7490] uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#0C1827] flex items-center gap-1.5">
        {icon && <span>{icon}</span>}
        {value}
      </p>
    </div>
  );
}

function LocationCard({
  label, city, address, floor, elevator,
  elevatorYes, elevatorNo, floorLabel, elevatorLabel,
  accent, bg, border,
}: {
  label: string; city: string; address: string; floor: number; elevator: boolean;
  elevatorYes: string; elevatorNo: string; floorLabel: string; elevatorLabel: string;
  accent: string; bg: string; border: string;
}) {
  return (
    <div className="rounded-xl p-3.5 border" style={{ background: bg, borderColor: border }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
        📍 {label}
      </p>
      <p className="text-sm font-bold text-[#0C1827]">{city}</p>
      <p className="text-xs text-[#6B7490] mt-0.5">{address}</p>
      <div className="flex gap-3 mt-2">
        <span className="text-xs text-[#6B7490]">
          {floorLabel}: <strong className="text-[#0C1827]">{floor}</strong>
        </span>
        <span className="text-xs text-[#6B7490]">
          {elevatorLabel}: <strong className="text-[#0C1827]">{elevator ? elevatorYes : elevatorNo}</strong>
        </span>
      </div>
    </div>
  );
}
