function SupportOptions() {
    return (
        <section className="px-6 pb-16 text-white lg:px-20">

            <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Acceso y cuenta
                    </h3>

                    <p className="mb-0">
                        Crea una cuenta, inicia sesión y usa la opción de
                        recuperación cuando olvides la contraseña.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Dispositivos
                    </h3>

                    <p className="mb-0">
                        Autoriza el acceso a micrófono o cámara directamente
                        desde el navegador para usar los módulos respectivos.
                    </p>

                </article>

                <article className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 leading-7 text-[#c7d0d9] transition duration-300 hover:-translate-y-1 hover:border-[#00CCFF]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] lg:p-8">

                    <h3 className="mb-4 mt-0 text-xl font-bold text-white">
                        Información del producto
                    </h3>

                    <p className="mb-0">
                        Descarga la ficha con el alcance actual y los
                        componentes que requieren integración de servidor.
                    </p>

                </article>

            </section>

        </section>
    );
}

export default SupportOptions;