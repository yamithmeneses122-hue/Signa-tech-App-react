import { NavLink, useNavigate } from "react-router-dom";

const items = [
  ["./", "Inicio", "⌂", true],
  ["validar", "Validar señas", "✓"],
  ["registrar", "Registrar", "+"],
  ["corregir", "Corregir", "✎"],
  ["historial", "Historial", "▤"],
  ["estadisticas", "Estadísticas", "▥"],
  ["perfil", "Perfil", "♙"]
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const base = "/interprete";

  function logout() {
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-cyan-400/10 bg-[#09131c] shadow-2xl transition-transform duration-200 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <header className="flex items-center gap-3 border-b border-white/5 px-5 py-5">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-black text-cyan-300">ST</span>
        <span className="min-w-0 flex-1">
          <strong className="block text-sm tracking-wide">SIGNA-TECH</strong>
          <small className="text-xs text-slate-400">Panel intérprete</small>
        </span>
        <button className="text-2xl text-slate-300 md:hidden" type="button" onClick={onClose} aria-label="Cerrar menú">×</button>
      </header>

      <nav className="flex-1 overflow-y-auto p-4" aria-label="Navegación del intérprete">
        <ul className="space-y-1">
          {items.map(([path, label, icon, end]) => (
            <li key={label}>
              <NavLink
                to={path === "./" ? base : `${base}/${path}`}
                end={end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20" : "text-slate-300 hover:bg-white/5 hover:text-white"}`
                }
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5" aria-hidden="true">{icon}</span>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="border-t border-white/5 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 transition hover:bg-rose-400/10 hover:text-rose-300" type="button" onClick={logout}>
          <span aria-hidden="true">↪</span>
          Cerrar sesión
        </button>
      </footer>
    </aside>
  );
}
