import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import SignCard from "./SignCard";
import StatusBadge from "./StatusBadge";
import { categoryOptions, pendingSigns } from "../data/interpreterData";

export default function ValidationContent() {
  const [signs, setSigns] = useState(pendingSigns);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [status, setStatus] = useState("Pendiente");
  const [selected, setSelected] = useState(pendingSigns[0]);

  const filtered = useMemo(
    () =>
      signs.filter(
        (sign) =>
          sign.word.toLowerCase().includes(query.toLowerCase()) &&
          (category === "Todas" || sign.category === category) &&
          (status === "Todos" || sign.status === status)
      ),
    [signs, query, category, status]
  );

  function updateStatus(newStatus) {
    if (!selected) return;

    setSigns((current) =>
      current.map((sign) =>
        sign.id === selected.id ? { ...sign, status: newStatus } : sign
      )
    );

    setSelected((current) =>
      current ? { ...current, status: newStatus } : current
    );
  }

  return (
    <>
      <PageHeader
        title="Validar señas"
        description="Revisa las nuevas señas y decide si deben formar parte del diccionario."
      />

      <search className="toolbar panel" aria-label="Filtros de validación">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar por palabra..."
        />

        <Filter
          label="Categoría"
          value={category}
          onChange={setCategory}
          options={categoryOptions}
        />

        <Filter
          label="Estado"
          value={status}
          onChange={setStatus}
          options={[
            { value: "Pendiente", label: "Pendiente" },
            { value: "Todos", label: "Todos" },
            { value: "Validada", label: "Validada" },
            { value: "Rechazada", label: "Rechazada" }
          ]}
        />
      </search>

      <section className="validation-layout" aria-label="Validación de señas">
        <article className="panel sign-list-panel">
          <header className="panel-header">
            <section>
              <h2>Señas pendientes</h2>
              <p>{filtered.length} resultado(s) encontrado(s).</p>
            </section>
            <strong className="counter">
              {signs.filter((sign) => sign.status === "Pendiente").length}
            </strong>
          </header>

          <ul className="sign-list">
            {filtered.length ? (
              filtered.map((sign) => (
                <li key={sign.id}>
                  <SignCard
                    sign={sign}
                    selected={selected?.id === sign.id}
                    onSelect={setSelected}
                  />
                </li>
              ))
            ) : (
              <li>
                <p className="empty-state">No hay señas que coincidan con los filtros.</p>
              </li>
            )}
          </ul>
        </article>

        <article className="panel preview-panel">
          <header className="panel-header">
            <section>
              <h2>Vista previa</h2>
              <p>Información de la seña seleccionada.</p>
            </section>
          </header>

          {selected ? (
            <>
              <figure className="preview-image">
                <span aria-hidden="true">✋</span>
                <figcaption>Vista de la seña</figcaption>
              </figure>

              <section className="sign-details">
                <header>
                  <h2>{selected.word}</h2>
                  <StatusBadge status={selected.status} />
                </header>

                <dl>
                  <dt>Categoría</dt>
                  <dd>{selected.category}</dd>
                  <dt>Significado</dt>
                  <dd>{selected.meaning}</dd>
                  <dt>Descripción</dt>
                  <dd>{selected.description}</dd>
                </dl>
              </section>

              <footer className="form-actions">
                <button
                  className="button button-danger"
                  type="button"
                  onClick={() => updateStatus("Rechazada")}
                >
                  Rechazar
                </button>
                <button
                  className="button button-success"
                  type="button"
                  onClick={() => updateStatus("Validada")}
                >
                  Validar seña
                </button>
              </footer>
            </>
          ) : (
            <p className="empty-state">Selecciona una seña para ver sus detalles.</p>
          )}

          <Link className="back-link" to="/interprete">
            ← Volver al inicio
          </Link>
        </article>
      </section>
    </>
  );
}
