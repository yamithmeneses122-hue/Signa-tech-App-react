function FeatureCard() {
    return (
        <section className="px-6 py-8 lg:px-12">

            <header className="mb-8 text-center">

                <p className="text-sm font-medium tracking-wide text-[#00CCFF]">
                    Características
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Una solución pensada para la inclusión
                </h2>

            </header>

            <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        Reconocimiento IA
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Tecnología orientada al reconocimiento básico de señas.
                    </p>

                </article>

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        Tiempo real
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Facilita la comunicación de manera rápida y bidireccional.
                    </p>

                </article>

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        Privacidad garantizada
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        La solución considera la protección de la información de los usuarios.
                    </p>

                </article>

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        100% Accesible
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Diseñada pensando en diferentes necesidades de comunicación.
                    </p>

                </article>

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        Lengua de señas colombiana
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Incluye un vocabulario básico de Lengua de Señas Colombiana.
                    </p>

                </article>

                <article className="min-h-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left text-white backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]">

                    <h3 className="text-xl font-semibold">
                        Soporte experto
                    </h3>

                    <p className="mt-3 leading-7 text-[#c7d0d9]">
                        Cuenta con acompañamiento para facilitar el uso de la solución.
                    </p>

                </article>

            </section>

        </section>
    );
}

export default FeatureCard;