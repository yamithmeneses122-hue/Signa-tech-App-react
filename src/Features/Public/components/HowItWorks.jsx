export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Regístrate",
            description:
                "Crea tu cuenta gratuita en menos de 2 minutos.",
        },
        {
            number: "2",
            title: "Configura",
            description:
                "Personaliza la experiencia según tus necesidades.",
        },
        {
            number: "3",
            title: "Comunícate",
            description:
                "Empieza conversaciones inclusivas en tiempo real.",
        },
    ];

    return (
        <section
            className="
                mt-20
                border-y
                border-white/[.05]
                bg-gradient-to-b
                from-[rgba(0,204,255,.08)]
                to-[rgba(0,204,255,.03)]
                px-6
                py-16
                lg:px-12
            "
        >

            {/* TÍTULO */}
            <article
                className="
                    mb-12
                    text-center
                "
            >

                <h1
                    id="comofunciona"
                    className="
                        text-4xl
                        font-bold
                        text-[#00CCFF]
                    "
                >
                    Cómo funciona
                </h1>

                <p
                    className="
                        mt-4
                        text-base
                        text-white
                    "
                >
                    Tres simples pasos para comenzar
                    a comunicarte sin barreras.
                </p>

            </article>


            {/* PASOS */}
            <section
                className="
                    grid
                    grid-cols-1
                    justify-items-center
                    gap-6
                    md:grid-cols-3
                "
            >

                {steps.map((step) => (
                    <article
                        key={step.number}
                        className="
                            w-full
                            max-w-[320px]
                            rounded-[24px]
                            border
                            border-white/[.08]
                            bg-white/[.04]
                            p-8
                            text-center
                            backdrop-blur-xl
                        "
                    >

                        <h2
                            className="
                                mx-auto
                                flex
                                h-[60px]
                                w-[60px]
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-br
                                from-[#00CCFF]
                                to-[#099DCB]
                                text-lg
                                font-bold
                                text-white
                            "
                        >
                            {step.number}
                        </h2>

                        <h2
                            className="
                                mt-5
                                text-xl
                                font-bold
                                text-white
                            "
                        >
                            {step.title}
                        </h2>

                        <p
                            className="
                                mt-3
                                text-sm
                                leading-[1.7]
                                text-[#c7d0d9]
                            "
                        >
                            {step.description}
                        </p>

                    </article>
                ))}

            </section>

        </section>
    );
}