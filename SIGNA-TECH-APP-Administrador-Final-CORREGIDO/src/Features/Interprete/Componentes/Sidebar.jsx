import { NavLink, useNavigate } from "react-router-dom";

const items = [
  ["./", "Inicio", "⌂", true],
  ["validar", "Validar señas", "✓"],
  ["registrar", "Registrar", "+"],
  ["corregir", "Corregir", "✎"],
  ["historial", "Historial", "▤"],
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
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-cyan-500/20 bg-slate-900 shadow-2xl transition-transform duration-200 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <header className="flex items-start justify-between border-b border-slate-800 p-6">
        <span className="min-w-0 flex-1">
          <strong className="block text-lg font-bold tracking-wider">SIGNA-TECH</strong>
          <small className="text-xs font-semibold tracking-wide text-cyan-400">Panel intérprete</small>
        </span>
        <button className="text-2xl text-slate-300 md:hidden" type="button" onClick={onClose} aria-label="Cerrar menú">×</button>
      </header>

      <nav className="flex-1 p-4" aria-label="Navegación del intérprete">
        <ul className="flex flex-col gap-2">
          {items.map(([path, label, icon, end]) => (
            <li key={label}>
              <NavLink
                to={path === "./" ? base : `${base}/${path}`}
                end={end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive ? "border border-cyan-400/50 bg-cyan-900/40 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]" : "text-white hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]"}`
                }
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950/50" aria-hidden="true">{icon}</span>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-rose-300 transition hover:bg-rose-400/10 hover:text-rose-200" type="button" onClick={logout}>
          <span aria-hidden="true">↪</span>
          Cerrar sesión
        </button>
      </footer>
    </aside>
  );
}
