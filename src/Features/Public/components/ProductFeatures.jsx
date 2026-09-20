export default function ProductFeatures() {
    return (
        <section className="px-6 pb-20 text-white lg:px-20">

            <h2 className="mb-8 text-center text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
                ¿Qué puedes hacer con SIGNA-TECH?
            </h2>

            <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Voz y texto
                    </h3>

                    <p className="mb-0">
                        Convierte texto en voz y transcribe audio en vivo cuando
                        el navegador y los permisos del dispositivo lo permiten.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Detección por cámara
                    </h3>

                    <p className="mb-0">
                        Conecta una cámara compatible para preparar la captura
                        visual. El reconocimiento automático requiere la
                        integración posterior del modelo LSC.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Diccionario LSC
                    </h3>

                    <p className="mb-0">
                        Consulta vocabulario y apoya la validación de señas con
                        un flujo específico para intérpretes.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Avatar de apoyo
                    </h3>

                    <p className="mb-0">
                        Centraliza entradas de texto, audio y video para
                        visualizar el flujo de interpretación.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Panel de intérprete
                    </h3>

                    <p className="mb-0">
                        Registra, corrige, valida y consulta el historial de
                        cambios del diccionario.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Accesibilidad
                    </h3>

                    <p className="mb-0">
                        Interfaz adaptable a teléfono, tableta y escritorio, con
                        modo de contraste claro disponible en el panel.
                    </p>

                </article>

            </section>

        </section>
    );
}

