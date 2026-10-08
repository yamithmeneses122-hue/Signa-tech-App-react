import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import StatCard from "./StatCard";
import StatusBadge from "./StatusBadge";
import { activityMonthNames, signCategories } from "../data/interpreterData";
import { getHistory, getSigns } from "../funcionalidades/interpreterStorage";

function parseHistoryDate(value) {
  const parts = String(value || "").split("/");
  if (parts.length !== 3) return null;
  const [day, month, year] = parts.map(Number);
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getMonthlyActivity(history) {
  const now = new Date();
  const months = Array.from({ length: 8 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 7 + index, 1);
    return {
      key: `${date.getFullYear()}-${date.getMonth()}`,
      label: activityMonthNames[date.getMonth()],
      year: date.getFullYear(),
      count: 0
    };
  });
  const monthsByKey = new Map(months.map((month) => [month.key, month]));

  history.forEach((record) => {
    const date = parseHistoryDate(record.date);
    const month = date && monthsByKey.get(`${date.getFullYear()}-${date.getMonth()}`);
    if (month) month.count += 1;
  });

  return months;
}

export default function DashboardContent() {
  const signs = getSigns();
  const history = getHistory();
  const pending = signs.filter((sign) => sign.status === "Pendiente").length;
  const validated = signs.filter((sign) => sign.status === "Validada").length;
  const corrected = signs.filter((sign) => sign.status === "Corregida").length;
  const stats = [
    { label: "Señas registradas", value: signs.length, detail: "En el diccionario", icon: "+", tone: "cyan" },
    { label: "Señas validadas", value: validated, detail: "Aprobadas", icon: "✓", tone: "green" },
    { label: "Corregidas", value: corrected, detail: "Con ajustes aplicados", icon: "✎", tone: "purple" },
    { label: "Pendientes", value: pending, detail: "Requieren revisión", icon: "!", tone: "orange" }
  ];
  const monthlyActivity = getMonthlyActivity(history);
  const maxActivity = Math.max(1, ...monthlyActivity.map((month) => month.count));
  const categoryCounts = signCategories.map((category) => [
    category,
    signs.filter((sign) => sign.category === category).length
  ]);
  const latestActivity = history.slice(0, 5);

  return (
    <>
      <PageHeader title="Inicio" description="Resumen de la actividad y las tareas pendientes del módulo de intérprete." />
      {pending > 0 && (
        <Link
          className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.06] px-5 py-4 transition-colors hover:border-cyan-300/60 hover:bg-cyan-400/10"
          to="/interprete/validar"
        >
          <span>
            <strong className="block text-sm text-cyan-200">
              Tienes {pending} {pending === 1 ? "seña pendiente" : "señas pendientes"} de validación
            </strong>
            <small className="mt-1 block text-xs text-slate-400">Abre la cola para revisarlas.</small>
          </span>
          <span className="text-sm font-bold text-cyan-300">Revisar señas →</span>
        </Link>
      )}
      <section className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Resumen del módulo">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </section>
      <section className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]" aria-label="Indicadores de actividad">
        <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          <header className="mb-5">
            <h2 className="text-lg font-bold">Actividad mensual</h2>
            <p className="mt-1 text-xs text-slate-400">Acciones registradas durante los últimos ocho meses.</p>
          </header>
          <section className="flex h-64 items-end gap-2 sm:gap-4" aria-label="Gráfico de actividad mensual">
            {monthlyActivity.map((month) => (
              <figure className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={month.key}>
                <span
                  className={`w-full max-w-12 rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300 shadow-lg shadow-cyan-400/10 ${month.count ? "min-h-1" : ""}`}
                  style={{ height: `${(month.count / maxActivity) * 100}%` }}
                  aria-label={`${month.count} acciones`}
                  title={`${month.label} ${month.year}: ${month.count} acciones`}
                />
                <figcaption className="text-[11px] text-slate-500">{month.label}</figcaption>
              </figure>
            ))}
          </section>
        </article>
        <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          <header className="mb-5">
            <h2 className="text-lg font-bold">Categorías</h2>
            <p className="mt-1 text-xs text-slate-400">Distribución de señas registradas.</p>
          </header>
          {signs.length ? (
            <ul className="divide-y divide-slate-800">
              {categoryCounts.map(([category, count]) => (
                <li className="flex justify-between py-3 text-sm text-slate-400" key={category}>
                  <span>{category}</span>
                  <strong className="text-cyan-300">{count} ({Math.round((count / signs.length) * 100)}%)</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-6 text-center text-sm text-slate-500">Aún no hay señas registradas.</p>
          )}
        </article>
      </section>
      <article className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <header className="mb-5 flex items-center justify-between gap-4">
          <section>
            <h2 className="text-lg font-bold">Últimas modificaciones</h2>
            <p className="mt-1 text-xs text-slate-400">Actividad reciente en el diccionario.</p>
          </section>
          <Link className="text-xs font-semibold text-cyan-300 hover:underline" to="/interprete/historial">Ver historial</Link>
        </header>
        {latestActivity.length ? (
          <ul className="divide-y divide-slate-800">
            {latestActivity.map((item) => {
              const sign = signs.find((record) => record.word === item.word);
              return (
                <li className="grid grid-cols-[auto_1fr] items-center gap-3 py-3 sm:grid-cols-[auto_1fr_auto_auto]" key={item.id}>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/5" aria-hidden="true">✋</span>
                  <section>
                    <strong className="block text-sm">{item.word}</strong>
                    <small className="text-[11px] text-slate-500">{sign?.category || item.action}</small>
                  </section>
                  <StatusBadge status={item.status} />
                  <time className="text-[11px] text-slate-500">{item.date}</time>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="py-6 text-center text-sm text-slate-500">Las acciones que realices aparecerán aquí.</p>
        )}
      </article>
    </>
  );
}
