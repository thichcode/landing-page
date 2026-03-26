import Image from 'next/image';
import Link from 'next/link';

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-[#eef4ff] via-white to-[#fff7f2] p-6 shadow-[0_30px_60px_rgba(15,23,42,0.15)] transition-all duration-300 hover:shadow-[0_35px_70px_rgba(15,23,42,0.25)] sm:p-8 lg:p-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/90">{content.eyebrow}</p>
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-dark-blue sm:text-3xl lg:text-5xl">{content.title}</h1>
          <p className="mt-3 text-base text-slate-700 sm:mt-4 sm:text-lg">{content.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-dark-blue px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#0a1731] sm:text-sm"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href="#news-feed"
              className="rounded-full border border-dark-blue/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-dark-blue transition hover:border-dark-blue hover:bg-white sm:text-sm"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="order-first -mr-4 ml-auto hidden w-full max-w-sm lg:block lg:order-none">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-white/70 shadow-[0_20px_50px_rgba(15,23,42,0.2)]">
            <Image
              src="/images/hero-structure.jpg"
              alt="Engineered scaffolding tower"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 420px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
            <div className="absolute bottom-4 left-4 space-y-1 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/80">On-site ready</p>
              <p className="text-lg font-semibold text-white">Prefabricated + certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
