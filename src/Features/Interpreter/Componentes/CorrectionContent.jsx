import { useEffect, useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import StatusBadge from "./StatusBadge";
import { categoryOptions } from "../data/interpreterData";
import { getSigns } from "../funcionalidades/interpreterStorage";
import { updateSign } from "../funcionalidades/interpreterActions";
import { filterSigns } from "../funcionalidades/interpreterUtils";

export default function CorrectionContent() {
  const [signs, setSigns] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [editing, setEditing] = useState(null);

  useEffect(() => setSigns(getSigns().filter((sign) => sign.status !== "Pendiente")), []);

  const filtered = useMemo(() => filterSigns(signs, query, category), [signs, query, category]);

  function saveEdit(event) {
    event.preventDefault();
    const updated = updateSign(editing);
    setSigns(updated.filter((sign) => sign.status !== "Pendiente"));
    setEditing(null);
  }

  return (
    <>
      <PageHeader title="Corregir señas" description="Actualiza la información de las señas que necesitan ajustes." />
      <section className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 lg:flex-row lg:items-end"><SearchBar value={query} onChange={setQuery} placeholder="Buscar seña..." /><Filter label="Categoría" value={category} onChange={setCategory} options={categoryOptions} /></section>
      <section className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-xs text-slate-500">Señas disponibles para corrección</caption><thead><tr className="text-[10px] uppercase tracking-wider text-slate-500"><th className="border-b border-white/10 px-3 py-3">Palabra</th><th className="border-b border-white/10 px-3 py-3">Categoría</th><th className="border-b border-white/10 px-3 py-3">Significado</th><th className="border-b border-white/10 px-3 py-3">Estado</th><th className="border-b border-white/10 px-3 py-3">Acción</th></tr></thead><tbody>{filtered.map((sign)=><tr key={sign.id}><th className="border-b border-white/10 px-3 py-3 font-semibold">{sign.word}</th><td className="border-b border-white/10 px-3 py-3 text-slate-400">{sign.category}</td><td className="border-b border-white/10 px-3 py-3 text-slate-400">{sign.meaning}</td><td className="border-b border-white/10 px-3 py-3"><StatusBadge status={sign.status}/></td><td className="border-b border-white/10 px-3 py-3"><button className="text-cyan-300 hover:underline" type="button" onClick={()=>setEditing({...sign})}>Editar</button></td></tr>)}</tbody></table>
        {!filtered.length && <p className="py-10 text-center text-sm text-slate-500">No se encontraron señas.</p>}
      </section>
      {editing && <dialog className="fixed left-1/2 top-1/2 z-50 w-[min(540px,calc(100%-30px))] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-400/20 bg-[#101d27] p-6 text-white shadow-2xl backdrop:bg-black/70" open><form className="grid gap-4" onSubmit={saveEdit}><header className="flex items-center justify-between"><h2 className="text-lg font-bold">Corregir "{editing.word}"</h2><button className="text-2xl" type="button" onClick={()=>setEditing(null)} aria-label="Cerrar">×</button></header><label className="grid gap-2 text-xs text-slate-400">Palabra<input className="rounded-xl border border-white/10 bg-[#0b141b] p-3 text-sm text-white outline-none focus:border-cyan-400" value={editing.word} onChange={(e)=>setEditing({...editing,word:e.target.value})}/></label><label className="grid gap-2 text-xs text-slate-400">Categoría<select className="rounded-xl border border-white/10 bg-[#0b141b] p-3 text-sm text-white outline-none focus:border-cyan-400" value={editing.category} onChange={(e)=>setEditing({...editing,category:e.target.value})}>{categoryOptions.filter((o)=>o.value!=="Todas").map((o)=><option key={o.value}>{o.value}</option>)}</select></label><label className="grid gap-2 text-xs text-slate-400">Significado<textarea className="min-h-28 rounded-xl border border-white/10 bg-[#0b141b] p-3 text-sm text-white outline-none focus:border-cyan-400" value={editing.meaning} onChange={(e)=>setEditing({...editing,meaning:e.target.value})}/></label><footer className="flex justify-end gap-2"><button className="rounded-xl border border-white/10 px-4 py-2.5 text-sm" type="button" onClick={()=>setEditing(null)}>Cancelar</button><button className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950" type="submit">Guardar</button></footer></form></dialog>}
    </>
  );
}
