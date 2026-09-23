export default function ProblemSection() {
    return (
        <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <section className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                <article>
                    <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">El reto</span>
                    <h2 className="mt-4 text-4xl font-black tracking-[-.03em] sm:text-5xl">La comunicación no debería convertirse en una barrera.</h2>
                </article>
                <section className="grid gap-4 sm:grid-cols-2">
                    <article className="rounded-3xl border border-white/8 bg-white/[.025] p-7">
                        <h3 className="text-lg font-bold">Diferentes formas de comunicar</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">Voz, texto y señas pueden convivir en una misma experiencia cuando el diseño pone a las personas primero.</p>
                    </article>
                    <article className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[.045] p-7">
                        <h3 className="text-lg font-bold">Un puente digital</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">SIGNA-TECH se enfoca en comunicación básica y escenarios definidos para apoyar la inclusión.</p>
                    </article>
                </section>
            </section>
        </section>
    );
}