import ContraseñaComponent from "../Componentes/ContraseñaComponent";
import { Link } from "react-router-dom";

export default function ContraseñaView() {
    return (
        <>
            <section className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-black/75 px-4 py-20 font-[Montserrat,Arial,sans-serif]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,204,255,0.3),transparent_55%),linear-gradient(135deg,#07151d,#03050d)]" aria-hidden="true" />

      <Link className="fixed left-[3%] top-[3%] z-10 h-16 w-16" to="/login" aria-label="Regresar al inicio de sesión">
        <span aria-hidden="true" className="text-2xl text-cyan-300">←</span>
      </Link>

      <ContraseñaComponent/>
    </section>
        </>
    );
}
