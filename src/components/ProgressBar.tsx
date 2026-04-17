'use client';

import { useTranslations } from 'next-intl';

interface Props {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: Props) {
  const t = useTranslations('progress');
  const steps = [t('step1'), t('step2'), t('step3')];

  return (
    <div className="mb-10">
      <div className="flex items-center">
        {steps.map((label, i) => {
          const step = i + 1;
          const isCompleted = currentStep > step;
          const isActive = currentStep === step;
          const isLast = i === steps.length - 1;

          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              {/* Step dot + label */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-[#0C1827] text-white'
                      : isActive
                      ? 'bg-[#E05A2B] text-white shadow-lg shadow-[#E05A2B]/30'
                      : 'bg-[#F0EDE5] text-[#B0AEAD] border-2 border-[#E8E3D9]'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                <span
                  className={`text-xs font-semibold whitespace-nowrap hidden sm:block ${
                    isActive ? 'text-[#E05A2B]' : isCompleted ? 'text-[#0C1827]' : 'text-[#B0AEAD]'
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Connector line */}
              {!isLast && (
                <div className="flex-1 mx-3 mt-[-20px] sm:mt-[-20px]">
                  <div className="h-px bg-[#E8E3D9] relative overflow-hidden rounded-full">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#0C1827] transition-all duration-500"
                      style={{ width: isCompleted ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
