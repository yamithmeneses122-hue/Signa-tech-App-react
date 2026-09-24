import { Link, useNavigate } from "react-router-dom";
import { obtenerRutaPorCorreo } from "../../../funcionalidades/redireccionPorCorreo";

export default function LoginComponent() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const correo = new FormData(event.currentTarget).get("email");
    const ruta = obtenerRutaPorCorreo(String(correo ?? ""));

    if (ruta) {
      navigate(ruta);
    }
  };

  return (
    <article className="w-full max-w-[590px] rounded-[20px] border border-cyan-400/60 bg-slate-800/90 p-5 shadow-[0_0_28px_rgba(34,211,238,0.2)] backdrop-blur-sm sm:p-6">
      <h1 className="text-left text-3xl font-bold text-sky-400 sm:text-4xl">Bienvenido</h1>
      <p className="mb-5 mt-1 text-left text-base text-white sm:text-lg">Inicia sesión para acceder a tu cuenta</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <fieldset>
          <label className="text-base text-white" htmlFor="email">Correo electrónico</label>
          <input className="mt-1 w-full rounded-[10px] border border-slate-400 bg-slate-700 px-3 py-2.5 text-white placeholder:text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" id="email" name="email" type="email" placeholder="tu@gmail.com" required />
        </fieldset>

        <fieldset>
          <legend className="sr-only">Contraseña</legend>
          <section className="flex items-center justify-between gap-3">
            <label className="text-base text-white" htmlFor="password">Contraseña</label>
            <Link className="text-sm text-cyan-400 hover:underline" to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
          </section>
          <input className="mt-1 w-full rounded-[10px] border border-slate-400 bg-slate-700 px-3 py-2.5 text-white placeholder:text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" id="password" name="password" type="password" placeholder="••••••••••••" required />
        </fieldset>

        <label className="flex items-center gap-2 text-base text-white">
          <input className="h-5 w-5 accent-sky-500" name="remember" type="checkbox" />
          Recordar mi sesión
        </label>

        <button className="w-full rounded-full bg-gradient-to-r from-blue-800 via-sky-600 to-cyan-400 px-3 py-3 text-base font-medium text-white shadow-[0_0_18px_rgba(34,211,238,0.3)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900" type="submit">
          Iniciar sesión <span aria-hidden="true">→</span>
        </button>

        <section className="flex items-center gap-3 text-sm text-white before:h-px before:flex-1 before:bg-slate-400/70 after:h-px after:flex-1 after:bg-slate-400/70">
          <span className="whitespace-nowrap">¿Nuevo en SIGNA-TECH?</span>
        </section>

        <Link className="block w-full rounded-full border border-slate-100 px-3 py-2.5 text-center text-base font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300" to="/crear-cuenta">
          Cambiar cuenta
        </Link>
      </form>
    </article>
  );
}
