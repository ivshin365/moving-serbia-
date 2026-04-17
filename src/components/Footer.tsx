'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    tagline: 'Vaša selidba u dobrih rukama.',
    links: [
      { label: 'Kako funkcioniše', href: '#kako' },
      { label: 'Dobij ponude', href: '#forma' },
      { label: 'Blog', href: '#blog' },
      { label: 'Admin', href: '/sr/admin' },
    ],
    legal: ['Politika privatnosti', 'Uslovi korišćenja'],
    copy: '© 2025 Selidbe Srbija. Sva prava zadržana.',
  },
  en: {
    tagline: 'Your move in good hands.',
    links: [
      { label: 'How it works', href: '#kako' },
      { label: 'Get quotes', href: '#forma' },
      { label: 'Blog', href: '#blog' },
      { label: 'Admin', href: '/en/admin' },
    ],
    legal: ['Privacy Policy', 'Terms of Service'],
    copy: '© 2025 Selidbe Srbija. All rights reserved.',
  },
};

export default function Footer() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];

  return (
    <footer className="bg-[#0C1827] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">🚛</span>
              <span className="font-bold text-white text-lg tracking-tight">
                Selidbe<span className="text-[#E05A2B]">Srbija</span>
              </span>
            </div>
            <p className="text-white/40 text-sm">{t.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {t.links.map((l) => (
              <a key={l.label} href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs">{t.copy}</p>
          <div className="flex gap-4">
            {t.legal.map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
