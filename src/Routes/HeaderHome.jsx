import { Outlet } from "react-router-dom";
import HeaderHome from "../components/shared/HeaderHome.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function HeaderHomeLayout() {
    return (
        <section className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,204,255,.12),transparent_30%),linear-gradient(180deg,#0c1216,#141b1f)] font-['Montserrat',sans-serif] text-white">
            <HeaderHome />
            <section className="pt-[68px]"><Outlet /></section>
            <Footer />
        </section>
    );
}