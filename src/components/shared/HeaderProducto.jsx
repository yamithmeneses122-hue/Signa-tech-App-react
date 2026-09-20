import { Link } from "react-router-dom";

function HeaderProducto() {
    return (
        <header
            className="
                fixed
                top-0
                left-0
                z-50
                w-full
                border-b
                border-white/5 bg-[rgba(23,28,30,.70)]
                px-6 py-4
                backdrop-blur-[18px] lg:px-12
            "
        >
            <nav
                className="
                    mx-auto
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                "
            >

                <section className="flex items-center gap-4">

                    <Link to="/home">
                        <img
                            src="./Public/images/logo/logo.jpeg"
                            alt="Logo de SIGNA-TECH-APP"
                            className="
                                h-[50px]
                                w-[50px]
                                rounded-full
                                border
                                border-white/10
                                object-cover
                                shadow-[0_10px_25px_rgba(0,0,0,.25)]
                                transition
                                duration-300
                                hover:scale-105
                                lg:h-[60px]
                                lg:w-[60px]
                            "
                        />
                    </Link>

                    <h1
                        className="
                            text-lg
                            font-bold
                            tracking-[1px]
                            text-white
                            lg:text-xl
                        "
                    >
                        SIGNA-TECH-APP
                    </h1>

                </section>


                <ul
                    className="
                        hidden
                        items-center
                        gap-7
                        lg:flex
                    "
                >

                    <li>
                        <Link
                            to="/home"
                            className="
                                text-sm
                                font-medium
                                text-white
                                transition
                                duration-300
                                hover:text-[#00CCFF]
                            "
                        >
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/product"
                            className="
                                text-sm
                                font-medium
                                text-white
                                transition
                                duration-300
                                hover:text-[#00CCFF]
                            "
                        >
                            Producto
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/support"
                            className="
                                text-sm
                                font-medium
                                text-white
                                transition
                                duration-300
                                hover:text-[#00CCFF]
                            "
                        >
                            Soporte
                        </Link>
                    </li>

                </ul>


                {/* BOTONES */}
                <section
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <Link
                        to="/register"
                        className="
                            hidden
                            text-sm
                            font-medium
                            text-[#d9d9d9]
                            transition
                            duration-300
                            hover:text-[#00CCFF]
                            sm:block
                        "
                    >
                        Comenzar
                    </Link>

                    <Link
                        to="/login"
                        className="
                            inline-flex
                            h-[45px]
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-gradient-to-br
                            from-[#00CCFF]
                            to-[#099DCB]
                            px-5
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_12px_30px_rgba(0,204,255,.25)]
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_20px_40px_rgba(0,204,255,.35)]
                            lg:h-[50px]
                            lg:min-w-[160px]
                        "
                    >
                        Iniciar Sesión
                    </Link>

                </section>

            </nav>
        </header>
    );
}

export default HeaderProducto;
