import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token || token !== process.env.ADMIN_PASSWORD) {
    redirect('/admin/login');
  }

  return <AdminDashboard token={token} />;
}
