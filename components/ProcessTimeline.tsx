type Step = {
  title: string;
  description: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <section className="grid gap-8 lg:grid-cols-4">
      {steps.map((step) => (
        <article key={step.title} className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_15px_25px_rgba(15,23,42,0.08)]">
          <div className="inline-flex items-center justify-center rounded-full border border-primary/40 p-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Step
          </div>
          <h3 className="mt-4 text-xl font-semibold text-dark-blue">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </article>
      ))}
    </section>
  );
}
