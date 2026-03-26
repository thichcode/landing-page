import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { PostsSection } from '@/components/PostsSection';
import { SolutionGrid } from '@/components/SolutionGrid';
import { StatGrid } from '@/components/StatGrid';
import { getLocaleData, supportedLocales } from '@/lib/locale';
import type { LocaleKey } from '@/lib/locale';
import { getLocalePosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const revalidate = 60;

type LocaleParams = {
  params?: Promise<{ locale?: string }>;
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const resolved = await params;
  const locale = ((resolved?.locale as LocaleKey) ?? 'en') as LocaleKey;
  if (!supportedLocales.includes(locale)) {
    return {
      title: 'Anta Scaffolding',
      description: 'Engineering-grade scaffold solutions.',
    };
  }
  const data = getLocaleData(locale);
  return {
    title: `${data.hero.title} · Anta Scaffolding`,
    description: data.hero.description,
  };
}

export default async function LandingPage({ params }: LocaleParams) {
  const resolved = await params;
  const locale = ((resolved?.locale as LocaleKey) ?? 'en') as LocaleKey;
  const copy = supportedLocales.includes(locale) ? getLocaleData(locale) : getLocaleData('en');
  const posts = await getLocalePosts(locale);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-10">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
          <LocaleSwitcher />
          <p className="ml-auto text-right text-[10px] tracking-[0.6em] text-slate-400">Anta Solutions · Global</p>
        </div>
        <Hero content={copy.hero} />
      </header>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">Solution Stack</p>
            <h2 className="mt-2 text-3xl font-semibold text-dark-blue">Operational readiness in every region</h2>
          </div>
        </div>
        <SolutionGrid solutions={copy.solutions} />
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Impact metrics</p>
          <h2 className="text-3xl font-semibold text-dark-blue">Track records that reassure</h2>
        </div>
        <StatGrid stats={copy.stats} />
      </section>

      <PostsSection posts={posts} />

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Process</p>
          <h2 className="text-3xl font-semibold text-dark-blue">From brief to teardown</h2>
        </div>
        <ProcessTimeline steps={copy.process} />
      </section>

      <section className="grid gap-8 rounded-[32px] border border-white/70 bg-gradient-to-br from-dark-blue/10 via-white to-white p-8 shadow-[0_30px_60px_rgba(15,23,42,0.25)] lg:grid-cols-[1.2fr,1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/90">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-dark-blue">{copy.cta.title}</h2>
          <p className="mt-3 text-sm text-slate-700">{copy.cta.description}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.5em] text-slate-500">
            {copy.footer.contact}
          </p>
          <p className="text-sm text-slate-600">{copy.footer.email}</p>
          <p className="text-sm text-slate-600">{copy.footer.phone}</p>
        </div>
        <div className="col-span-2">
          <ContactForm formCopy={copy.form} successMessage={copy.form.success} />
        </div>
      </section>
    </main>
  );
}
