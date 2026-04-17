'use client';

import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { StepOneData } from '@/lib/types';
import AddressAutocomplete from './AddressAutocomplete';

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(6),
  from_city: z.string().min(1),
  from_address: z.string().min(1),
  from_floor: z.number().min(0),
  from_elevator: z.boolean(),
  to_city: z.string().min(1),
  to_address: z.string().min(1),
  to_floor: z.number().min(0),
  to_elevator: z.boolean(),
  move_date: z.string().min(1),
  move_time: z.string().min(1),
});

interface Props {
  defaultValues: StepOneData;
  onNext: (data: StepOneData) => void;
}

const inputClass =
  'w-full px-4 py-3 bg-white border border-[#E8E3D9] rounded-xl text-[#0C1827] placeholder:text-[#C0BCBA] text-sm focus:outline-none focus:border-[#E05A2B] focus:ring-2 focus:ring-[#E05A2B]/10 transition-all';

const labelClass = 'block text-xs font-semibold text-[#6B7490] uppercase tracking-wide mb-1.5';

const errorMsg = (msg: string) => (
  <p className="text-[#E05A2B] text-xs mt-1.5 flex items-center gap-1">⚠ {msg}</p>
);

export default function StepOne({ defaultValues, onNext }: Props) {
  const t = useTranslations('step1');
  const e = useTranslations('errors');
  const today = new Date().toISOString().split('T')[0];

  const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm<StepOneData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const fromElevator = watch('from_elevator');
  const toElevator = watch('to_elevator');

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      {/* Contact */}
      <div className="bg-[#FAF9F5] rounded-2xl p-5 space-y-4">
        <p className="text-xs font-bold text-[#0C1827] uppercase tracking-widest flex items-center gap-2">
          <span>👤</span> Kontakt
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('name')}</label>
            <input {...register('name')} placeholder={t('namePlaceholder')} className={inputClass} />
            {errors.name && errorMsg(e('required'))}
          </div>
          <div>
            <label className={labelClass}>{t('phone')}</label>
            <input {...register('phone')} placeholder={t('phonePlaceholder')} type="tel" className={inputClass} />
            {errors.phone && errorMsg(e('phone'))}
          </div>
        </div>
      </div>

      {/* From / To */}
      {(['from', 'to'] as const).map((dir) => {
        const isFrom = dir === 'from';
        const elevator = isFrom ? fromElevator : toElevator;
        const elevatorField = `${dir}_elevator` as 'from_elevator' | 'to_elevator';
        const accent = isFrom ? '#E05A2B' : '#0C1827';
        const bg = isFrom ? '#FFF6F2' : '#F2F5F8';
        const border = isFrom ? '#FDDDD1' : '#D6E1EA';

        return (
          <div key={dir} className="rounded-2xl p-5 space-y-4 border" style={{ background: bg, borderColor: border }}>
            <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: accent }}>
              <span>📍</span> {t(isFrom ? 'fromSection' : 'toSection')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* City — autocomplete */}
              <div>
                <label className={labelClass}>{t('city')}</label>
                <Controller
                  name={`${dir}_city`}
                  control={control}
                  render={({ field }) => (
                    <AddressAutocomplete
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={t('cityPlaceholder')}
                      searchType="city"
                      inputClassName={inputClass}
                    />
                  )}
                />
                {errors[`${dir}_city`] && errorMsg(e('required'))}
              </div>

              {/* Address — autocomplete */}
              <div>
                <label className={labelClass}>{t('address')}</label>
                <Controller
                  name={`${dir}_address`}
                  control={control}
                  render={({ field }) => (
                    <AddressAutocomplete
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={t('addressPlaceholder')}
                      searchType="address"
                      inputClassName={inputClass}
                    />
                  )}
                />
                {errors[`${dir}_address`] && errorMsg(e('required'))}
              </div>

              {/* Floor */}
              <div>
                <label className={labelClass}>{t('floor')}</label>
                <input
                  {...register(`${dir}_floor`, { valueAsNumber: true })}
                  placeholder={t('floorPlaceholder')}
                  type="number"
                  min={0}
                  className={inputClass}
                />
                {errors[`${dir}_floor`] && errorMsg(e('floor'))}
              </div>

              {/* Elevator */}
              <div>
                <label className={labelClass}>{t('elevator')}</label>
                <div className="flex gap-2">
                  {([true, false] as const).map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setValue(elevatorField, val)}
                      className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        elevator === val
                          ? 'text-white border-transparent shadow-sm'
                          : 'bg-white text-[#6B7490] border-[#E8E3D9] hover:border-[#C0BCBA]'
                      }`}
                      style={elevator === val ? { background: accent, borderColor: accent } : {}}
                    >
                      {val ? t('elevatorYes') : t('elevatorNo')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Date + Time */}
      <div className="bg-[#FAF9F5] rounded-2xl p-5">
        <p className="text-xs font-bold text-[#0C1827] uppercase tracking-widest flex items-center gap-2 mb-4">
          <span>📅</span> {t('date')} & {t('time')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('date')}</label>
            <input {...register('move_date')} type="date" min={today} className={inputClass} />
            {errors.move_date && errorMsg(e('date'))}
          </div>
          <div>
            <label className={labelClass}>{t('time')}</label>
            <input {...register('move_time')} type="time" className={inputClass} />
            {errors.move_time && errorMsg(e('required'))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#E05A2B] hover:bg-[#C84D22] text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-[#E05A2B]/25 hover:-translate-y-0.5 text-sm tracking-wide"
      >
        {t('next')} →
      </button>
    </form>
  );
}
