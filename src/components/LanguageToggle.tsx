'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const targetLocale = locale === 'sr' ? 'en' : 'sr';

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap"
    >
      {locale === 'sr' ? '🇬🇧 EN' : '🇷🇸 SR'}
    </Link>
  );
}
