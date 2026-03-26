'use client';

import { FormEvent, useEffect, useState } from 'react';

type AdminPost = {
  id: string;
  title: string;
  summary: string;
  locale: string;
  category: string;
  author: string;
  publishedAt: string;
};

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'zh', label: '中文' },
];

export const metadata = {
  title: 'Admin · Anta Scaffolding',
  description: 'Publish announcements that show up inside the landing page news feed.',
};

export default function AdminPage() {
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [formState, setFormState] = useState({
    title: '',
    summary: '',
    category: '',
    locale: 'en',
    secret: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = {
      title: formState.title,
      summary: formState.summary,
      category: formState.category,
      locale: formState.locale,
      secret: formState.secret,
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? 'Unable to create post');
      }

      setPosts((prev) => [data, ...prev]);
      setFormState({ title: '', summary: '', category: '', locale: 'en', secret: '' });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage((err as Error).message);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-16 pt-12">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Admin</p>
        <h1 className="text-4xl font-semibold text-dark-blue">Publish a quick story</h1>
        <p className="text-sm text-slate-500">Create announcements that show up in every locale’s news feed.</p>
      </header>

      <section className="grid gap-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-600">
              Locale
              <select
                value={formState.locale}
                onChange={(event) => setFormState((prev) => ({ ...prev, locale: event.target.value }))}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              >
                {localeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-600">
              Category
              <input
                value={formState.category}
                onChange={(event) => setFormState((prev) => ({ ...prev, category: event.target.value }))}
                type="text"
                placeholder="Operations / Safety"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </label>
          </div>
          <label className="text-sm font-semibold text-slate-600">
            Title
            <input
              value={formState.title}
              onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
              type="text"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label className="text-sm font-semibold text-slate-600">
            Summary
            <textarea
              value={formState.summary}
              onChange={(event) => setFormState((prev) => ({ ...prev, summary: event.target.value }))}
              rows={4}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label className="text-sm font-semibold text-slate-600">
            Admin secret
            <input
              value={formState.secret}
              onChange={(event) => setFormState((prev) => ({ ...prev, secret: event.target.value }))}
              type="password"
              required
              placeholder="provided by ops"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          {status === 'error' && <p className="text-sm text-red-500">{errorMessage}</p>}
          {status === 'success' && <p className="text-sm text-green-600">Post created locally; refresh to persist from filesystem.</p>}
          <button
            type="submit"
            className="rounded-full bg-dark-blue px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#0a1731]"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Publishing…' : 'Publish announcement'}
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-blue">Recent posts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{post.locale.toUpperCase()} · {post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-dark-blue">{post.title}</h3>
              <p className="text-sm text-slate-600">{post.summary}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{new Date(post.publishedAt).toLocaleString()}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
