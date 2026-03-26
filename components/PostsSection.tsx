'use client';

import { useMemo, useState } from 'react';
import { Post } from '@/lib/posts';

const filters = [
  { key: 'latest', label: 'Latest' },
  { key: 'all', label: 'All' },
] as const;

type FilterKey = typeof filters[number]['key'];

export function PostsSection({ posts }: { posts: Post[] }) {
  const [view, setView] = useState<FilterKey>('latest');
  const displayPosts = useMemo(() => {
    if (view === 'all') {
      return posts;
    }
    return posts.slice(0, 3);
  }, [posts, view]);
  const featured = displayPosts[0];
  const remainder = displayPosts.slice(1);

  if (!posts.length) {
    return null;
  }

  return (
    <section id="news-feed" className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">News & updates</p>
          <span className="text-[10px] uppercase tracking-[0.45em] text-slate-400">Field intelligence</span>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold text-dark-blue">Latest from the field</h2>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] transition focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/60 ${
                  view === filter.key
                    ? 'border-dark-blue bg-dark-blue/10 text-dark-blue'
                    : 'border-white/70 text-slate-500 hover:border-dark-blue'
                }`}
                onClick={() => setView(filter.key)}
                aria-pressed={view === filter.key}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {featured && (
        <article className="grid gap-6 rounded-3xl border border-white/70 bg-gradient-to-br from-primary/10 to-white p-6 md:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.45em] text-primary">Featured</p>
            <h3 className="text-2xl font-semibold text-dark-blue">{featured.title}</h3>
            <p className="text-sm text-slate-600">{featured.summary}</p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-slate-500">
              <span>{featured.category}</span>
              <span>·</span>
              <span>{new Date(featured.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/50 p-4 text-xs text-slate-500">
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">Lead author</p>
            <p className="text-lg font-semibold text-dark-blue">{featured.author}</p>
            <p className="mt-4 text-[11px] text-slate-500">Field update • {featured.category}</p>
          </div>
        </article>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {remainder.map((post) => (
          <article key={post.id} className="space-y-2 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-slate-500">
              <span className="text-primary/90">{post.category}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <h3 className="text-lg font-semibold text-dark-blue">{post.title}</h3>
            <p className="text-sm text-slate-600">{post.summary}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{post.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
