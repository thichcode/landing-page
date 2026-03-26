import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Contact form submitted:', body);
  // TODO: wire up email/slack/webhook when credentials are available.
  return NextResponse.json({ status: 'received' });
}
