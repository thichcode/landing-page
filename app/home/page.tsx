import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ImageGallery } from '@/components/ImageGallery';
import { NavBar } from '@/components/NavBar';
import { PartnersSection } from '@/components/PartnersSection';
import { PostsSection } from '@/components/PostsSection';
import { StatsStrip } from '@/components/StatsStrip';
import { TestimonialSection } from '@/components/TestimonialSection';
import { WhyChoose } from '@/components/WhyChoose';
import { getLocalePosts } from '@/lib/posts';
import type { Metadata } from 'next';

const heroContent = {
  eyebrow: 'Global access & safety',
  title: 'Engineered scaffolding for projects that cannot afford downtime.',
  description:
    'Anta Access designs, mobilizes, and monitors complete scaffolding ecosystems with the rigor of a systems integrator and the speed of a logistics firm.',
  ctaPrimary: 'Request a quote',
  ctaSecondary: 'See services',
};

const stats = [
  { value: '1200+', label: 'projects delivered' },
  { value: '25h', label: 'average design turn' },
  { value: '72h', label: 'mobilization' },
];

export const metadata: Metadata = {
  title: 'Anta Access · Home',
  description: 'Homepage for Anta Access, emphasizing trust, stats, and proof points.',
};

export default async function HomePage() {
  const posts = await getLocalePosts('en');
  return (
    <main className="min-h-screen bg-soft-gray">
      <NavBar />
      <Hero content={heroContent} />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:gap-12">
        <StatsStrip stats={stats} />
        <PartnersSection />
        <WhyChoose />
        <CaseStudiesSection />
        <ImageGallery />
        <PostsSection posts={posts} />
        <TestimonialSection />
      </div>
      <Footer />
    </main>
  );
}
