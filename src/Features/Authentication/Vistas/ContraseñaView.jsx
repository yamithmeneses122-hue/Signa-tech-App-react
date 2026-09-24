import ContraseñaComponent from "../Componentes/ContraseñaComponent";
import { Link } from "react-router-dom";
import fondo from "./img/fondo.png";
import regresar from "./img/regresar.png";

export default function ContraseñaView() {
    return (
        <>
            <section className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-black/75 px-4 py-20 font-[Montserrat,Arial,sans-serif]">
      <img
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover object-center opacity-55"
        src={fondo}
        alt=""
        aria-hidden="true"
      />

      <Link className="fixed left-[3%] top-[3%] z-10 h-16 w-16" to="/login" aria-label="Regresar al inicio de sesión">
        <img className="h-full w-full" src={regresar} alt="" />
      </Link>

      <ContraseñaComponent/>
    </section>
        </>
    );
}
