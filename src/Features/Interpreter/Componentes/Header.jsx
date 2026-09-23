import { useState } from "react";

export default function Header({ onMenu }) {
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="interpreter-header">
      <button
        className="menu-toggle"
        type="button"
        onClick={onMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <section className="header-context" aria-label="Contexto actual">
        <span className="header-kicker">SIGNA-TECH</span>
        <strong>Panel de intérprete</strong>
      </section>

      <section className="header-actions" aria-label="Acciones de usuario">
        <button
          className="notification-button"
          type="button"
          onClick={() => setNotifications((value) => !value)}
          aria-label="Notificaciones"
          aria-expanded={notifications}
        >
          ♢
          <span className="notification-dot" aria-hidden="true" />
        </button>

        {notifications && (
          <aside className="notification-popover" aria-label="Notificaciones">
            <strong>Notificaciones</strong>
            <p>Hay señas pendientes de validación.</p>
          </aside>
        )}

        <section className="header-profile" aria-label="Usuario actual">
          <span className="avatar">IM</span>
          <span>
            <strong>Intérprete</strong>
            <small>Usuario activo</small>
          </span>
        </section>
      </section>
    </header>
  );
}
