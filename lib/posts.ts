import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { LocaleKey, supportedLocales } from './locale';

export type Post = {
  id: string;
  locale: LocaleKey;
  category: string;
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
};

const postsFile = path.join(process.cwd(), 'data', 'posts.json');
let cachedPosts: Post[] | null = null;

async function loadPosts(): Promise<Post[]> {
  if (cachedPosts) {
    return cachedPosts;
  }
  try {
    const raw = await fs.readFile(postsFile, 'utf-8');
    const data = JSON.parse(raw) as Post[];
    cachedPosts = data;
    return cachedPosts;
  } catch (error) {
    console.warn('Unable to read posts data', error);
    cachedPosts = [];
    return cachedPosts;
  }
}

async function persistPosts(posts: Post[]) {
  if (!posts.length) {
    return;
  }
  try {
    await fs.writeFile(postsFile, JSON.stringify(posts, null, 2), 'utf-8');
  } catch (error) {
    console.warn('Unable to persist posts (readonly filesystem?):', error);
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await loadPosts();
  return [...posts].sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));
}

export async function getLocalePosts(locale: LocaleKey): Promise<Post[]> {
  if (!supportedLocales.includes(locale)) {
    locale = 'en';
  }
  const posts = await getAllPosts();
  return posts.filter((post) => post.locale === locale);
}

export async function addPost(data: {
  locale: LocaleKey;
  title: string;
  summary: string;
  category: string;
  author?: string;
}): Promise<Post> {
  const basePosts = await loadPosts();
  const newPost: Post = {
    id: randomUUID(),
    locale: supportedLocales.includes(data.locale) ? data.locale : 'en',
    category: data.category,
    title: data.title,
    summary: data.summary,
    author: data.author ?? 'Anta Team',
    publishedAt: new Date().toISOString(),
  };
  cachedPosts = [newPost, ...basePosts];
  await persistPosts(cachedPosts);
  return newPost;
}
