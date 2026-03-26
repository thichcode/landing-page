const testimonials = [
  {
    quote: '“Anta built us a turnkey access plan for a mixed-use tower with zero rework.”',
    source: 'Global City Developers',
  },
  {
    quote: '“Every inspection and safety checkpoint was documented and shared via their dashboard.”',
    source: 'Coastal Bridge Authority',
  },
  {
    quote: '“Their rapid mobilization cut our critical path by two weeks.”',
    source: 'Northwind Infrastructure',
  },
];

export function TestimonialSection() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Testimonials</p>
        <h2 className="text-3xl font-semibold text-dark-blue">Field teams trust Anta</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.source} className="flex h-full flex-col justify-between gap-3 rounded-3xl border border-white/70 bg-gradient-to-br from-[#eef2ff] to-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.12)]">
            <p className="text-base text-slate-700">{testimonial.quote}</p>
            <p className="mt-auto text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">{testimonial.source}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
