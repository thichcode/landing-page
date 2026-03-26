const reasons = [
  {
    title: 'Engineering rules the day',
    body: 'Our BIM-ready frame designs, load studies, and anchoring plans keep the authorities satisfied before we touch the first bolt.',
  },
  {
    title: 'Safety by design',
    body: 'Sensors, drone footage, and daily inspections sync to our command center so nothing slips through the cracks.',
  },
  {
    title: 'Logistics precision',
    body: 'Global depots, rotating certified crews, and spare-part trackers keep the job moving even in remote zones.',
  },
];

export function WhyChoose() {
  return (
    <section className="space-y-6" id="solutions">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Why choose Anta</p>
        <h2 className="text-3xl font-semibold text-dark-blue">Engineering-first access systems</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.title} className="space-y-3 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
            <h3 className="text-xl font-semibold text-dark-blue">{reason.title}</h3>
            <p className="text-sm text-slate-600">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
