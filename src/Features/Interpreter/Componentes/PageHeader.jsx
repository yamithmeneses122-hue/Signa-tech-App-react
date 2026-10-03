export default function PageHeader({
  title,
  description,
  action,
  appearance = "default",
  icon,
  eyebrow = "MÓDULO INTÉRPRETE"
}) {
  if (appearance === "tailwind") {
    return (
      <header className="mx-auto mb-8 flex w-full max-w-6xl items-start justify-between gap-4">
        <section>
          {eyebrow && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              {eyebrow}
            </p>
          )}
          <h1 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-white theme-light:text-slate-900 sm:text-3xl">
            {icon && (
              <i
                className={`${icon} bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent`}
                aria-hidden="true"
              />
            )}
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 theme-light:text-slate-600">
              {description}
            </p>
          )}
        </section>
        {action && <section>{action}</section>}
      </header>
    );
  }

  return (
    <header className="page-heading">
      <section>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
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
