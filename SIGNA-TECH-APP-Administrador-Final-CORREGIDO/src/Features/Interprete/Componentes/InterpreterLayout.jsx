import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function InterpreterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_80%_0%,rgba(6,182,212,0.14),transparent_28rem),radial-gradient(ellipse_at_10%_35%,rgba(14,165,233,0.08),transparent_24rem),#020617] text-slate-100">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          className="fixed inset-0 z-30 h-full w-full bg-black/70 backdrop-blur-sm md:hidden"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        />
      )}
      <section className="relative z-10 min-h-screen md:ml-64" aria-label="Panel del intérprete">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="mx-auto w-full max-w-7xl p-5 md:p-10">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
