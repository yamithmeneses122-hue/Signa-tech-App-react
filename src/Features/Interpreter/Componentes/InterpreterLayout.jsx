import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function InterpreterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="interpreter-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <button className="sidebar-overlay" type="button" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" />}
      <section className="interpreter-main">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="interpreter-content">
          <Outlet />
        </main>
      </section>
    </section>
  );
}
