type Stat = {
  value: string;
  label: string;
};

export function StatsStrip({ stats }: { stats: Stat[] }) {
  const accent = ['#22c55e', '#38bdf8', '#f97316'];
  return (
    <section className="grid w-full grid-cols-1 gap-4 rounded-3xl border border-white/70 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] p-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
        >
          <div className="flex flex-col">
            <p className="text-base font-semibold text-dark-blue">{stat.value}</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
          </div>
          <span
            className="h-10 w-10 rounded-full"
            style={{ background: accent[index % accent.length], boxShadow: `0 10px 25px ${accent[index % accent.length]}33` }}
          />
        </div>
      ))}
    </section>
  );
}
