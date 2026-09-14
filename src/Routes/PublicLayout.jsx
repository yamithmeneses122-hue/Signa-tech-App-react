import { Outlet } from "react-router-dom";

import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";

function PublicLayout() {
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

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default PublicLayout;