import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function InterpreterLayout() {
    return (
        <section className="interpreter-module">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="boton-menu">&#9776;</label>

            <section className="pagina-completa">
                <Sidebar />

                <main className="contenido-centro">
                    <Outlet />
                </main>
            </section>
        </section>
    );
}