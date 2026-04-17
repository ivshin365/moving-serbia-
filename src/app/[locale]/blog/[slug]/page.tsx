import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ['sr', 'en'] as const;
  return locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale as 'sr' | 'en', slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale as 'sr' | 'en', slug);
  if (!post) notFound();

  const backLabel = locale === 'sr' ? '← Nazad na blog' : '← Back to blog';

  return (
    <main className="min-h-screen bg-[#FAF9F5]">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.gradient} py-20 px-4`}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-6xl mb-6 block" style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.25))' }}>
            {post.icon}
          </span>
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">{post.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} čitanja</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div
          className="prose prose-lg prose-headings:font-bold prose-headings:text-[#0C1827] prose-p:text-[#3D4152] prose-p:leading-relaxed prose-li:text-[#3D4152] prose-a:text-[#E05A2B] prose-strong:text-[#0C1827] max-w-none
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-ul:space-y-1 prose-ol:space-y-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-[#E8E3D9]">
          <Link
            href={`/${locale}#blog`}
            className="inline-flex items-center gap-2 text-[#E05A2B] font-semibold hover:text-[#C84D22] transition-colors"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
