function Statistics() {
    return (
        <section className="flex flex-wrap justify-center gap-6 px-6 lg:px-12">

            <article className="flex-1 basis-[220px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1">

                <strong className="block text-4xl font-bold text-[#00CCFF]">
                    98%
                </strong>

                <span className="text-sm text-[#cbd5e1]">
                    Precisión IA
                </span>

            </article>

            <article className="flex-1 basis-[220px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1">

                <strong className="block text-4xl font-bold text-[#00CCFF]">
                    10K+
                </strong>

                <span className="text-sm text-[#cbd5e1]">
                    Usuarios activos
                </span>

            </article>

            <article className="flex-1 basis-[220px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1">

                <strong className="block text-4xl font-bold text-[#00CCFF]">
                    24/7
                </strong>

                <span className="text-sm text-[#cbd5e1]">
                    Disponibilidad
                </span>

            </article>

        </section>
    );
}

export default Statistics;