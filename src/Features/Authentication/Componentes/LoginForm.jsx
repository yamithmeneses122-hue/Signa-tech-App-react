import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <section className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-20 lg:px-10">
      <article className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#101820]/90 shadow-[0_30px_90px_rgba(0,0,0,0.45)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,204,255,0.18),transparent_35%),linear-gradient(135deg,#0c1216,#111b22)] p-8 lg:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
              Acceso seguro
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
              Bienvenido a <span className="text-cyan-300">SIGNA</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
              Inicia sesión para gestionar la interpretación, validación y comunicación en tiempo real.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-sm text-slate-300">
            <p className="font-semibold text-white">Demo de acceso</p>
            <p className="mt-2 text-slate-400">Correo: admin@signa.tech</p>
            <p className="text-slate-400">Contraseña: signa123</p>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Iniciar sesión</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Accede al panel</h2>
          </div>

          <form className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Correo electrónico</span>
              <input
                type="email"
                defaultValue="admin@signa.tech"
                className="w-full rounded-2xl border border-white/10 bg-[#0a1114] px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Contraseña</span>
              <input
                type="password"
                defaultValue="signa123"
                className="w-full rounded-2xl border border-white/10 bg-[#0a1114] px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
              />
            </label>

            <div className="flex items-center justify-between gap-3 pt-2 text-sm text-slate-400">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-[#0a1114]" />
                Recordarme
              </label>
              <button type="button" className="text-cyan-300 transition hover:text-cyan-200">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Link
              to="/interprete"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-5 py-3.5 text-base font-bold text-white shadow-[0_16px_40px_rgba(0,204,255,.2)] transition hover:-translate-y-0.5"
            >
              Entrar al sistema
            </Link>
          </form>
        </div>
      </article>
    </section>
  );
}
