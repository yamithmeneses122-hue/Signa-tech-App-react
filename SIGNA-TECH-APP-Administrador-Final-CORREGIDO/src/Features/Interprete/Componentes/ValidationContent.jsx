import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import SignCard from "./SignCard";
import StatusBadge from "./StatusBadge";
import { categoryOptions } from "../data/interpreterData";
import { getSigns } from "../funcionalidades/interpreterStorage";
import { changeSignStatus } from "../funcionalidades/interpreterActions";
import { filterSigns } from "../funcionalidades/interpreterUtils";

export default function ValidationContent() {
  const [signs, setSigns] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [status, setStatus] = useState("Pendiente");
  const [selected, setSelected] = useState(null);

  useEffect(() => { setSigns(getSigns()); }, []);

  const filtered = useMemo(() => filterSigns(signs, query, category, status), [signs, query, category, status]);

  function updateStatus(newStatus) {
    if (!selected) return;
    const updated = changeSignStatus(selected.id, newStatus);
    if (updated) {
      setSigns(updated);
      setSelected(updated.find((sign) => sign.id === selected.id) || null);
    }
  }

  return (
    <>
      <PageHeader title="Validar señas" description="Revisa las nuevas señas y decide si deben formar parte del diccionario." />
      <section className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 lg:flex-row lg:items-end" aria-label="Filtros de validación">
        <SearchBar value={query} onChange={setQuery} placeholder="Buscar por palabra..." />
        <Filter label="Categoría" value={category} onChange={setCategory} options={categoryOptions} />
        <Filter label="Estado" value={status} onChange={setStatus} options={[{value:"Pendiente",label:"Pendiente"},{value:"Todos",label:"Todos"},{value:"Validada",label:"Validada"},{value:"Rechazada",label:"Rechazada"}]} />
      </section>
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.15fr_0.85fr]" aria-label="Validación de señas">
        <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl">
          <header className="mb-5 flex items-center justify-between"><section><h2 className="text-lg font-bold">Señas</h2><p className="mt-1 text-xs text-slate-400">{filtered.length} resultado(s).</p></section><strong className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">{signs.filter((s) => s.status === "Pendiente").length}</strong></header>
          <ul className="space-y-2">{filtered.map((sign) => <li key={sign.id}><SignCard sign={sign} selected={selected?.id === sign.id} onSelect={setSelected} /></li>)}{!filtered.length && <li className="py-10 text-center text-sm text-slate-500">No hay señas que coincidan con los filtros.</li>}</ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl">
          <header className="mb-5"><h2 className="text-lg font-bold">Vista previa</h2><p className="mt-1 text-xs text-slate-400">Información de la seña seleccionada.</p></header>
          {selected ? <><figure className="grid min-h-52 place-items-center rounded-2xl border border-dashed border-cyan-400/20 bg-[#09131c]"><span className="text-7xl">✋</span></figure><section className="mt-5"><header className="flex items-center justify-between gap-3"><h2 className="text-xl font-bold">{selected.word}</h2><StatusBadge status={selected.status} /></header><dl className="mt-3 grid grid-cols-[110px_1fr] text-sm"><dt className="border-b border-white/10 py-3 text-slate-500">Categoría</dt><dd className="border-b border-white/10 py-3">{selected.category}</dd><dt className="border-b border-white/10 py-3 text-slate-500">Significado</dt><dd className="border-b border-white/10 py-3">{selected.meaning}</dd><dt className="py-3 text-slate-500">Descripción</dt><dd className="py-3 leading-6">{selected.description}</dd></dl></section><footer className="mt-5 flex justify-end gap-2"><button className="rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-rose-400" type="button" onClick={() => updateStatus("Rechazada")}>Rechazar</button><button className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-300" type="button" onClick={() => updateStatus("Validada")}>Validar seña</button></footer></> : <p className="py-16 text-center text-sm text-slate-500">Selecciona una seña para ver sus detalles.</p>}
          <Link className="mt-5 inline-block text-xs text-cyan-300 hover:underline" to="/interprete">← Volver al inicio</Link>
        </article>
      </section>
    </>
  );
}
