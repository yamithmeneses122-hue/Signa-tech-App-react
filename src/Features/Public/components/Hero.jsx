export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-12 px-6 pt-32 pb-16 text-center lg:flex-row lg:justify-between lg:px-12 lg:pt-40 lg:pb-20 lg:text-left">

            <article className="flex flex-col items-center lg:items-start">

                <p className="mb-4 text-sm font-medium tracking-wide text-[#00CCFF]">
                    Tecnología que traduce inclusión
                </p>

                <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                    Conectando personas
                    <br />
                    más allá del lenguaje
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#c7d0d9] lg:text-[1.1rem]">
                    Una solución tecnológica que facilita la comunicación
                    entre personas mediante voz, texto y lenguaje de señas
                    colombiano.
                </p>

                <nav className="mt-8">
                    <a
                        href="#product"
                        className="inline-flex h-[52px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-8 font-semibold text-white shadow-[0_15px_35px_rgba(0,204,255,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,204,255,.35)]"
                    >
                        Empezar ahora →
                    </a>
                </nav>

            </article>

            <figure className="flex justify-center lg:w-1/2">
                <img
                    src="/images/others/hero.png"
                    alt="Representación de comunicación mediante tecnología y lenguaje de señas"
                    className="w-full max-w-[750px] rounded-[28px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,.45)]"
                />
            </figure>

        </section>
    );
}

