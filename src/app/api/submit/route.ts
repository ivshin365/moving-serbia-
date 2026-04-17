import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabase } from '@/lib/supabase';
import { sendSMS } from '@/lib/sms';

export const dynamic = 'force-dynamic';

const moveItemSchema = z.object({
  key: z.string(),
  qty: z.number().min(1),
});

const submitSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(6),
  from_city: z.string().min(1),
  from_address: z.string().min(1),
  from_floor: z.number().min(0),
  from_elevator: z.boolean(),
  to_city: z.string().min(1),
  to_address: z.string().min(1),
  to_floor: z.number().min(0),
  to_elevator: z.boolean(),
  move_date: z.string().min(1),
  move_time: z.string().min(1),
  items: z.array(moveItemSchema),
  boxes: z.number().min(0),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = submitSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabase();
  const data = parsed.data;

  const { error: insertError } = await supabase.from('requests').insert([data]);
  if (insertError) {
    console.error('Supabase insert error:', insertError);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  const { data: movers } = await supabase
    .from('movers')
    .select('phone')
    .eq('active', true);

  if (movers) {
    const msg = `Nova selidba: ${data.name}, tel ${data.phone}, iz ${data.from_city} u ${data.to_city}, datum ${data.move_date} u ${data.move_time}. Pozovite klijenta!`;
    await Promise.all(movers.map((m) => sendSMS(m.phone, msg)));
  }

  return NextResponse.json({ success: true });
}
