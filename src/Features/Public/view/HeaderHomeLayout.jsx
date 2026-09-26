import { Outlet } from "react-router-dom";
import HeaderHome from "../../../components/shared/HeaderHome.jsx";
import Footer from "../../../components/shared/Footer.jsx";

export default function HeaderHomeLayout() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0c1216] font-['Montserrat',sans-serif] text-white">
            <HeaderHome />
            <main className="pt-[68px]"><Outlet /></main>
            <Footer />
        </div>
    );
}