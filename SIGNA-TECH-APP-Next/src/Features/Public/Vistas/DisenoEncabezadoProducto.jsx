import { Outlet } from "react-router-dom";
import EncabezadoProducto from "../../../componentes/compartidos/EncabezadoProducto.jsx";

export default function DisenoEncabezadoProducto() {
    return (
        <section className="min-h-screen overflow-x-hidden bg-[#0c1216] font-['Montserrat',sans-serif] text-white">
            <EncabezadoProducto />
            <main className="pt-[68px]"><Outlet /></main>
        </section>

    );
}