import { NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

export async function POST(request: Request) {
  const { name, company, phone, message } = await request.json();
  const payload = { name, company, phone, message, receivedAt: new Date().toISOString() };
  console.log('Contact form submitted:', payload);

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', payload }),
      });
    } catch (error) {
      console.warn('Unable to post to contact webhook', error);
    }
  }

  return NextResponse.json({ status: 'received' });
}
