import { Link } from "react-router-dom";
import { PageHeader, StatCard } from "../Componentes/component";

const latest = [
  { word: "Familia", category: "Personas", status: "Validada", date: "Hoy, 10:30" },
  { word: "Aprender", category: "Educación", status: "Corregida", date: "Ayer, 16:20" },
  { word: "Trabajo", category: "Acciones", status: "Validada", date: "Ayer, 11:45" }
];

export default function Interprete() {
  return (
    <>
      <PageHeader title="Inicio" description="Resumen de la actividad y las tareas pendientes del módulo de intérprete." />
      <section className="stats-grid" aria-label="Resumen">
        <StatCard label="Señas validadas" value="128" detail="+12 este mes" icon="✓" tone="green" />
        <StatCard label="Nuevas señas" value="24" detail="8 pendientes" icon="+" tone="cyan" />
        <StatCard label="Corregidas" value="36" detail="+5 este mes" icon="✎" tone="purple" />
        <StatCard label="Pendientes" value="8" detail="Requieren revisión" icon="!" tone="orange" />
      </section>
      <section className="dashboard-grid">
        <article className="panel chart-panel">
          <header className="panel-header"><section><h2>Actividad mensual</h2><p>Validaciones realizadas durante los últimos meses.</p></section></header>
          <section className="bar-chart" aria-label="Gráfico de actividad mensual">
            {[42,58,47,72,64,88,76,94].map((height,index) => (
              <article className="bar-column" key={index}><span style={{height:`${height}%`}} /><small>{["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago"][index]}</small></article>
            ))}
          </section>
        </article>
        <article className="panel">
          <header className="panel-header"><section><h2>Categorías</h2><p>Distribución de señas.</p></section></header>
          <ul className="category-list">
            <li><span>Personas</span><strong>32%</strong></li><li><span>Acciones</span><strong>26%</strong></li>
            <li><span>Educación</span><strong>18%</strong></li><li><span>Lugares</span><strong>14%</strong></li><li><span>Otros</span><strong>10%</strong></li>
          </ul>
        </article>
      </section>
      <section className="panel latest-panel">
        <header className="panel-header"><section><h2>Últimas modificaciones</h2><p>Actividad reciente en el diccionario.</p></section><Link className="text-link" to="/interprete/historial">Ver historial</Link></header>
        <section className="activity-list">
          {latest.map((item) => <article className="activity-row" key={item.word}><span className="sign-mini" aria-hidden="true">✋</span><section><strong>{item.word}</strong><small>{item.category}</small></section><span className={`activity-status ${item.status === "Validada" ? "success" : "info"}`}>{item.status}</span><time>{item.date}</time></article>)}
        </section>
      </section>
    </>
  );
}
