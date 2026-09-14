function HowItWorks() {
    return (
        <section className="mt-16 border-t border-b border-white/5 bg-gradient-to-b from-[#00CCFF]/10 to-[#00CCFF]/[0.03] px-6 py-16 lg:px-12">

            <header className="mb-10 text-center">

                <h2 className="text-3xl font-bold text-[#00CCFF] sm:text-4xl">
                    Cómo funciona
                </h2>

                <p className="mt-4 text-base text-white">
                    Comienza a utilizar SIGNA-TECH-APP en simples pasos.
                </p>

            </header>

            <section className="mx-auto flex max-w-[1000px] flex-col justify-center gap-6 md:flex-row">

                <article className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">

                    <h3 className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-[#00CCFF] to-[#099DCB] text-xl text-white">
                        1
                    </h3>

                    <h2 className="mt-4 text-xl font-semibold text-white">
                        Regístrate
                    </h2>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Crea tu cuenta para comenzar a utilizar la plataforma.
                    </p>

                </article>

                <article className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">

                    <h3 className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-[#00CCFF] to-[#099DCB] text-xl text-white">
                        2
                    </h3>

                    <h2 className="mt-4 text-xl font-semibold text-white">
                        Configura
                    </h2>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Configura las opciones necesarias para tu comunicación.
                    </p>

                </article>

                <article className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">

                    <h3 className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-[#00CCFF] to-[#099DCB] text-xl text-white">
                        3
                    </h3>

                    <h2 className="mt-4 text-xl font-semibold text-white">
                        Comunícate
                    </h2>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Utiliza voz, texto y lenguaje de señas para comunicarte.
                    </p>

                </article>

            </section>

        </section>
    );
}

export default HowItWorks;