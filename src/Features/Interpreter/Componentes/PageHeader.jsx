export default function PageHeader({ title, description, action }) {
  return (
    <header className="mb-7 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
      <section className="max-w-3xl">
        <p className="text-[11px] font-extrabold tracking-[0.18em] text-cyan-300">MÓDULO INTÉRPRETE</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>}
      </section>
      {action && <section className="flex gap-2">{action}</section>}
    </header>
  );
}
