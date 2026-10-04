import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function InterpreterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080f15] text-slate-100">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          className="fixed inset-0 z-30 h-full w-full bg-black/70 backdrop-blur-sm md:hidden"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        />
      )}
      <section className="min-h-screen md:ml-[260px]" aria-label="Panel del intérprete">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="mx-auto w-full max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
