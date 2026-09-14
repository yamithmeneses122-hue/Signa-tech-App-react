import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0c1216]/80 px-6 py-12 backdrop-blur-xl lg:px-20">

            <section className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-3">

                {/* INFORMACIÓN */}
                <article>

                    <img
                        src="/images/logo/logo.png"
                        alt="Logo de SIGNA-TECH-APP"
                        className="mb-4 h-[60px] w-[60px] object-contain"
                    />

                    <h2 className="text-xl font-bold text-white">
                        SIGNA-TECH-APP
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#c7d0d9]">
                        Tecnología que traduce inclusión.
                        Una propuesta tecnológica para facilitar
                        la comunicación mediante voz, texto y
                        lenguaje de señas colombiano.
                    </p>

                </article>

                {/* NAVEGACIÓN */}
                <nav>

                    <h2 className="mb-4 text-lg font-semibold text-white">
                        Navegación
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link
                                to="/"
                                className="text-sm text-[#c7d0d9] transition duration-300 hover:text-[#00CCFF]"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/product"
                                className="text-sm text-[#c7d0d9] transition duration-300 hover:text-[#00CCFF]"
                            >
                                Producto
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/support"
                                className="text-sm text-[#c7d0d9] transition duration-300 hover:text-[#00CCFF]"
                            >
                                Soporte
                            </Link>
                        </li>

                    </ul>

                </nav>

                {/* PROYECTO */}
                <article>

                    <h2 className="mb-4 text-lg font-semibold text-white">
                        SIGNA-TECH-APP
                    </h2>

                    <p className="text-sm leading-7 text-[#c7d0d9]">
                        Tecnología orientada a reducir las
                        barreras de comunicación y promover
                        una experiencia más accesible e inclusiva.
                    </p>

                </article>

            </section>

            {/* COPYRIGHT */}
            <section className="mx-auto mt-10 max-w-[1600px] border-t border-white/10 pt-6 text-center">

                <p className="text-sm text-[#8995a1]">
                    © 2026 SIGNA-TECH-APP. Todos los derechos reservados.
                </p>

            </section>

        </footer>
    );
}

export default Footer;