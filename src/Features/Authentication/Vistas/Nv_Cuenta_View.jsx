import Nv_CuentaComponent from "./Nv_CuentaComponent";
import fondo from "./img/fondo.png";
import regresar from "./img/regresar.png";

export default function Nv_Cuenta_View() {
    return (
        <>
            <section className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-black px-4 py-20 font-[Montserrat,Arial,sans-serif]">
                <img
                    className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
                    src={fondo}
                    alt="#"
                    aria-hidden="true"
                />

                <a
                    className="fixed left-[3%] top-[3%] z-10 h-16 w-16"
                    href="/login"
                    aria-label="Regresar al inicio de sesión"
                >
                    <img className="h-full w-full" src={regresar} alt="" />
                </a>

                <Nv_CuentaComponent />
            </section>
        </>
    );
}