const tones = {
  cyan: "text-cyan-300 bg-cyan-400/10 border-cyan-400/15",
  green: "text-emerald-300 bg-emerald-400/10 border-emerald-400/15",
  purple: "text-violet-300 bg-violet-400/10 border-violet-400/15",
  orange: "text-orange-300 bg-orange-400/10 border-orange-400/15"
};

export default function StatCard({ label, value, detail, icon, tone = "cyan" }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl">
      <header className="flex items-center gap-3 text-sm text-slate-400">
        <span className={`grid h-9 w-9 place-items-center rounded-xl border ${tones[tone] || tones.cyan}`} aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </header>
      <strong className="mt-4 block text-3xl font-black tracking-tight">{value}</strong>
      {detail && <p className="mt-1 text-xs text-slate-400">{detail}</p>}
    </article>
  );
}
