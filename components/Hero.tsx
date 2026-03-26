type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-br from-[#eef4ff] via-white to-[#fff7f2] p-8 shadow-[0_30px_60px_rgba(15,23,42,0.15)] lg:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">{content.eyebrow}</p>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-dark-blue lg:text-5xl">{content.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{content.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-dark-blue px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#0a1731]">
              {content.ctaPrimary}
            </button>
            <button className="rounded-full border border-dark-blue/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-dark-blue transition hover:border-dark-blue hover:bg-white">
              {content.ctaSecondary}
            </button>
          </div>
        </div>
        <div className="order-first -mr-4 ml-auto hidden w-full max-w-sm lg:block lg:order-none">
          <div className="aspect-[3/2] w-full rounded-3xl bg-gradient-to-br from-primary/80 to-accent/90 p-6 text-white shadow-[0_20px_50px_rgba(244,63,94,0.35)]">
            <p className="text-sm uppercase tracking-[0.45em]">Live 24/7</p>
            <p className="mt-6 text-5xl font-semibold">Safety</p>
            <p className="mt-1 text-lg font-light text-white/80">& Monitoring</p>
            <p className="mt-6 text-sm leading-relaxed text-white/90">
              Sensors, inspections, and drone telemetry fused into a single workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
