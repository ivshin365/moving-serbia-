'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    label: 'Proces',
    title: 'Jednostavno kao 1, 2, 3',
    subtitle: 'Ceo proces od opisa selidbe do izbora prevozioca traje svega nekoliko minuta.',
    steps: [
      {
        num: '01',
        icon: '📋',
        title: 'Opišite selidbu',
        desc: 'Popunite kratku formu sa detaljima selidbe — odakle, kamo, šta selite i koji datum vam odgovara.',
      },
      {
        num: '02',
        icon: '📞',
        title: 'Primate pozive',
        desc: 'Provereni prevozioci iz vaše regije vas kontaktiraju telefonom sa personalizovanim ponudama.',
      },
      {
        num: '03',
        icon: '✅',
        title: 'Izaberite najboljeg',
        desc: 'Uporedite ponude, pitate pitanja i izaberite prevozioca koji vam najviše odgovara — bez obaveze.',
      },
    ],
  },
  en: {
    label: 'Process',
    title: 'Simple as 1, 2, 3',
    subtitle: 'The entire process from describing your move to choosing a mover takes just a few minutes.',
    steps: [
      {
        num: '01',
        icon: '📋',
        title: 'Describe your move',
        desc: 'Fill out a short form with your moving details — from, to, what you are moving and your preferred date.',
      },
      {
        num: '02',
        icon: '📞',
        title: 'Receive calls',
        desc: 'Verified movers from your region contact you by phone with personalised offers.',
      },
      {
        num: '03',
        icon: '✅',
        title: 'Choose the best',
        desc: 'Compare offers, ask questions and choose the mover that suits you best — no obligation.',
      },
    ],
  },
};

export default function HowItWorks() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];

  return (
    <section id="kako" className="bg-[#FAF9F5] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C1827] mb-4">{t.title}</h2>
          <p className="text-[#6B7490] text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-[#E8E3D9] to-transparent" />

          {t.steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 border border-[#E8E3D9] card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-bold text-[#F0EDE5]" style={{ fontFamily: 'var(--font-syne, sans-serif)' }}>
                  {step.num}
                </span>
                <span className="text-2xl bg-[#FAF9F5] rounded-xl p-3">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#0C1827] mb-3">{step.title}</h3>
              <p className="text-[#6B7490] leading-relaxed text-[0.95rem]">{step.desc}</p>

              {/* Active accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#E05A2B] to-transparent rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
