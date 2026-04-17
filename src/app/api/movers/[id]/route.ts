import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function isAuthorized(req: NextRequest): boolean {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const supabase = getSupabase();
  const { error } = await supabase.from('movers').delete().eq('id', id);
  if (error) return NextResponse.json({ error: 'Database error' }, { status: 500 });
  return NextResponse.json({ success: true });
}
