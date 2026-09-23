import { useState } from "react";
import PageHeader from "./PageHeader";

const initialForm = {
  word: "",
  category: "Personas",
  meaning: "",
  description: ""
};

export default function RegistrationContent() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      `La seña "${form.word}" fue registrada correctamente como pendiente de validación.`
    );
    setForm(initialForm);
  }

  return (
    <>
      <PageHeader
        title="Registrar seña"
        description="Agrega una nueva seña al diccionario para que pueda ser revisada por el equipo."
      />

      <form className="panel form-panel" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Información de la seña</legend>

          <section className="form-grid">
            <label>
              <span>Palabra</span>
              <input
                name="word"
                value={form.word}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Ej. Familia"
                required
              />
            </label>

            <label>
              <span>Categoría</span>
              <select name="category" value={form.category} onChange={handleChange}>
                <option>Personas</option>
                <option>Acciones</option>
                <option>Educación</option>
                <option>Lugares</option>
                <option>Objetos</option>
              </select>
            </label>

            <label className="field-full">
              <span>Significado</span>
              <textarea
                name="meaning"
                value={form.meaning}
                onChange={handleChange}
                rows="4"
                placeholder="Explica el significado de la palabra."
                required
              />
            </label>

            <label className="field-full">
              <span>Descripción de la seña</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe cómo se realiza o identifica la seña."
                required
              />
            </label>
          </section>
        </fieldset>

        <fieldset className="upload-fieldset">
          <legend>Recurso visual</legend>

          <label className="upload-box">
            <span aria-hidden="true">↑</span>
            <strong>Selecciona una imagen o video</strong>
            <small>Formatos permitidos: JPG, PNG, MP4</small>
            <input type="file" accept="image/png,image/jpeg,video/mp4" />
          </label>
        </fieldset>

        <footer className="form-actions">
          <button
            className="button button-secondary"
            type="reset"
            onClick={() => setMessage("")}
          >
            Limpiar
          </button>
          <button className="button button-primary" type="submit">
            Registrar seña
          </button>
        </footer>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>
    </>
  );
}
