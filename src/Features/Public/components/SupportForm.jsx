function SupportForm() {
    return (
        <section className="px-6 pb-20 text-white lg:px-20">

            <h2 className="mb-8 text-center text-[clamp(1.7rem,4vw,2.5rem)] font-bold">
                Enviar una solicitud
            </h2>

            <form
                className="mx-auto grid max-w-[680px] gap-4"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    required
                    className="w-full rounded-[10px] border border-white/20 bg-black/20 p-3.5 text-white outline-none transition placeholder:text-white/55 focus:border-[#00CCFF] focus:ring-4 focus:ring-[#00CCFF]/10"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="w-full rounded-[10px] border border-white/20 bg-black/20 p-3.5 text-white outline-none transition placeholder:text-white/55 focus:border-[#00CCFF] focus:ring-4 focus:ring-[#00CCFF]/10"
                />

                <textarea
                    name="message"
                    placeholder="Cuéntanos cómo podemos ayudarte"
                    required
                    className="min-h-[150px] w-full resize-y rounded-[10px] border border-white/20 bg-black/20 p-3.5 text-white outline-none transition placeholder:text-white/55 focus:border-[#00CCFF] focus:ring-4 focus:ring-[#00CCFF]/10"
                />

                <button
                    className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-5 font-semibold text-white transition duration-300 hover:-translate-y-0.5"
                    type="submit"
                >
                    Enviar solicitud
                </button>

            </form>

        </section>
    );
}

export default SupportForm;