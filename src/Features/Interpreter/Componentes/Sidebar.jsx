import { NavLink } from "react-router-dom";

const enlaces = [
    ["/interprete", "Inicio"],
    ["/interprete/validar", "Validar diccionario"],
    ["/interprete/registrar", "Registrar nuevas señas"],
    ["/interprete/corregir", "Corregir señas"],
    ["/interprete/historial", "Historial de cambios"],
    ["/interprete/estadisticas", "Estadisticas"],
    ["/interprete/perfil", "Perfil"],
];

export default function Sidebar() {
    return (
        <aside className="menu-lado">
            <header className="encabezado-menu">
                <h2>Signa Tech</h2>
                <p>Panel Interprete</p>
            </header>

            <nav>
                <ul>
                    {enlaces.map(([to, texto]) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === "/interprete"}
                                className={({ isActive }) => isActive ? "link-activo" : ""}
                            >
                                {texto}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <NavLink to="/">Cerrar sesion</NavLink>
                    </li>
                </ul>
            </nav>

            <footer className="pie-menu">
                <img src="https://i.pravatar.cc/100" alt="Carlos Cortez" />
                <article>
                    <p className="nombre-admin">Carlos Cortez</p>
                    <p className="cargo-admin">Interprete</p>
                    <span>En Linea</span>
                </article>
            </footer>
        </aside>
    );
}