export default function StatCard({
  label,
  value,
  detail,
  icon,
  tone = "cyan"
}) {
  return (
    <article className={`stat-card stat-card-${tone}`}>
      <header>
        <span className="stat-icon" aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </header>
      <strong>{value}</strong>
      {detail && <p>{detail}</p>}
    </article>
  );
}
