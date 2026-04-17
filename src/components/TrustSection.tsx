'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    label: 'Zašto mi',
    title: 'Selidba bez brige.',
    subtitle: 'Sve što vam treba na jednom mestu — od prvog klika do prvog kutije u novom domu.',
    features: [
      { icon: '🔍', title: 'Provereni prevozioci', desc: 'Svaki prevozilac u našoj bazi prošao je proveru registracije i recenzija.' },
      { icon: '💰', title: 'Upoređujte cene', desc: 'Dobijate više ponuda — vi birate onaj koji odgovara vašem budžetu.' },
      { icon: '🤝', title: 'Bez obaveze', desc: 'Popunjavanje forme je besplatno. Nema skrivenih naknada, nikakve obaveze.' },
      { icon: '⚡', title: 'Brz odgovor', desc: 'Prevozioci vas kontaktiraju unutar 48 sati, u većini slučajeva i brže.' },
    ],
    stats: [
      { value: '98%', label: 'Zadovoljnih klijenata' },
      { value: '3 god', label: 'Na tržištu' },
      { value: '4.9', label: 'Ocena na Google-u' },
      { value: '0€', label: 'Naknada za vas' },
    ],
  },
  en: {
    label: 'Why us',
    title: 'Moving without worry.',
    subtitle: 'Everything you need in one place — from first click to first box in your new home.',
    features: [
      { icon: '🔍', title: 'Verified movers', desc: 'Every mover in our database has passed a registration and review check.' },
      { icon: '💰', title: 'Compare prices', desc: 'You receive multiple offers — you choose the one that fits your budget.' },
      { icon: '🤝', title: 'No obligation', desc: 'Filling the form is free. No hidden fees, no commitments.' },
      { icon: '⚡', title: 'Fast response', desc: 'Movers contact you within 48 hours, in most cases even faster.' },
    ],
    stats: [
      { value: '98%', label: 'Satisfied clients' },
      { value: '3 yrs', label: 'On the market' },
      { value: '4.9', label: 'Google rating' },
      { value: '€0', label: 'Cost to you' },
    ],
  },
};

export default function TrustSection() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];

  return (
    <section className="bg-[#0C1827] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + features */}
          <div>
            <p className="section-label mb-3">{t.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{t.title}</h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">{t.subtitle}</p>
            <div className="space-y-5">
              {t.features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">{f.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{s.value}</div>
                <div className="text-white/45 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
