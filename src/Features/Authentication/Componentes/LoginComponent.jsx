export default function LoginComponent() {
    return (
        <>
            <article className="w-full max-w-[530px] rounded-xl border border-cyan-400 bg-black/65 p-5 shadow-[0_8px_30px_rgba(0,204,255,0.18)] sm:p-7">
                <h1 className="text-2xl font-bold text-cyan-400">Bienvenido</h1>
                <p className="mb-5 mt-2 text-white">Inicia sesión para acceder a tu cuenta</p>

                <form className="flex flex-col gap-4">
                    <fieldset>
                        <label className="text-sm text-white" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            className="mt-1 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-2.5 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@gmail.com"
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend className="sr-only">Contraseña</legend>
                        <section className="flex items-center justify-between gap-3">
                            <label className="text-sm text-white" htmlFor="password">
                                Contraseña
                            </label>
                            <a className="text-xs text-cyan-400 hover:underline" href="#">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </section>
                        <input
                            className="mt-1 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-2.5 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••••••"
                            required
                        />
                    </fieldset>

                    <label className="flex items-center gap-2 text-sm text-white">
                        <input className="h-[18px] w-[18px] accent-cyan-500" name="remember" type="checkbox" />
                        Recordar mi sesión
                    </label>

                    <button
                        className="w-full rounded-md bg-sky-500 px-3 py-2.5 text-[15px] font-medium text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                        type="submit"
                    >
                        Iniciar sesión <span aria-hidden="true">→</span>
                    </button>

                    <section className="flex items-center gap-2 text-xs text-white before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
                        <span className="whitespace-nowrap">¿Nuevo en SIGNA-TECH?</span>
                    </section>

                    <a
                        className="block w-full rounded-[10px] border-2 border-sky-500 px-3 py-2.5 text-center text-[15px] text-sky-400 transition hover:bg-sky-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        href="#"
                    >
                        Crear cuenta nueva
                    </a>
                </form>
            </article>
        </>
    );
}