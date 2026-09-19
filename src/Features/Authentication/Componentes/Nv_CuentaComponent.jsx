export default function Nv_CuentaComponent() {
    return (
        <>
            <article className="w-full max-w-[560px] rounded-[20px] border border-cyan-400 bg-black p-5 shadow-[0_8px_30px_rgba(0,204,255,0.18)] sm:p-7">
                <header className="text-center">
                    <h1 className="text-2xl font-bold text-cyan-400">SIGNA-TECH-APP</h1>
                    <p className="mt-2 text-white">Crear nueva cuenta</p>
                </header>

                <form className="mt-5 flex flex-col gap-4">
                    <fieldset>
                        <label className="text-sm text-white" htmlFor="name">
                            Nombre completo
                        </label>
                        <input
                            className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-3 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Angela Garces"
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label className="text-sm text-white" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-3 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@gmail.com"
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label className="text-sm text-white" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-3 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••••••"
                            minLength="8"
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label className="text-sm text-white" htmlFor="passwordConfirmation">
                            Confirmar contraseña
                        </label>
                        <input
                            className="mt-2 w-full rounded-[10px] border border-gray-300 bg-gray-300/55 px-3 py-3 text-black placeholder:text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            placeholder="••••••••••••"
                            minLength="8"
                            required
                        />
                    </fieldset>

                    <button
                        className="w-full rounded-md bg-sky-500 px-3 py-3 text-base font-medium text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                        type="submit"
                    >
                        Crear cuenta
                    </button>

                    <a className="mx-auto text-center text-cyan-400 hover:underline" href="#">
                        ¿Ya tienes cuenta? Inicia sesión
                    </a>
                </form>
            </article>
        </>
    );
}