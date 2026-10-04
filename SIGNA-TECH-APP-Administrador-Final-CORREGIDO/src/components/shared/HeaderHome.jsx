import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function HeaderHome() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/8 bg-[#0c1216]/75 px-5 py-3 backdrop-blur-2xl lg:px-10">
            <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-5">
                <Logo />

                <ul className="hidden items-center gap-7 lg:flex">
                    <li><a href="#tecnologias" className="text-sm text-slate-300 transition hover:text-cyan-300">Tecnología</a></li>
                    <li><a href="#demo" className="text-sm text-slate-300 transition hover:text-cyan-300">Cómo funciona</a></li>
                    <li><a href="#casos" className="text-sm text-slate-300 transition hover:text-cyan-300">Casos de uso</a></li>
                    <li><Link to="/product" className="text-sm text-slate-300 transition hover:text-cyan-300">Producto</Link></li>
                    <li><Link to="/support" className="text-sm text-slate-300 transition hover:text-cyan-300">Soporte</Link></li>
                </ul>

                <Link
                    to="/login"
                    className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,204,255,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,204,255,.3)]"
                >
                    Iniciar sesión
                </Link>
            </nav>
        </header>
    );
}

