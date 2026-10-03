export default function StatCard({
  label,
  value,
  detail,
  icon,
  tone = "cyan",
  appearance = "default"
}) {
  if (appearance === "tailwind") {
    const tones = {
      cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
      teal: "border-teal-300/20 bg-teal-300/10 text-teal-300",
      green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
      amber: "border-amber-400/20 bg-amber-400/10 text-amber-400"
    };

    return (
      <article className="rounded-2xl border border-[#1a2030] bg-[#080c18] p-5 shadow-lg shadow-black/30 transition-colors theme-light:border-slate-300 theme-light:bg-white theme-light:shadow-slate-200 sm:p-6">
        <header className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400 theme-light:text-slate-600">
          {icon && (
            <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg border text-base ${tones[tone] || tones.cyan}`} aria-hidden="true">
              {icon}
            </span>
          )}
          <span>{label}</span>
        </header>
        <strong className="mt-3 block text-3xl font-extrabold text-white theme-light:text-slate-900">{value}</strong>
        {detail && <p className="mt-2 text-xs leading-relaxed text-slate-400 theme-light:text-slate-600">{detail}</p>}
      </article>
    );
  }

  return (
    <article className={`stat-card stat-card-${tone}`}>
      <header>
        <span className="stat-icon" aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </header>
      <strong>{value}</strong>
      {detail && <p>{detail}</p>}
    </article>
  );
}
