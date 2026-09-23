import { Link } from "react-router-dom";

export default function HeaderHome() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0c1216]/85 px-5 py-3 backdrop-blur-2xl lg:px-10">
            <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-5">
                <Link to="/" className="flex items-center gap-3" aria-label="SIGNA-TECH, inicio">
                    <img src="/images/logo/logo.jpeg" alt="Logo de SIGNA-TECH" className="h-11 w-11 rounded-2xl object-cover shadow-lg lg:h-12 lg:w-12" />
                    <span className="hidden text-sm font-black tracking-[0.18em] text-white sm:block">SIGNA-TECH</span>
                </Link>

                <ul className="hidden items-center gap-7 lg:flex">
                    <li><a href="#tecnologias" className="text-sm text-slate-300 transition hover:text-cyan-300">Tecnología</a></li>
                    <li><a href="#comofunciona" className="text-sm text-slate-300 transition hover:text-cyan-300">Cómo funciona</a></li>
                    <li><a href="#casos" className="text-sm text-slate-300 transition hover:text-cyan-300">Casos de uso</a></li>
                    <li><Link to="/product" className="text-sm text-slate-300 transition hover:text-cyan-300">Producto</Link></li>
                    <li><Link to="/support" className="text-sm text-slate-300 transition hover:text-cyan-300">Soporte</Link></li>
                </ul>

                <Link to="/login" className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,204,255,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,204,255,.3)]">
                    Explorar SIGNA
                </Link>
            </nav>
        </header>
    );
}