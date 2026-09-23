import { useState } from "react";

export default function Header({ onMenu }) {
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="interpreter-header">
      <button className="menu-toggle" type="button" onClick={onMenu} aria-label="Abrir menú">☰</button>

      <div className="header-context">
        <span className="header-kicker">SIGNA-TECH</span>
        <strong>Panel de intérprete</strong>
      </div>

      <div className="header-actions">
        <button
          className="notification-button"
          type="button"
          onClick={() => setNotifications((value) => !value)}
          aria-label="Notificaciones"
          aria-expanded={notifications}
          aria-controls="interpreter-notifications"
        >
          ♢
          <span className="notification-dot" aria-hidden="true" />
        </button>

        {notifications && (
          <aside id="interpreter-notifications" className="notification-popover" aria-label="Notificaciones">
            <strong>Notificaciones</strong>
            <p>Hay señas pendientes de validación.</p>
          </aside>
        )}

        <div className="header-profile">
          <span className="avatar" aria-hidden="true">IM</span>
          <span>
            <strong>Intérprete</strong>
            <small>Usuario activo</small>
          </span>
        </div>
      </div>
    </header>
  );
}