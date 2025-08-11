// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // TODO: บันทึก email ลงฐานข้อมูล หรือส่งไปยัง Email Service เช่น Mailchimp

  return NextResponse.json({ message: 'Subscribed successfully' });
}
