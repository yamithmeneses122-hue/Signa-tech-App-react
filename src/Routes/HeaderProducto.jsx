import { Outlet } from "react-router-dom";

import HeaderProducto from "../components/shared/HeaderProducto.jsx";

function HeaderProductoLayout() {
    return (
        <div
            className="
                min-h-screen
                overflow-x-hidden
                bg-[radial-gradient(circle_at_top_right,rgba(0,204,255,.12),transparent_30%),linear-gradient(180deg,rgb(12,18,22),rgb(20,27,31))]
                font-['Montserrat',sans-serif]
                text-white
            "
        >

            <HeaderProducto />

            <main>
                <Outlet />
            </main>

        </div>
    );
}

export default HeaderProductoLayout;
