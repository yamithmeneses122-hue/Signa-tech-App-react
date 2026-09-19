export default function ContraseñaComponent() {
    return (
        <>
            <article className="w-full max-w-[520px] rounded-[20px] border border-cyan-400 bg-black/85 p-5 text-white shadow-[0_8px_30px_rgba(0,204,255,0.18)] sm:p-6">
                <header className="text-center">
                    <h1 className="text-2xl font-bold text-cyan-400">SIGNA-TECH-APP</h1>
                    <p className="mt-2">Recuperar contraseña</p>
                </header>

                <form className="mt-5 flex flex-col gap-5">
                    <fieldset>
                        <label className="text-sm text-white" htmlFor="recoveryEmail">
                            Correo electrónico
                        </label>
                        <input
                            className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-3 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="recoveryEmail"
                            name="email"
                            type="email"
                            placeholder="tu@gmail.com"
                            required
                        />
                    </fieldset>

                    <p className="text-sm text-white">Te enviaremos un enlace para restablecer tu contraseña.</p>

                    {status && <p className="rounded-md bg-emerald-500/20 px-3 py-2 text-center text-sm text-emerald-200">{status}</p>}

                    <button
                        className="w-full rounded-[10px] bg-sky-500 px-3 py-3 text-base text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                        type="submit"
                    >
                        Enviar enlace de recuperación
                    </button>

                    <a className="mx-auto text-center text-cyan-400 hover:underline" href="#">
                        Volver al inicio de sesión
                    </a>
                </form>
            </article>
        </>
    );
}