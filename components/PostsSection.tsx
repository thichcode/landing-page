import { Post } from '@/lib/posts';

export function PostsSection({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">News & updates</p>
        <h2 className="text-3xl font-semibold text-dark-blue">Latest from the field</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="flex h-full flex-col gap-3 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_15px_25px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-500">
              <span className="text-primary/90">{post.category}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
            </div>
            <h3 className="text-xl font-semibold text-dark-blue">{post.title}</h3>
            <p className="text-sm text-slate-600">{post.summary}</p>
            <p className="mt-auto text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{post.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
