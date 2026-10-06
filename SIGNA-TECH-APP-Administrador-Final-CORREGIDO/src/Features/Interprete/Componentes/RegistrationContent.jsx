import { useState } from "react";
import PageHeader from "./PageHeader";
import { registerSign } from "../funcionalidades/interpreterActions";
import { validateSignForm } from "../funcionalidades/interpreterUtils";

const initialForm = { word: "", category: "Personas", meaning: "", description: "" };

export default function RegistrationContent() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateSignForm(form);
    if (Object.keys(errors).length) { setError(Object.values(errors)[0]); setMessage(""); return; }
    registerSign(form);
    setError("");
    setMessage(`La seña "${form.word}" fue registrada y quedó pendiente de validación.`);
    setForm(initialForm);
  }

  return (
    <>
      <PageHeader title="Registrar seña" description="Agrega una nueva seña al diccionario para que pueda ser revisada por el equipo." />
      <form className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)]" onSubmit={handleSubmit}>
        <fieldset><legend className="mb-5 text-sm font-bold text-cyan-300">Información de la seña</legend><section className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="grid gap-2"><span className="text-xs text-slate-400">Palabra</span><input className="h-11 rounded-xl border border-cyan-500/20 bg-slate-950 px-3 text-sm outline-none focus:border-cyan-400" name="word" value={form.word} onChange={(e)=>setForm({...form,word:e.target.value})} placeholder="Ej. Familia" required /></label>
          <label className="grid gap-2"><span className="text-xs text-slate-400">Categoría</span><select className="h-11 rounded-xl border border-cyan-500/20 bg-slate-950 px-3 text-sm outline-none focus:border-cyan-400" name="category" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}><option>Personas</option><option>Acciones</option><option>Educación</option><option>Lugares</option><option>Objetos</option></select></label>
          <label className="grid gap-2 md:col-span-2"><span className="text-xs text-slate-400">Significado</span><textarea className="min-h-28 rounded-xl border border-cyan-500/20 bg-slate-950 p-3 text-sm outline-none focus:border-cyan-400" name="meaning" value={form.meaning} onChange={(e)=>setForm({...form,meaning:e.target.value})} required /></label>
          <label className="grid gap-2 md:col-span-2"><span className="text-xs text-slate-400">Descripción de la seña</span><textarea className="min-h-32 rounded-xl border border-cyan-500/20 bg-slate-950 p-3 text-sm outline-none focus:border-cyan-400" name="description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} required /></label>
        </section></fieldset>
        <fieldset className="mt-6"><legend className="mb-3 text-sm font-bold text-cyan-300">Recurso visual</legend><label className="grid min-h-40 cursor-pointer place-items-center rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/[0.02] text-center"><span className="text-2xl text-cyan-300">↑</span><strong className="text-sm">Selecciona una imagen o video</strong><small className="text-xs text-slate-500">JPG, PNG o MP4</small><input className="hidden" type="file" accept="image/png,image/jpeg,video/mp4" /></label></fieldset>
        <footer className="mt-5 flex flex-wrap justify-end gap-2"><button className="rounded-xl border border-cyan-500/20 bg-slate-950/50 px-4 py-2.5 text-sm font-bold hover:bg-cyan-500/10" type="reset" onClick={()=>{setForm(initialForm);setMessage("");setError("");}}>Limpiar</button><button className="rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300" type="submit">Registrar seña</button></footer>
        {error && <p className="mt-4 text-sm text-rose-300" role="alert">{error}</p>}{message && <p className="mt-4 text-sm text-emerald-300" role="status">{message}</p>}
      </form>
    </>
  );
}
