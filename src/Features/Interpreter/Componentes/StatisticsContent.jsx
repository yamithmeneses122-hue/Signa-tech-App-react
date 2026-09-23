import PageHeader from "./PageHeader";
import StatCard from "./StatCard";
import { statisticsMonths, statisticsSummary } from "../data/interpreterData";

const stats = [
  { label: "Total de señas", value: "188", detail: "Diccionario actual", icon: "▦" },
  { label: "Validadas", value: "128", detail: "68% del total", icon: "✓", tone: "green" },
  { label: "Corregidas", value: "36", detail: "19% del total", icon: "✎", tone: "purple" },
  { label: "Pendientes", value: "24", detail: "13% del total", icon: "!", tone: "orange" }
];

export default function StatisticsContent() {
  return (
    <>
      <PageHeader
        title="Estadísticas"
        description="Consulta indicadores sobre la actividad de validación y corrección."
      />

      <section className="stats-grid" aria-label="Indicadores principales">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="dashboard-grid" aria-label="Análisis estadístico">
        <article className="panel chart-panel">
          <header className="panel-header">
            <section>
              <h2>Validaciones por mes</h2>
              <p>Comparación de actividad registrada.</p>
            </section>
          </header>

          <section className="bar-chart large" aria-label="Validaciones por mes">
            {statisticsMonths.map(([month, value]) => (
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
              <h2>Estado de las señas</h2>
              <p>Distribución actual.</p>
            </section>
          </header>

          <figure className="donut-chart" aria-label="Distribución de estados">
            <span>68%</span>
            <figcaption>Señas validadas</figcaption>
          </figure>

          <ul className="legend-list">
            <li><span className="legend-dot green" aria-hidden="true" />Validadas <strong>68%</strong></li>
            <li><span className="legend-dot purple" aria-hidden="true" />Corregidas <strong>19%</strong></li>
            <li><span className="legend-dot orange" aria-hidden="true" />Pendientes <strong>13%</strong></li>
          </ul>
        </article>
      </section>

      <article className="panel summary-panel">
        <header className="panel-header">
          <section>
            <h2>Resumen</h2>
            <p>Indicadores destacados del módulo.</p>
          </section>
        </header>

        <ul className="summary-grid">
          {statisticsSummary.map(([label, value]) => (
            <li className="summary-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
