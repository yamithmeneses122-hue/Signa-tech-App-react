import { useState } from "react";
import { getProfile } from "../funcionalidades/interpreterStorage";
import { getInitials } from "../funcionalidades/interpreterUtils";

export default function Header({ onMenu }) {
  const [notifications, setNotifications] = useState(false);
  const profile = getProfile();

  return (
    <header className="sticky top-0 z-20 flex min-h-[72px] items-center justify-between border-b border-slate-800 md:justify-end bg-slate-950/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <button className="rounded-xl border border-cyan-500/20 bg-slate-950/50 px-3 py-2 text-xl md:hidden" type="button" onClick={onMenu} aria-label="Abrir menú">☰</button>
      <section className="relative flex items-center gap-3">
        <button className="relative grid h-10 w-10 place-items-center rounded-xl text-xl transition hover:bg-slate-950/50" type="button" onClick={() => setNotifications((value) => !value)} aria-label="Notificaciones" aria-expanded={notifications}>
          ♢
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-400 ring-2 ring-[#080f15]" />
        </button>
        {notifications && (
          <aside className="absolute right-14 top-12 w-72 rounded-2xl border border-cyan-500/20 bg-slate-900 p-4 shadow-2xl" aria-label="Notificaciones">
            <strong>Notificaciones</strong>
            <p className="mt-2 text-sm leading-6 text-slate-400">Hay señas pendientes de validación.</p>
          </aside>
        )}
        <section className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-300">{getInitials(profile.name)}</span>
          <span className="hidden sm:block">
            <strong className="block text-sm">{profile.name}</strong>
            <small className="text-xs text-slate-400">Usuario activo</small>
          </span>
        </section>
      </section>
    </header>
  );
}
