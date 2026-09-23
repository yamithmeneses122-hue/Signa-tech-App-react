import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import StatCard from "./StatCard";
import { categoryDistribution, dashboardStats, latestActivity, monthlyActivity } from "../data/interpreterData";

export default function DashboardContent() {
  return (
    <>
      <PageHeader
        title="Inicio"
        description="Resumen de la actividad y las tareas pendientes del módulo de intérprete."
      />

      <section className="stats-grid" aria-label="Resumen del módulo">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="dashboard-grid" aria-label="Indicadores de actividad">
        <article className="panel chart-panel">
          <header className="panel-header">
            <section>
              <h2>Actividad mensual</h2>
              <p>Validaciones realizadas durante los últimos meses.</p>
            </section>
          </header>

          <section className="bar-chart" aria-label="Gráfico de actividad mensual">
            {monthlyActivity.map(([month, value]) => (
              <figure className="bar-column" key={month}>
                <span style={{ height: `${value}%` }} aria-label={`${value} validaciones`} />
                <figcaption>{month}</figcaption>
              </figure>
            ))}
          </section>
        </article>

        <article className="panel">
          <header className="panel-header">
            <section>
              <h2>Categorías</h2>
              <p>Distribución de señas.</p>
            </section>
          </header>

          <ul className="category-list">
            {categoryDistribution.map(([category, percentage]) => (
              <li key={category}>
                <span>{category}</span>
                <strong>{percentage}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <article className="panel latest-panel">
        <header className="panel-header">
          <section>
            <h2>Últimas modificaciones</h2>
            <p>Actividad reciente en el diccionario.</p>
          </section>
          <Link className="text-link" to="/interprete/historial">
            Ver historial
          </Link>
        </header>

        <ul className="activity-list">
          {latestActivity.map((item) => (
            <li className="activity-row" key={item.word}>
              <span className="sign-mini" aria-hidden="true">✋</span>
              <section>
                <strong>{item.word}</strong>
                <small>{item.category}</small>
              </section>
              <span className={`activity-status ${item.status === "Validada" ? "success" : "info"}`}>
                {item.status}
              </span>
              <time>{item.date}</time>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
