const features = [
  [
    "Reconocimiento asistido",
    "IA dentro del flujo de interpretación, con alcance centrado en señas básicas.",
  ],
  [
    "Comunicación en tiempo real",
    "Entradas y resultados organizados para que la conversación se entienda de un vistazo.",
  ],
  [
    "Captura visual",
    "Cámara como entrada para el flujo de interpretación de señas.",
  ],
  [
    "Diccionario LSC",
    "Espacio pensado para consultar vocabulario y apoyar la validación.",
  ],
  [
    "Panel de intérprete",
    "Consulta y revisión de información relacionada con el diccionario.",
  ],
  [
    "Accesibilidad",
    "Contraste, jerarquía, foco visible y adaptación a distintas pantallas.",
  ],
];

export default function FeatureCard() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
      <header className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
          Capacidades
        </span>
        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          Todo empieza por una experiencia fácil de entender.
        </h2>
      </header>
      
      <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map(([title, text], index) => (
          <article
            key={title}
            className={`rounded-[2rem] border border-white/8 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-cyan-300/25 ${
              index === 0 || index === 5 ? "lg:col-span-2" : ""
            }`}
          >
            <span className="text-2xl text-cyan-300">✦</span>
            <h3 className="mt-6 text-xl font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
          </article>
        ))}
      </section>
    </section>
  );
}