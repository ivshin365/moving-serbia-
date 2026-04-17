import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function isAuthorized(req: NextRequest): boolean {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

const moverSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(6),
  city: z.string().min(1),
});

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const supabase = getSupabase();
  const { data, error } = await supabase.from('movers').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: 'Database error' }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  const parsed = moverSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const supabase = getSupabase();
  const { data, error } = await supabase.from('movers').insert([{ ...parsed.data, active: true }]).select().single();
  if (error) return NextResponse.json({ error: 'Database error' }, { status: 500 });
  return NextResponse.json(data);
}
