const steps = [
  ["01", "Conoce", "Entiende el propósito y el alcance antes de empezar."],
  ["02", "Configura", "Elige el canal de comunicación según la situación."],
  ["03", "Comunica", "Usa voz, texto o captura visual según el caso."],
];

export default function HowItWorks() {
  return (
    <section
      id="comofunciona"
      className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28"
    >
      <section className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <header>
          <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            La ruta es simple.
          </h2>
        </header>

        <ol className="space-y-3">
          {steps.map(([n, t, d]) => (
            <li
              key={n}
              className="flex gap-5 rounded-3xl border border-white/8 bg-white/[.025] p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-sm font-black text-cyan-300">
                {n}
              </span>
              <section>
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{d}</p>
              </section>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}