'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    badge: 'Serbia #1 platforma za selidbe',
    line1: 'Vaša selidba,',
    line2: 'vaša pravila.',
    subtitle: 'Opišite svoju selidbu, a provereni prevozioci vas kontaktiraju telefonom sa personalizovanim ponudama. Vi birate najboljeg.',
    cta: 'Dobij besplatne ponude',
    how: 'Kako funkcioniše ↓',
    stats: [
      { value: '1.200+', label: 'Uspešnih selidbi' },
      { value: '4.9★', label: 'Prosečna ocena' },
      { value: '48h', label: 'Do prve ponude' },
      { value: '100+', label: 'Proverenih prevozioca' },
    ],
  },
  en: {
    badge: "Serbia's #1 Moving Platform",
    line1: 'Your move,',
    line2: 'your rules.',
    subtitle: 'Describe your move and verified movers contact you by phone with personalised offers. You choose the best.',
    cta: 'Get Free Quotes',
    how: 'How it works ↓',
    stats: [
      { value: '1,200+', label: 'Successful moves' },
      { value: '4.9★', label: 'Average rating' },
      { value: '48h', label: 'To first offer' },
      { value: '100+', label: 'Verified movers' },
    ],
  },
};

export default function HeroSection() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];

  return (
    <section id="hero" className="relative bg-[#0C1827] overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Dot grid */}
      <div className="dot-pattern absolute inset-0" />

      {/* Glow blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#E05A2B] rounded-full opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#F2C44D] rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="anim-fade-up inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white/70 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05A2B] animate-pulse" />
            {t.badge}
          </div>

          {/* Headline */}
          <h1
            className="anim-fade-up anim-delay-1 text-white leading-[1.08] mb-7 font-bold"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            {t.line1}
            <br />
            <span className="text-[#E05A2B]">{t.line2}</span>
          </h1>

          {/* Subtitle */}
          <p className="anim-fade-up anim-delay-2 text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-delay-3 flex flex-wrap gap-3 mb-16">
            <a
              href="#forma"
              className="group inline-flex items-center gap-2 bg-[#E05A2B] hover:bg-[#C94E22] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#E05A2B]/25 hover:-translate-y-0.5"
            >
              {t.cta}
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <a
              href="#kako"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              {t.how}
            </a>
          </div>

          {/* Stats */}
          <div className="anim-fade-up anim-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {t.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-white/45 text-sm mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0 56 C360 0 1080 0 1440 56 L1440 56 L0 56 Z" fill="#FAF9F5" />
        </svg>
      </div>
    </section>
  );
}
