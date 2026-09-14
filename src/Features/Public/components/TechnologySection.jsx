export default function TechnologySection() {
    return (
        <section
            id="tecnologias"
            className="
                mt-24
                flex
                flex-col
                items-center
                px-6
                text-center
                lg:px-12
            "
        >

            <h1
                className="
                    text-4xl
                    font-bold
                    text-white
                    lg:text-[2.5rem]
                "
            >
                Tecnología que transforma vidas
            </h1>

            <p
                className="
                    mt-6
                    max-w-3xl
                    text-base
                    leading-[1.8]
                    text-[#b7c3cf]
                "
            >
                Nuestra plataforma combina IA avanzada
                con diseño accesible para crear experiencias
                de comunicación inclusivas y modernas.
            </p>

        </section>
    );
}