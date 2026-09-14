export default function DownloadPanel() {
    return (
        <section
            className="
                mx-6
                mt-10
                flex
                flex-col
                items-center
                justify-between
                gap-6
                rounded-[24px]
                border
                border-white/[.08]
                bg-white/[.03]
                p-8
                backdrop-blur-xl
                lg:mx-12
                lg:flex-row
            "
        >

            <section>
                <h2
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    ¿Quieres conocer SIGNA-TECH?
                </h2>

                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-7
                        text-[#c7d0d9]
                    "
                >
                    Consulta la ficha del producto: funciones actuales,
                    usuarios, alcance y próximos pasos de integración.
                </p>
            </section>


            <a
                href="/documentos/ficha-producto-signa-tech.pdf"
                download
                className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    rounded-[16px]
                    bg-gradient-to-br
                    from-[#00CCFF]
                    to-[#099DCB]
                    px-6
                    text-center
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(0,204,255,.25)]
                    transition
                    duration-300
                    hover:-translate-y-1
                "
            >
                Descargar información en PDF
            </a>

        </section>
    );
}