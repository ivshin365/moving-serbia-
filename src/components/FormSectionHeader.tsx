'use client';

import { useLocale } from 'next-intl';

const CONTENT = {
  sr: {
    label: 'Forma',
    title: 'Dobij besplatne ponude',
    subtitle: 'Popunite formu i provereni prevozioci vas kontaktiraju sa ponudama.',
  },
  en: {
    label: 'Form',
    title: 'Get Free Quotes',
    subtitle: 'Fill the form and verified movers will contact you with offers.',
  },
};

export default function FormSectionHeader() {
  const locale = useLocale() as 'sr' | 'en';
  const t = CONTENT[locale];
  return (
    <div className="text-center mb-10">
      <p className="section-label mb-3">{t.label}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#0C1827] mb-4">{t.title}</h2>
      <p className="text-[#6B7490] text-lg">{t.subtitle}</p>
    </div>
  );
}
