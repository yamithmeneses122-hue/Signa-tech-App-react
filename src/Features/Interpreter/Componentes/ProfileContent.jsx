import { useState } from "react";
import PageHeader from "./PageHeader";

export default function ProfileContent() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Intérprete",
    email: "interprete@signatech.com",
    phone: "300 000 0000",
    notifications: true
  });

  function update(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    setSaved(false);
  }

  function submit(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <>
      <PageHeader
        title="Mi perfil"
        description="Administra tu información personal, preferencias y seguridad."
      />

      <form className="profile-layout" onSubmit={submit}>
        <article className="panel profile-card">
          <header className="profile-avatar" aria-label="Iniciales del usuario">IM</header>
          <h2>{form.name}</h2>
          <p>Intérprete</p>

          <label className="upload-avatar">
            <span>Cambiar foto</span>
            <input type="file" accept="image/*" />
          </label>
        </article>

        <section className="profile-form">
          <article className="panel">
            <header className="panel-header">
              <section>
                <h2>Información personal</h2>
                <p>Datos básicos de tu cuenta.</p>
              </section>
            </header>

            <fieldset className="form-grid">
              <legend>Datos personales</legend>

              <label>
                <span>Nombre</span>
                <input
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                <span>Correo electrónico</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                <span>Teléfono</span>
                <input
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                />
              </label>
            </fieldset>
          </article>

          <article className="panel">
            <header className="panel-header">
              <section>
                <h2>Preferencias</h2>
                <p>Configura cómo recibir información.</p>
              </section>
            </header>

            <label className="toggle-row">
              <span>
                <strong>Notificaciones</strong>
                <small>Recibir avisos sobre nuevas señas.</small>
              </span>
              <input
                type="checkbox"
                checked={form.notifications}
                onChange={(event) => update("notifications", event.target.checked)}
              />
            </label>
          </article>

          <article className="panel security-card">
            <header className="panel-header">
              <section>
                <h2>Seguridad</h2>
                <p>Protege el acceso a tu cuenta.</p>
              </section>
            </header>

            <button
              className="button button-secondary"
              type="button"
              onClick={() => window.alert("La función de cambio de contraseña queda disponible para conectar con el backend.")}
            >
              Cambiar contraseña
            </button>
          </article>

          <footer className="form-actions">
            <button className="button button-primary" type="submit">
              Guardar cambios
            </button>
            {saved && (
              <span className="form-message" role="status">
                Cambios guardados correctamente.
              </span>
            )}
          </footer>
        </section>
      </form>
    </>
  );
}
