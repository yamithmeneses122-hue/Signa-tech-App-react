function DownloadPanel() {
    return (
        <section
            id="download"
            className="mx-6 mt-20 mb-20 flex max-w-[1000px] flex-col gap-6 rounded-3xl border border-[#00CCFF]/40 bg-[#00CCFF]/10 p-8 text-white backdrop-blur-xl sm:mx-auto lg:flex-row lg:items-center lg:justify-between"
        >

            <article>

                <p className="text-sm font-medium text-[#00CCFF]">
                    Conoce nuestro proyecto
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                    ¿Quieres conocer SIGNA-TECH-APP?
                </h2>

                <p className="mt-3 leading-7 text-[#c7d0d9]">
                    Consulta la documentación y conoce más sobre nuestra
                    propuesta tecnológica.
                </p>

            </article>

            <a
                href="/documents/signa-tech-app.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-6 font-semibold text-white shadow-[0_15px_35px_rgba(0,204,255,.25)] transition duration-300 hover:-translate-y-1"
            >
                Descargar PDF
            </a>

        </section>
    );
}

export default DownloadPanel;