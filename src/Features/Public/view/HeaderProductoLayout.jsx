import { Outlet } from "react-router-dom";
import HeaderProducto from "../../../components/shared/HeaderProducto.jsx";

export default function HeaderProductoLayout() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0c1216] font-['Montserrat',sans-serif] text-white">
            <HeaderProducto />
            <main className="pt-[68px]"><Outlet /></main>
        </div>
    );
}