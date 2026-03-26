type Solution = {
  tag: string;
  title: string;
  description: string;
  details: string[];
};

export function SolutionGrid({ solutions }: { solutions: Solution[] }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution, index) => (
        <article
          key={solution.title}
          className="relative flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/70 p-6 pt-10 shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
        >
          <div
            className="absolute left-0 top-0 h-1.5 w-full rounded-t-3xl"
            style={{ background: `linear-gradient(90deg, rgba(15,23,42,0) 0%, rgba(59,130,246,1) 50%, rgba(244,63,94,1) 100%)` }}
          />
          <span className="text-xs font-semibold tracking-[0.4em] text-primary/80">{solution.tag}</span>
          <h3 className="text-2xl font-semibold text-dark-blue">{solution.title}</h3>
          <p className="text-sm text-slate-600">{solution.description}</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-800">
            {solution.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-dark-blue" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
