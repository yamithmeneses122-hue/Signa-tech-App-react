import LoginComponent from "../Componentes/LoginComponent";
import { Link } from "react-router-dom";

export default function LoginView() {
    return (
        <>
            <section className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,204,255,0.12),transparent_30%),linear-gradient(180deg,rgb(12,18,22),rgb(20,27,31))] font-[Montserrat,Arial,sans-serif]">
                <Link
                    className="fixed left-5 top-5 z-10 h-[42px] w-[42px]"
                    to="/"
                    aria-label="Regresar"
                >
                    <span aria-hidden="true" className="text-2xl text-cyan-300">←</span>
                </Link>

                <main className="flex min-h-screen">
                    <section className="hidden w-1/2 lg:block" aria-label="Imagen de comunicación inclusiva">
                        <div className="h-screen w-full bg-[radial-gradient(circle_at_center,rgba(0,204,255,0.3),transparent_55%),linear-gradient(135deg,#07151d,#03050d)]" aria-label="Imagen de comunicación inclusiva" />
                    </section>

                    <section className="flex min-h-screen w-full items-center justify-center px-5 py-6 lg:w-1/2 lg:px-8 lg:py-[4vh]">
                        <article className="flex w-full max-w-[530px] flex-col items-center">
                            <header className="mb-2 flex flex-col items-center gap-1 text-center sm:mb-3 sm:gap-2">
                                <p className="text-2xl font-bold text-cyan-400 sm:text-3xl">SIGNA-TECH-APP</p>
                            </header>
                            <LoginComponent/>
                        </article>
                    </section>
                </main>
            </section>
        </>
    );
}
