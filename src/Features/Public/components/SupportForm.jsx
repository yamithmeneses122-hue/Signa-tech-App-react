import { useState } from "react";

export default function SupportForm() {
    const [sent, setSent] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSent(true);
    }

    return (
        <section className="mx-auto max-w-[720px] px-5 pb-24 lg:px-10">
            <div className="rounded-[2rem] border border-white/8 bg-white/[.025] p-7 sm:p-9">
                <h2 className="text-3xl font-black">Enviar una solicitud</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">Este formulario es una demostración de interfaz y no envía datos a un servidor todavía.</p>

                <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                    <input required type="text" name="name" placeholder="Nombre completo" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" />
                    <input required type="email" name="email" placeholder="Correo electrónico" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" />
                    <textarea required name="message" placeholder="Cuéntanos cómo podemos ayudarte" className="min-h-40 resize-y rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" />
                    <button type="submit" className="min-h-12 rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] font-bold transition hover:-translate-y-0.5">
                        Enviar solicitud
                    </button>
                </form>

                {sent && (
                    <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/[.06] px-4 py-3 text-sm text-emerald-200">
                        Solicitud preparada. En una integración futura, aquí se conectará el envío real.
                    </p>
                )}
            </div>
        </section>
    );
}