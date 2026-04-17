import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }
  const res = NextResponse.json({ success: true });
  res.cookies.set('admin_token', password, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
    sameSite: 'strict',
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete('admin_token');
  return res;
}
