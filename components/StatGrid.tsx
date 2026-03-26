type Stat = {
  value: string;
  label: string;
};

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <section className="grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/60 bg-gradient-to-br from-white to-white/50 p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <p className="text-3xl font-semibold text-dark-blue">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.4em] text-slate-500">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
