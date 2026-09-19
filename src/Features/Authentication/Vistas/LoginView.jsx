import LoginComponent from "./LoginComponent";
import fondo from "./img/fondo.png";
import regresar from "./img/regresar.png";
import logo from "./img/logo.jpg"

export default function LoginView() {
    return (
        <>
            <section className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,204,255,0.12),transparent_30%),linear-gradient(180deg,rgb(12,18,22),rgb(20,27,31))] font-[Montserrat,Arial,sans-serif]">
                <a
                    className="fixed left-5 top-5 z-10 h-[42px] w-[42px]"
                    href="/"
                    aria-label="Regresar"
                >
                    <img className="h-full w-full" src={regresar} alt="" />
                </a>

                <main className="flex min-h-screen">
                    <section className="hidden w-1/2 lg:block" aria-label="Imagen de comunicación inclusiva">
                        <img
                            className="h-screen w-full object-cover object-center"
                            src={fondo}
                            alt="Personas comunicándose con lengua de señas"
                        />
                    </section>

                    <section className="flex w-full items-start justify-center px-5 pb-8 pt-28 lg:w-1/2 lg:px-8 lg:pt-[4vh]">
                        <article className="flex w-full max-w-[530px] flex-col items-center">
                            <header className="mb-3 flex flex-col items-center gap-2 text-center">
                                <img
                                    className="h-16 w-16 rounded-full object-cover shadow-lg shadow-cyan-500/20"
                                    src={logo}
                                    alt="Logo de SIGNA-TECH"
                                />
                                <p className="text-xl font-bold text-cyan-400 sm:text-2xl">SIGNA-TECH-APP</p>
                            </header>
                            <LoginComponent/>
                        </article>
                    </section>
                </main>
            </section>
        </>
    );
}