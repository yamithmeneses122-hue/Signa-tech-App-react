import { Link } from "react-router-dom";

export default function ProductHeader() {
    return (
        <section className="px-6 pt-32 pb-16 text-center text-white lg:px-20 lg:pt-36">
            <article className="mx-auto max-w-[950px]">

                <h1 className="mx-auto mb-4 max-w-[950px] text-[clamp(2.2rem,6vw,4.6rem)] font-extrabold leading-tight">
                    Comunicación accesible, diseñada para la vida real.
                </h1>

                <p className="mx-auto max-w-[760px] text-[clamp(1rem,2.2vw,1.2rem)] leading-7 text-[#c7d0d9]">
                    SIGNA-TECH conecta voz, texto y Lengua de Señas Colombiana
                    (LSC) mediante herramientas pensadas para usuarios,
                    intérpretes y organizaciones.
                </p>

                <section className="mt-8 flex flex-wrap justify-center gap-4">

                    <a
                        className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-5 font-semibold text-white transition duration-300 hover:-translate-y-0.5"
                        href="/documents/ficha-producto-signa-tech.pdf"
                        download
                    >
                        Descargar ficha del producto (PDF)
                    </a>

                    <Link
                        className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-white/20 bg-white/[0.06] px-5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#00CCFF]"
                        to="/support"
                    >
                        Hablar con soporte
                    </Link>

                </section>

            </article>
        </section>
    );
}

 