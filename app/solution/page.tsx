import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ImageGallery } from '@/components/ImageGallery';
import { NavBar } from '@/components/NavBar';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { PostsSection } from '@/components/PostsSection';
import { SolutionGrid } from '@/components/SolutionGrid';
import { StatsStrip } from '@/components/StatsStrip';
import { TestimonialSection } from '@/components/TestimonialSection';
import { getLocaleData } from '@/lib/locale';
import { getLocalePosts } from '@/lib/posts';
import type { Metadata } from 'next';

const stats = [
  { value: '98%', label: 'safety audits' },
  { value: '24/7', label: 'command coverage' },
  { value: '3 continents', label: 'presence' },
];

export const metadata: Metadata = {
  title: 'Anta Access · Solutions',
  description: 'Detailed solution page covering engineering, monitoring, and logistics.',
};

export default async function SolutionPage() {
  const copy = getLocaleData('en');
  const posts = await getLocalePosts('en');

  return (
    <main className="min-h-screen bg-soft-gray">
      <NavBar />
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:gap-10">
        <Hero content={copy.hero} />
        <StatsStrip stats={stats} />
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">Mission</p>
            <h2 className="text-3xl font-semibold text-dark-blue">Engineering scaffolding for certainty</h2>
          </div>
          <SolutionGrid solutions={copy.solutions} />
        </section>
        <ImageGallery />
        <section className="space-y-6">
          <ProcessTimeline steps={copy.process} />
        </section>
        <PostsSection posts={posts} />
        <TestimonialSection />
        <section className="grid gap-8 rounded-[32px] border border-white/70 bg-gradient-to-br from-dark-blue/10 via-white to-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.25)] lg:grid-cols-[1.2fr,1fr]">
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
      </section>
      <Footer />
    </main>
  );
}
