import { NextResponse } from 'next/server';
import { addPost, getAllPosts } from '@/lib/posts';
import type { LocaleKey } from '@/lib/locale';
import { supportedLocales } from '@/lib/locale';

const ADMIN_SECRET = process.env.ADMIN_SECRET ?? 'ant-admin-demo';

const isLocaleKey = (value: unknown): value is LocaleKey => typeof value === 'string' && supportedLocales.includes(value as LocaleKey);

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const { secret, locale, title, summary, category, author } = payload;
  const normalizedLocale = isLocaleKey(locale) ? locale : 'en';

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!title || !summary || !category || !supportedLocales.includes(normalizedLocale)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const createdPost = await addPost({ locale: normalizedLocale, title, summary, category, author });
  return NextResponse.json(createdPost);
}
