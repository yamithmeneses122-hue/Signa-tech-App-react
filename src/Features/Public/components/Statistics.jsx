const items = [
    ["01", "Comunicación", "Voz, texto y señas básicas"],
    ["02", "Enfoque", "Educativo y cotidiano"],
    ["03", "Experiencia", "Web responsive y accesible"],
];

export default function Statistics() {
    return (
        <section className="mx-auto max-w-[1400px] px-5 pb-8 lg:px-10">
            <ul className="grid gap-3 md:grid-cols-3">
                {items.map(([number, title, text]) => (
                    <li key={number} className="rounded-2xl border border-white/8 bg-white/[.025] p-5">
                        <span className="text-xs font-black text-cyan-300">{number}</span>
                        <h2 className="mt-2 text-sm font-bold">{title}</h2>
                        <p className="mt-1 text-sm text-slate-400">{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}