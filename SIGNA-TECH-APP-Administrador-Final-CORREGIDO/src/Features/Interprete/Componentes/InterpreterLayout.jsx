import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function InterpreterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          className="fixed inset-0 z-40 h-full w-full bg-slate-950/70 backdrop-blur-sm md:hidden"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        />
      )}
      <section className="relative z-10 min-h-screen md:ml-64" aria-label="Panel del intérprete">
        <Header onMenu={() => setMenuOpen(true)} compact />
        <main className="mx-auto w-full max-w-7xl p-5 md:p-10">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
