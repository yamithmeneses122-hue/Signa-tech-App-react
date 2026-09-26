import Icon from "../../../components/shared/Icon.jsx";

const items = [
    ["book", "Enfoque", "Educativo y cotidiano"],
    ["message", "Canales", "Voz, texto y señas básicas"],
    ["users", "Diseño", "Pensado para distintas formas de comunicar"],
];

export default function Statistics() {
    return (
        <section className="mx-auto max-w-[1400px] px-5 pb-8 lg:px-10">
            <div className="grid gap-3 md:grid-cols-3">
                {items.map(([icon, label, value]) => (
                    <article key={label} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] px-5 py-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
                            <Icon name={icon} className="h-5 w-5" />
                        </span>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[.12em] text-slate-500">{label}</p>
                            <p className="mt-1 text-sm font-semibold text-slate-200">{value}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}