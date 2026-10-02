import PageHeader from "./PageHeader";
import StatCard from "./StatCard";
import { statisticsMonths, statisticsSummary } from "../data/interpreterData";

const stats = [
  { label: "Total de señas", value: "188", detail: "Diccionario actual", icon: "▦" },
  { label: "Validadas", value: "128", detail: "68% del total", icon: "✓", tone: "green" },
  { label: "Corregidas", value: "36", detail: "19% del total", icon: "✎", tone: "purple" },
  { label: "Pendientes", value: "24", detail: "13% del total", icon: "!", tone: "orange" }
];

export default function StatisticsContent() {
  return (
    <>
      <PageHeader title="Estadísticas" description="Consulta indicadores sobre la actividad de validación y corrección." />
      <section className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat)=><StatCard key={stat.label} {...stat}/>)}</section>
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
        <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl"><header className="mb-5"><h2 className="text-lg font-bold">Validaciones por mes</h2><p className="mt-1 text-xs text-slate-400">Comparación de actividad registrada.</p></header><section className="flex h-64 items-end gap-2 sm:gap-4">{statisticsMonths.map(([month,value])=><figure className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={month}><span className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-300" style={{height:`${value}%`}}/><figcaption className="text-[11px] text-slate-500">{month}</figcaption></figure>)}</section></article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl"><header className="mb-5"><h2 className="text-lg font-bold">Estado de las señas</h2><p className="mt-1 text-xs text-slate-400">Distribución actual.</p></header><figure className="mx-auto grid h-44 w-44 place-items-center rounded-full bg-[conic-gradient(#34d399_0_68%,#a78bfa_68%_87%,#fb923c_87%_100%)] relative after:absolute after:h-28 after:w-28 after:rounded-full after:bg-[#101d27]"><span className="relative z-10 text-xl font-black">68%</span></figure><ul className="mx-auto mt-5 max-w-xs space-y-3 text-sm text-slate-400"><li className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-400"/>Validadas <strong className="ml-auto text-white">68%</strong></li><li className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-violet-400"/>Corregidas <strong className="ml-auto text-white">19%</strong></li><li className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-orange-400"/>Pendientes <strong className="ml-auto text-white">13%</strong></li></ul></article>
      </section>
      <article className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl"><header className="mb-5"><h2 className="text-lg font-bold">Resumen</h2></header><ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">{statisticsSummary.map(([label,value])=><li className="rounded-xl border border-white/10 bg-white/[0.025] p-4" key={label}><span className="block text-[11px] text-slate-500">{label}</span><strong className="mt-2 block text-sm">{value}</strong></li>)}</ul></article>
    </>
  );
}
