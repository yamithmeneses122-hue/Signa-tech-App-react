import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, PageHeader, SearchBar, SignCard, StatusBadge } from "../Componentes/component";

const initialSigns = [
  {id:1,word:"Familia",category:"Personas",meaning:"Grupo de personas unidas por parentesco.",description:"Seña usada para representar a la familia.",status:"Pendiente",date:"23/09/2026"},
  {id:2,word:"Escuela",category:"Educación",meaning:"Lugar destinado a la enseñanza.",description:"Seña relacionada con el espacio educativo.",status:"Pendiente",date:"22/09/2026"},
  {id:3,word:"Trabajar",category:"Acciones",meaning:"Realizar una actividad laboral.",description:"Representa una acción de trabajo.",status:"Pendiente",date:"21/09/2026"},
  {id:4,word:"Hospital",category:"Lugares",meaning:"Centro para atención de salud.",description:"Seña usada para identificar un hospital.",status:"Pendiente",date:"20/09/2026"}
];

export default function Validar() {
  const [signs,setSigns] = useState(initialSigns);
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("Todas");
  const [status,setStatus] = useState("Pendiente");
  const [selected,setSelected] = useState(initialSigns[0]);

  const filtered = useMemo(() => signs.filter((sign) =>
    sign.word.toLowerCase().includes(query.toLowerCase()) &&
    (category === "Todas" || sign.category === category) &&
    (status === "Todos" || sign.status === status)
  ), [signs,query,category,status]);

  function updateStatus(newStatus) {
    if (!selected) return;
    setSigns(current => current.map(sign => sign.id === selected.id ? {...sign,status:newStatus} : sign));
    setSelected(current => current ? {...current,status:newStatus} : current);
  }

  return (
    <>
      <PageHeader title="Validar señas" description="Revisa las nuevas señas y decide si deben formar parte del diccionario." />
      <section className="toolbar panel">
        <SearchBar value={query} onChange={setQuery} placeholder="Buscar por palabra..." />
        <Filter label="Categoría" value={category} onChange={setCategory} options={[
          {value:"Todas",label:"Todas"},{value:"Personas",label:"Personas"},{value:"Educación",label:"Educación"},{value:"Acciones",label:"Acciones"},{value:"Lugares",label:"Lugares"}
        ]}/>
        <Filter label="Estado" value={status} onChange={setStatus} options={[
          {value:"Pendiente",label:"Pendiente"},{value:"Todos",label:"Todos"},{value:"Validada",label:"Validada"},{value:"Rechazada",label:"Rechazada"}
        ]}/>
      </section>
      <section className="validation-layout">
        <article className="panel sign-list-panel">
          <header className="panel-header"><section><h2>Señas pendientes</h2><p>{filtered.length} resultado(s) encontrado(s).</p></section><strong className="counter">{signs.filter(sign => sign.status === "Pendiente").length}</strong></header>
          <section className="sign-list">{filtered.length ? filtered.map(sign => <SignCard key={sign.id} sign={sign} selected={selected?.id === sign.id} onSelect={setSelected}/>) : <p className="empty-state">No hay señas que coincidan con los filtros.</p>}</section>
        </article>
        <article className="panel preview-panel">
          <header className="panel-header"><section><h2>Vista previa</h2><p>Información de la seña seleccionada.</p></section></header>
          {selected ? <>
            <figure className="preview-image"><span aria-hidden="true">✋</span><figcaption>Vista de la seña</figcaption></figure>
            <section className="sign-details"><header><h2>{selected.word}</h2><StatusBadge status={selected.status}/></header><dl><div><dt>Categoría</dt><dd>{selected.category}</dd></div><div><dt>Significado</dt><dd>{selected.meaning}</dd></div><div><dt>Descripción</dt><dd>{selected.description}</dd></div></dl></section>
            <footer className="form-actions"><button className="button button-danger" type="button" onClick={() => updateStatus("Rechazada")}>Rechazar</button><button className="button button-success" type="button" onClick={() => updateStatus("Validada")}>Validar seña</button></footer>
          </> : <p className="empty-state">Selecciona una seña para ver sus detalles.</p>}
          <Link className="back-link" to="/interprete">← Volver al inicio</Link>
        </article>
      </section>
    </>
  );
}
