import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { SolutionGrid } from '@/components/SolutionGrid';
import { getLocaleData } from '@/lib/locale';
import type { Metadata } from 'next';

const heroContent = {
  eyebrow: 'Turnkey services',
  title: 'Operational support for every scaffolding lifecycle.',
  description: 'From engineering to dismantle, Anta Access pairs certified crews with command-center coordination so service packages feel bespoke each time.',
  ctaPrimary: 'Explore services',
  ctaSecondary: 'Download scope',
};

const services = [
  'Design & modeling with BIM exports.',
  'Prefabrication + staging near-site depots.',
  'Safety monitoring: sensors, drones, inspections.',
  'Logistics control room & spare-part network.',
  'Field support & inspections through completion.',
];

export const metadata: Metadata = {
  title: 'Anta Access · Services',
  description: 'Service page outlining the full lifecycle support Anta offers for scaffolding deployments.',
};

export default function ServicePage() {
  const copy = getLocaleData('en');

  return (
    <main className="min-h-screen bg-soft-gray">
      <NavBar />
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <Hero content={heroContent} />
        <section className="grid gap-4 rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Services</p>
            <h2 className="text-3xl font-semibold text-dark-blue">Lifecycle coverage</h2>
          </div>
          <ul className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                {service}
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Process</p>
            <h2 className="text-3xl font-semibold text-dark-blue">Service orchestration</h2>
          </div>
          <ProcessTimeline steps={copy.process} />
        </section>
        <section className="rounded-[32px] border border-white/70 bg-gradient-to-br from-dark-blue/10 via-white to-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.25)] lg:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/90">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-dark-blue">{copy.cta.title}</h2>
            <p className="mt-3 text-sm text-slate-700">{copy.cta.description}</p>
          </div>
          <ContactForm formCopy={copy.form} successMessage={copy.form.success} />
        </section>
      </section>
      <Footer />
    </main>
  );
}
