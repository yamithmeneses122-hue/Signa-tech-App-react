import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section
            className="
                flex
                flex-col
                gap-12
                px-6
                pb-16
                pt-32
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-12
                lg:pb-20
                lg:pt-40
            "
        >

            {/* TEXTO */}
            <article
                className="
                    flex
                    w-full
                    flex-col
                    items-center
                    text-center
                    lg:w-1/2
                    lg:items-start
                    lg:text-left
                "
            >

                <h1
                    className="
                        text-4xl
                        font-extrabold
                        leading-[1.2]
                        text-white
                        sm:text-5xl
                        lg:text-[3.5rem]
                    "
                >
                    Conectando personas
                    <br />
                    más allá del lenguaje
                </h1>

                <p
                    className="
                        mt-6
                        max-w-xl
                        text-base
                        leading-[1.9]
                        text-[#c7d0d9]
                        lg:text-[1.05rem]
                    "
                >
                    SIGNA-TECH facilita la comunicación en tiempo real
                    entre usuarios sordos que usan lengua de señas y
                    usuarios oyentes que usan voz, creando un puente
                    de inclusión real.
                </p>


                {/* BOTONES */}
                <article
                    className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        gap-4
                        sm:flex-row
                    "
                >

                    <Link to="/register">
                        <button
                            className="
                                h-[52px]
                                rounded-[16px]
                                bg-gradient-to-br
                                from-[#00CCFF]
                                to-[#099DCB]
                                px-8
                                font-semibold
                                text-white
                                shadow-[0_15px_35px_rgba(0,204,255,.25)]
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_20px_40px_rgba(0,204,255,.35)]
                            "
                        >
                            Empezar ahora →
                        </button>
                    </Link>

                    <Link
                        to="/product"
                        className="
                            text-sm
                            font-medium
                            text-[#c7d0d9]
                            transition
                            duration-300
                            hover:text-[#00CCFF]
                        "
                    >
                        Conocer el producto
                    </Link>

                </article>

            </article>


            {/* IMAGEN */}
            <figure
                className="
                    flex
                    w-full
                    justify-center
                    lg:w-1/2
                "
            >
                <img
                    src="/images/others/img7.jpeg"
                    alt="Imagen principal de SIGNA-TECH-APP"
                    className="
                        w-full
                        max-w-[750px]
                        rounded-[28px]
                        border
                        border-white/10
                        object-cover
                        shadow-[0_25px_60px_rgba(0,0,0,.45)]
                    "
                />
            </figure>

        </section>
    );
}