const items = [
    ["IA como apoyo", "La tecnología acompaña el flujo de comunicación con un alcance centrado en señas básicas."],
    ["Voz y texto", "Entradas y salidas pensadas para conversaciones sencillas y directas."],
    ["Cámara", "La experiencia contempla captura visual para el flujo de interpretación."],
    ["Accesibilidad", "La interfaz prioriza contraste, jerarquía y adaptación a distintas pantallas."],
];

export default function TechnologySection() {
    return (
        <section id="tecnologias" className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <header className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Tecnología</span>
                <h2 className="mt-4 text-4xl font-black sm:text-5xl">Tecnología que transforma cuando se entiende.</h2>
            </header>
            <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map(([title, text]) => (
                    <article key={title} className="rounded-3xl border border-white/8 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300">✦</span>
                        <h3 className="mt-6 text-lg font-bold">{title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                    </article>
                ))}
            </section>
        </section>
    );
}