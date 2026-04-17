import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Selidbe Srbija – Besplatne Ponude od Proverenih Prevozioca',
  description: 'Opišite selidbu i dobijte pozive od proverenih prevozioca. Brzo, lako, bez stresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${syne.variable} ${dm.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
