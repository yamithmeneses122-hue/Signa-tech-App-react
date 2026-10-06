import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import StatCard from "./StatCard";
import { categoryDistribution, dashboardStats, latestActivity, monthlyActivity } from "../data/interpreterData";
import { getSigns } from "../funcionalidades/interpreterStorage";

export default function DashboardContent() {
  const signs = getSigns();
  const pending = signs.filter((sign) => sign.status === "Pendiente").length;

  return (
    <>
      <PageHeader title="Inicio" description="Resumen de la actividad y las tareas pendientes del módulo de intérprete." />
      <section className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Resumen del módulo">
        {dashboardStats.map((stat) => <StatCard key={stat.label} {...stat} value={stat.label === "Pendientes" ? pending : stat.value} />)}
      </section>
      <section className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]" aria-label="Indicadores de actividad">
        <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          <header className="mb-5"><h2 className="text-lg font-bold">Actividad mensual</h2><p className="mt-1 text-xs text-slate-400">Validaciones realizadas durante los últimos meses.</p></header>
          <section className="flex h-64 items-end gap-2 sm:gap-4" aria-label="Gráfico de actividad mensual">
            {monthlyActivity.map(([month, value]) => (
              <figure className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={month}>
                <span className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300 shadow-lg shadow-cyan-400/10" style={{ height: `${value}%` }} aria-label={`${value} validaciones`} />
                <figcaption className="text-[11px] text-slate-500">{month}</figcaption>
              </figure>
            ))}
          </section>
        </article>
        <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          <header className="mb-5"><h2 className="text-lg font-bold">Categorías</h2><p className="mt-1 text-xs text-slate-400">Distribución de señas.</p></header>
          <ul className="divide-y divide-slate-800">{categoryDistribution.map(([category, percentage]) => <li className="flex justify-between py-3 text-sm text-slate-400" key={category}><span>{category}</span><strong className="text-cyan-300">{percentage}</strong></li>)}</ul>
        </article>
      </section>
      <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <header className="mb-5 flex items-center justify-between gap-4"><section><h2 className="text-lg font-bold">Últimas modificaciones</h2><p className="mt-1 text-xs text-slate-400">Actividad reciente en el diccionario.</p></section><Link className="text-xs font-semibold text-cyan-300 hover:underline" to="/interprete/historial">Ver historial</Link></header>
        <ul className="divide-y divide-slate-800">
          {latestActivity.map((item) => <li className="grid grid-cols-[auto_1fr] items-center gap-3 py-3 sm:grid-cols-[auto_1fr_auto_auto]" key={item.word}><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/5">✋</span><section><strong className="block text-sm">{item.word}</strong><small className="text-[11px] text-slate-500">{item.category}</small></section><span className="text-[11px] font-bold text-emerald-300">{item.status}</span><time className="text-[11px] text-slate-500">{item.date}</time></li>)}
        </ul>
      </article>
    </>
  );
}
