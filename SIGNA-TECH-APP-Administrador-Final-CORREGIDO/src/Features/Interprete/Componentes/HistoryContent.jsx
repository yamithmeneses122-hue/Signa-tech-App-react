import { useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import StatusBadge from "./StatusBadge";
import { getHistory } from "../funcionalidades/interpreterStorage";
import { filterSigns } from "../funcionalidades/interpreterUtils";

export default function HistoryContent() {
  const [query, setQuery] = useState("");
  const [action, setAction] = useState("Todas");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const history = getHistory();
  const filtered = useMemo(() => filterSigns(history, query).filter((item) => action === "Todas" || item.action === action), [history, query, action]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <PageHeader title="Historial" description="Consulta las acciones realizadas sobre las señas del sistema." />
      <section className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 lg:flex-row lg:items-end"><SearchBar value={query} onChange={(value)=>{setQuery(value);setPage(1)}} placeholder="Buscar en historial..." /><Filter label="Acción" value={action} onChange={(value)=>{setAction(value);setPage(1)}} options={[{value:"Todas",label:"Todas"},{value:"Validación",label:"Validación"},{value:"Corrección",label:"Corrección"},{value:"Revisión",label:"Revisión"}]}/></section>
      <section className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-xs text-slate-500">Registro de actividad</caption><thead><tr className="text-[10px] uppercase tracking-wider text-slate-500"><th className="border-b border-white/10 px-3 py-3">Seña</th><th className="border-b border-white/10 px-3 py-3">Acción</th><th className="border-b border-white/10 px-3 py-3">Usuario</th><th className="border-b border-white/10 px-3 py-3">Estado</th><th className="border-b border-white/10 px-3 py-3">Fecha</th></tr></thead><tbody>{rows.map((item)=><tr key={item.id}><th className="border-b border-white/10 px-3 py-3">{item.word}</th><td className="border-b border-white/10 px-3 py-3 text-slate-400">{item.action}</td><td className="border-b border-white/10 px-3 py-3 text-slate-400">{item.user}</td><td className="border-b border-white/10 px-3 py-3"><StatusBadge status={item.status}/></td><td className="border-b border-white/10 px-3 py-3 text-slate-400">{item.date}</td></tr>)}</tbody></table>{!rows.length&&<p className="py-8 text-center text-sm text-slate-500">No hay registros para los filtros seleccionados.</p>}<Pagination page={page} totalPages={totalPages} onChange={setPage}/></section>
    </>
  );
}
