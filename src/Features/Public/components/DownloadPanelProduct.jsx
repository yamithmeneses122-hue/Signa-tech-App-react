export default function DownloadPanelProduct() {
    return (
        <section
            id="descarga"
            className="mx-6 mb-16 mt-12 flex max-w-[1000px] flex-col gap-6 rounded-3xl border border-[#00CCFF]/40 bg-[#00CCFF]/10 p-8 text-white backdrop-blur-xl lg:mx-auto lg:flex-row lg:items-center lg:justify-between"
        >

            <article>

                <h2 className="text-2xl font-bold">
                    Conoce más sobre SIGNA-TECH-APP
                </h2>

                <p className="mt-3 leading-7 text-[#c7d0d9]">
                    Consulta nuestra documentación para conocer
                    más detalles sobre la propuesta tecnológica.
                </p>

            </article>

            <a
                href="/documents/signa-tech-app.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-6 font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
                Descargar PDF
            </a>

        </section>
    );
}

