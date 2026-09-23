import { useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import StatusBadge from "./StatusBadge";
import { categoryOptions, correctionSigns } from "../data/interpreterData";

export default function CorrectionContent() {
  const [signs, setSigns] = useState(correctionSigns);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(
    () =>
      signs.filter(
        (sign) =>
          sign.word.toLowerCase().includes(query.toLowerCase()) &&
          (category === "Todas" || sign.category === category)
      ),
    [signs, query, category]
  );

  function saveEdit(event) {
    event.preventDefault();
    setSigns((current) =>
      current.map((sign) => (sign.id === editing.id ? editing : sign))
    );
    setEditing(null);
  }

  return (
    <>
      <PageHeader
        title="Corregir señas"
        description="Actualiza la información de las señas que necesitan ajustes."
      />

      <search className="toolbar panel" aria-label="Filtros de corrección">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar seña..."
        />
        <Filter
          label="Categoría"
          value={category}
          onChange={setCategory}
          options={categoryOptions}
        />
      </search>

      <section className="panel table-panel">
        <table>
          <caption>Señas disponibles para corrección</caption>
          <thead>
            <tr>
              <th scope="col">Palabra</th>
              <th scope="col">Categoría</th>
              <th scope="col">Significado</th>
              <th scope="col">Estado</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((sign) => (
              <tr key={sign.id}>
                <th scope="row">{sign.word}</th>
                <td>{sign.category}</td>
                <td>{sign.meaning}</td>
                <td><StatusBadge status={sign.status} /></td>
                <td>
                  <button
                    className="table-action"
                    type="button"
                    onClick={() => setEditing({ ...sign })}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!filtered.length && (
          <p className="empty-state">No se encontraron señas.</p>
        )}
      </section>

      {editing && (
        <dialog className="edit-dialog" open>
          <form onSubmit={saveEdit}>
            <header>
              <h2>Corregir &quot;{editing.word}&quot;</h2>
              <button
                type="button"
                onClick={() => setEditing(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </header>

            <label>
              <span>Palabra</span>
              <input
                value={editing.word}
                onChange={(event) =>
                  setEditing({ ...editing, word: event.target.value })
                }
                required
              />
            </label>

            <label>
              <span>Categoría</span>
              <select
                value={editing.category}
                onChange={(event) =>
                  setEditing({ ...editing, category: event.target.value })
                }
              >
                <option>Personas</option>
                <option>Acciones</option>
                <option>Educación</option>
                <option>Lugares</option>
              </select>
            </label>

            <label>
              <span>Significado</span>
              <textarea
                value={editing.meaning}
                onChange={(event) =>
                  setEditing({ ...editing, meaning: event.target.value })
                }
                required
              />
            </label>

            <footer className="form-actions">
              <button
                className="button button-secondary"
                type="button"
                onClick={() => setEditing(null)}
              >
                Cancelar
              </button>
              <button className="button button-primary" type="submit">
                Guardar cambios
              </button>
            </footer>
          </form>
        </dialog>
      )}
    </>
  );
}
