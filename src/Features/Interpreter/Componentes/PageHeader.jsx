export default function PageHeader({ title, description, action }) {
  return (
    <header className="page-heading">
      <section>
        <p className="eyebrow">MÓDULO INTÉRPRETE</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </section>

      {action && (
        <section className="page-heading-action">
          {action}
        </section>
      )}
    </header>
  );
}
