import caseStudies from '../data/case-studies.json';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Case studies</p>
        <h2 className="text-3xl font-semibold text-dark-blue">Proof from the field</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <article key={caseStudy.title} className="flex flex-col gap-3 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{caseStudy.focus}</p>
            <h3 className="text-xl font-semibold text-dark-blue">{caseStudy.title}</h3>
            <p className="text-sm text-slate-600">{caseStudy.description}</p>
            <p className="text-sm font-semibold text-accent">{caseStudy.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
