const partners = ['UrbanCore', 'Horizon Build', 'Vertex Infrastructures', 'Northwind Engineering', 'StakeWell', 'Elevate Logistics'];

export function PartnersSection() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">Partners</p>
        <h2 className="text-2xl font-semibold text-dark-blue">Trusted by global build teams</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm font-semibold uppercase tracking-[0.5em] text-slate-500 sm:grid-cols-3 md:grid-cols-6">
        {partners.map((partner) => (
          <span key={partner} className="rounded-2xl border border-white/60 bg-white/60 p-3 text-center text-xs leading-tight text-dark-blue shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}
