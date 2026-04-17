'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Mover, MoveRequestRecord } from '@/lib/types';

interface Props {
  token: string;
}

export default function AdminDashboard({ token }: Props) {
  const t = useTranslations('admin');
  const router = useRouter();
  const [movers, setMovers] = useState<Mover[]>([]);
  const [requests, setRequests] = useState<MoveRequestRecord[]>([]);
  const [newMover, setNewMover] = useState({ name: '', phone: '', city: '' });
  const [loading, setLoading] = useState(true);

  const headers = { 'Content-Type': 'application/json', 'x-admin-token': token };

  const fetchData = async () => {
    const [moversRes, reqRes] = await Promise.all([
      fetch('/api/movers', { headers }),
      fetch('/api/requests', { headers }),
    ]);
    if (moversRes.ok) setMovers(await moversRes.json());
    if (reqRes.ok) setRequests(await reqRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const addMover = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/movers', {
      method: 'POST',
      headers,
      body: JSON.stringify(newMover),
    });
    if (res.ok) {
      const added = await res.json();
      setMovers((prev) => [added, ...prev]);
      setNewMover({ name: '', phone: '', city: '' });
    }
  };

  const deleteMover = async (id: string) => {
    const res = await fetch(`/api/movers/${id}`, { method: 'DELETE', headers });
    if (res.ok) setMovers((prev) => prev.filter((m) => m.id !== id));
  };

  const logout = async () => {
    await fetch('/api/admin-auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">{t('title')}</h1>
          <button onClick={logout} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            {t('logout')}
          </button>
        </div>

        <h2 className="text-base font-semibold text-gray-700 mb-4">{t('addMover')}</h2>
        <form onSubmit={addMover} className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            value={newMover.name}
            onChange={(e) => setNewMover((p) => ({ ...p, name: e.target.value }))}
            placeholder={t('moverName')}
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={newMover.phone}
            onChange={(e) => setNewMover((p) => ({ ...p, phone: e.target.value }))}
            placeholder={t('moverPhone')}
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={newMover.city}
            onChange={(e) => setNewMover((p) => ({ ...p, city: e.target.value }))}
            placeholder={t('moverCity')}
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            {t('add')}
          </button>
        </form>

        <h2 className="text-base font-semibold text-gray-700 mb-3">{t('movers')}</h2>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : movers.length === 0 ? (
          <p className="text-gray-400 text-sm">{t('noMovers')}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-2 font-medium">{t('moverName')}</th>
                  <th className="pb-2 font-medium">{t('moverPhone')}</th>
                  <th className="pb-2 font-medium">{t('moverCity')}</th>
                  <th className="pb-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {movers.map((m) => (
                  <tr key={m.id}>
                    <td className="py-2 font-medium text-gray-800">{m.name}</td>
                    <td className="py-2 text-gray-600">{m.phone}</td>
                    <td className="py-2 text-gray-600">{m.city}</td>
                    <td className="py-2 text-right">
                      <button
                        onClick={() => deleteMover(m.id)}
                        className="text-red-400 hover:text-red-600 text-xs"
                      >
                        {t('delete')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-base font-semibold text-gray-700 mb-4">{t('requests')}</h2>
        {requests.length === 0 ? (
          <p className="text-gray-400 text-sm">{t('noRequests')}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-2 font-medium">Ime</th>
                  <th className="pb-2 font-medium">Telefon</th>
                  <th className="pb-2 font-medium">Od → Do</th>
                  <th className="pb-2 font-medium">{t('date')}</th>
                  <th className="pb-2 font-medium">{t('status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requests.map((r) => (
                  <tr key={r.id}>
                    <td className="py-2 font-medium text-gray-800">{r.name}</td>
                    <td className="py-2 text-gray-600">{r.phone}</td>
                    <td className="py-2 text-gray-600">{r.from_city} → {r.to_city}</td>
                    <td className="py-2 text-gray-600">{r.move_date}</td>
                    <td className="py-2">
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
