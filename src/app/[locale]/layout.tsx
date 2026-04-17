import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import LanguageToggle from '@/components/LanguageToggle';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E3D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="text-xl">🚛</span>
            <span className="font-bold text-[#0C1827] tracking-tight" style={{ fontFamily: 'var(--font-syne, sans-serif)' }}>
              Selidbe<span className="text-[#E05A2B]">Srbija</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6B7490]">
            <a href="#kako" className="hover:text-[#0C1827] transition-colors">
              {locale === 'sr' ? 'Kako funkcioniše' : 'How it works'}
            </a>
            <a href="#forma" className="hover:text-[#0C1827] transition-colors">
              {locale === 'sr' ? 'Dobij ponudu' : 'Get a quote'}
            </a>
            <a href="#blog" className="hover:text-[#0C1827] transition-colors">Blog</a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#forma"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#E05A2B] hover:bg-[#C84D22] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {locale === 'sr' ? 'Dobij ponude' : 'Get Quotes'} →
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </NextIntlClientProvider>
  );
}
