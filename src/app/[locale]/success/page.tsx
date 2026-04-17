import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function SuccessPage() {
  const t = await getTranslations('success');
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 text-center space-y-4">
      <div className="text-6xl">✅</div>
      <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
      <p className="text-gray-600">{t('message')}</p>
      <p className="text-sm text-gray-400">{t('details')}</p>
      <Link
        href="/"
        className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
      >
        ← {t('back')}
      </Link>
    </div>
  );
}
