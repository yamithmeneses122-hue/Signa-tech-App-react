import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function InterpreterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú de navegación"
        />
      )}
      <div className="interpreter-main">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="interpreter-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}