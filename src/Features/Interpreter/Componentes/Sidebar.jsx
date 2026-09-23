import { NavLink, useNavigate } from "react-router-dom";

const items = [
  { to: "/interprete", label: "Inicio", icon: "⌂", end: true },
  { to: "/interprete/validar", label: "Validar señas", icon: "✓" },
  { to: "/interprete/registrar", label: "Registrar", icon: "+" },
  { to: "/interprete/corregir", label: "Corregir", icon: "✎" },
  { to: "/interprete/historial", label: "Historial", icon: "▤" },
  { to: "/interprete/estadisticas", label: "Estadísticas", icon: "▥" },
  { to: "/interprete/perfil", label: "Perfil", icon: "♙" }
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <aside className={`interpreter-sidebar ${open ? "is-open" : ""}`} aria-label="Panel de navegación del intérprete">
      <header className="sidebar-brand">
        <span className="brand-mark" aria-hidden="true">ST</span>
        <span className="sidebar-brand-text">
          <strong>SIGNA-TECH</strong>
          <small>Panel intérprete</small>
        </span>
        <button className="sidebar-close" type="button" onClick={onClose} aria-label="Cerrar menú">×</button>
      </header>

      <nav className="sidebar-nav" aria-label="Navegación del intérprete">
        <ul>
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
              >
                <span className="sidebar-icon" aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="sidebar-footer">
        <button className="logout-link" type="button" onClick={handleLogout}>
          <span aria-hidden="true">↪</span>
          Cerrar sesión
        </button>
      </footer>
    </aside>
  );
}