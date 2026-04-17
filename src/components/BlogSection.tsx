'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

const UI = {
  sr: { label: 'Blog', title: 'Saveti za selidbu', subtitle: 'Korisni tekstovi koji vam pomažu da selidbu planirate bez stresa.', readMore: 'Čitaj više →' },
  en: { label: 'Blog', title: 'Moving tips', subtitle: 'Useful articles that help you plan your move without stress.', readMore: 'Read more →' },
};

export default function BlogSection() {
  const locale = useLocale() as 'sr' | 'en';
  const t = UI[locale];
  const posts = getAllPosts(locale);

  return (
    <section id="blog" className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C1827] mb-4">{t.title}</h2>
          <p className="text-[#6B7490] text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/${locale}/blog/${post.slug}`}
              className="rounded-2xl overflow-hidden border border-[#E8E3D9] flex flex-col card-hover bg-white"
            >
              <div className={`bg-gradient-to-br ${post.gradient} h-44 flex items-center justify-center relative overflow-hidden`}>
                <span className="text-5xl z-10 relative" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}>
                  {post.icon}
                </span>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)',
                  backgroundSize: '8px 8px'
                }} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#E05A2B]">{post.category}</span>
                  <span className="text-[#D8D4CC] text-xs">·</span>
                  <span className="text-xs text-[#6B7490]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-[#0C1827] text-lg leading-snug mb-3 flex-1">{post.title}</h3>
                <p className="text-[#6B7490] text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE5]">
                  <span className="text-xs text-[#6B7490]">{post.date}</span>
                  <span className="text-sm font-semibold text-[#E05A2B] hover:text-[#C84D22] transition-colors">
                    {t.readMore}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
