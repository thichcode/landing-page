type Step = {
  title: string;
  description: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <section className="grid gap-8 lg:grid-cols-4">
      {steps.map((step, idx) => (
        <article
          key={step.title}
          className="flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_15px_25px_rgba(15,23,42,0.08)]"
        >
          <span
            className="self-start rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white"
          >
            Step {idx + 1}
          </span>
          <h3 className="text-xl font-semibold text-dark-blue">{step.title}</h3>
          <p className="text-sm text-slate-600">{step.description}</p>
        </article>
      ))}
    </section>
  );
}
