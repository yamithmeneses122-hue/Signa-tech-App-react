import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-28">
            <article>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" /> Tecnología que conecta
                </span>
                <h1 className="mt-7 text-5xl font-black leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-[5.4rem]">
                    Conecta.<span className="block text-cyan-300">Comprende.</span><span className="block">Comunica.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    SIGNA-TECH propone un puente digital entre voz, texto y Lengua de Señas Colombiana para facilitar conversaciones básicas en contextos cotidianos y educativos.
                </p>
                <section className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link to="/login" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-7 font-bold text-white shadow-[0_18px_45px_rgba(0,204,255,.2)] transition hover:-translate-y-1">
                        Explorar SIGNA <span aria-hidden="true">→</span>
                    </Link>
                    <a href="#comofunciona" className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-white/12 bg-white/[.035] px-7 font-semibold text-slate-200 transition hover:border-cyan-300/40">Ver cómo funciona</a>
                </section>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
                    <li>✓ Enfoque educativo</li><li>✓ Voz y texto</li><li>✓ Señas básicas</li>
                </ul>
            </article>

            <figure className="relative mx-auto w-full max-w-[620px]">
                <span className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
                <section className="relative rounded-[2rem] border border-white/12 bg-[#111a20]/95 p-3 shadow-[0_35px_100px_rgba(0,0,0,.55)]">
                    <section className="rounded-[1.5rem] border border-white/10 bg-[#0b1115] p-5">
                        <header className="flex items-center justify-between border-b border-white/8 pb-4">
                            <section><p className="text-sm font-bold">Comunicación</p><p className="text-xs text-slate-500">Sesión preparada</p></section>
                            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-300">En línea</span>
                        </header>
                        <section className="grid gap-4 py-5 sm:grid-cols-2">
                            <article className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[.06] p-5">
                                <p className="text-xs font-bold text-cyan-200">Entrada</p>
                                <section className="mt-4 grid h-40 place-items-center rounded-xl border border-dashed border-white/10 bg-black/20">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-cyan-300/10 text-3xl text-cyan-300">◉</span>
                                </section>
                                <p className="mt-3 text-xs text-slate-400">Cámara / micrófono preparado</p>
                            </article>
                            <article className="rounded-2xl border border-white/8 bg-white/[.025] p-5">
                                <p className="text-xs font-bold text-slate-400">Interpretación</p>
                                <p className="mt-5 rounded-xl bg-white/[.04] p-3 text-sm text-slate-300">Hola, ¿cómo estás?</p>
                                <p className="mt-3 rounded-xl bg-cyan-300/10 p-3 text-sm text-cyan-100">Mensaje listo para comunicar</p>
                                <p className="mt-5 text-xs text-slate-500">Voz ↔ texto ↔ señas básicas</p>
                            </article>
                        </section>
                    </section>
                </section>
            </figure>
        </section>
    );
}