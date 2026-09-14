import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0c1216]/80 px-6 py-4 backdrop-blur-xl lg:px-20">

            <nav className="mx-auto flex max-w-[1600px] items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/images/logo/logo.png"
                        alt="Logo de SIGNA-TECH-APP"
                        className="h-[55px] w-[55px] object-contain transition duration-300 hover:scale-105 lg:h-[70px] lg:w-[70px]"
                    />
                </Link>

                {/* MENÚ */}
                <ul className="hidden items-center gap-8 md:flex">

                    <li>
                        <Link
                            to="/"
                            className="text-sm font-medium text-white transition duration-300 hover:text-[#00CCFF]"
                        >
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/product"
                            className="text-sm font-medium text-white transition duration-300 hover:text-[#00CCFF]"
                        >
                            Producto
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/support"
                            className="text-sm font-medium text-white transition duration-300 hover:text-[#00CCFF]"
                        >
                            Soporte
                        </Link>
                    </li>

                </ul>

                {/* BOTÓN */}
                <Link
                    to="/login"
                    className="inline-flex h-[45px] items-center justify-center rounded-[14px] bg-gradient-to-br from-[#00CCFF] to-[#099DCB] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,204,255,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,204,255,.3)] lg:h-[55px] lg:min-w-[180px]"
                >
                    Iniciar sesión
                </Link>

            </nav>

        </header>
    );
}

export default Header;