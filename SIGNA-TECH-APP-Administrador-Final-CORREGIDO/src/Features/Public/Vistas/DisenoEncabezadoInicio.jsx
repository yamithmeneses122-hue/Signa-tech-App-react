import { Outlet } from "react-router-dom";
import EncabezadoInicio from "../../../componentes/compartidos/EncabezadoInicio.jsx";
import PiePagina from "../../../componentes/compartidos/PiePagina.jsx";

export default function DisenoEncabezadoInicio() {
    return (
        <section className="min-h-screen overflow-x-hidden bg-[#0c1216] font-['Montserrat',sans-serif] text-white">
            <EncabezadoInicio />
            <main className="pt-[68px]">
                <Outlet />
            </main>
            <PiePagina />
        </section>
    );
}
