import { useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import StatusBadge from "./StatusBadge";
import { historyRecords } from "../data/interpreterData";

export default function HistoryContent() {
  const [query, setQuery] = useState("");
  const [action, setAction] = useState("Todas");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filtered = useMemo(
    () =>
      historyRecords.filter(
        (item) =>
          item.word.toLowerCase().includes(query.toLowerCase()) &&
          (action === "Todas" || item.action === action)
      ),
    [query, action]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  function changeAction(value) {
    setAction(value);
    setPage(1);
  }

  return (
    <>
      <PageHeader
        title="Historial"
        description="Consulta las acciones realizadas sobre las señas del sistema."
      />

      <search className="toolbar panel" aria-label="Filtros del historial">
        <SearchBar
          value={query}
          onChange={(value) => {
            setQuery(value);
            setPage(1);
          }}
          placeholder="Buscar en historial..."
        />

        <Filter
          label="Acción"
          value={action}
          onChange={changeAction}
          options={[
            { value: "Todas", label: "Todas" },
            { value: "Validación", label: "Validación" },
            { value: "Corrección", label: "Corrección" },
            { value: "Revisión", label: "Revisión" }
          ]}
        />
      </search>

      <section className="panel table-panel">
        <table>
          <caption>Registro de actividad</caption>
          <thead>
            <tr>
              <th scope="col">Seña</th>
              <th scope="col">Acción</th>
              <th scope="col">Usuario</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.word}</th>
                <td>{item.action}</td>
                <td>{item.user}</td>
                <td><StatusBadge status={item.status} /></td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {!rows.length && (
          <p className="empty-state">
            No hay registros para los filtros seleccionados.
          </p>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  );
}
