const features = [
    {
        image: "/images/feactures/img1.png",
        title: "Reconocimiento IA",
        description:
            "Sistema de IA que reconoce lengua de señas en tiempo real con 98% de precisión.",
    },
    {
        image: "/images/feactures/image2.png",
        title: "Tiempo real",
        description:
            "Traducción instantánea sin retrasos, permitiendo conversaciones naturales.",
    },
    {
        image: "/images/feactures/image3.png",
        title: "Privacidad garantizada",
        description:
            "Encriptación de extremo a extremo para proteger todas tus conversaciones.",
    },
    {
        image: "/images/feactures/image3.png",
        title: "100% Accesible",
        description:
            "Diseñado desde cero siguiendo estándares WCAG para máxima accesibilidad.",
    },
    {
        image: "/images/feactures/image5.png",
        title: "Lengua de señas colombiana",
        description:
            "Compatible con saludos básicos y expresiones comunes.",
    },
    {
        image: "/images/feactures/image6.png",
        title: "Soporte experto",
        description:
            "Atención especializada por intérprete disponible para asistencia.",
    },
];

export default function FeatureCard() {
    return (
        <section
            className="
                grid
                grid-cols-1
                gap-6
                px-6
                py-8
                md:grid-cols-2
                lg:grid-cols-3
                lg:px-12
            "
        >

            {features.map((feature) => (
                <article
                    key={feature.title}
                    className="
                        rounded-[24px]
                        border
                        border-white/[.08]
                        bg-white/[.03]
                        p-8
                        text-left
                        backdrop-blur-xl
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:border-[#00CCFF]/30
                        hover:bg-white/[.05]
                    "
                >

                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="
                            h-[70px]
                            w-[70px]
                            rounded-[18px]
                            bg-[rgba(0,204,255,.08)]
                            object-contain
                            p-3
                        "
                    />

                    <h1
                        className="
                            mt-6
                            text-xl
                            font-bold
                            text-white
                        "
                    >
                        {feature.title}
                    </h1>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-[1.7]
                            text-[#c7d0d9]
                        "
                    >
                        {feature.description}
                    </p>

                </article>
            ))}

        </section>
    );
}