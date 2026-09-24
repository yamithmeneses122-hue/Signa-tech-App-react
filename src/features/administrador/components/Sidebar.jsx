import { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../../styles/index.css';

const NAV_LINKS = [
    { href: '/inicio_admin', icon: 'fa-solid fa-chart-pie', label: 'Panel Global' },
    { href: '/gestion_usuarios', icon: 'fa-solid fa-users-gear', label: 'Gestión Usuarios' },
    { href: '/gestion_roles', icon: 'fa-solid fa-shield-halved', label: 'Roles y Permisos' },
    { href: '/diccionario', icon: 'fa-solid fa-book-bookmark', label: 'Diccionario LSC' },
    { href: '/aprobacion_senas', icon: 'fa-solid fa-circle-check', label: 'Aprobación Señas' },
    { href: '/configuracion', icon: 'fa-solid fa-sliders', label: 'Configuración' },
];

function Sidebar({ menuAbierto, onClose }) {
    const location = useLocation();

    const confirmarLogout = (e) => {
        if (!window.confirm('¿Desea cerrar la sesión administrativa?')) {
            e.preventDefault();
        }
    };

    return (
        <>
            {menuAbierto && (
                <div
                    className="sidebar-overlay"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`menu-lado${menuAbierto ? ' menu-abierto' : ''}`}
                id="menu-lateral"
                aria-label="Menú de navegación"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="sidebar-brand">
                    <h2>SIGNA-TECH</h2>
                    <p>Panel Administrador</p>
                </header>

                <nav className="navegacion-scroll" aria-label="Secciones del panel">
                    <ul role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link to={link.href}
                                    className={location.pathname === link.href ? 'active' : ''}
                                    aria-current={location.pathname === link.href ? 'page' : undefined}
                                >
                                    <i className={link.icon} aria-hidden="true" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="sidebar-footer">
                    <Link to="/login"
                        className="btn-logout"
                        onClick={confirmarLogout}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true" />
                        Cerrar Sesión
                    </Link>
                </footer>
            </aside>
        </>
    );
}

export function useSidebar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema-sinatex-glasses') || 'oscuro';
        if (temaGuardado === 'claro') document.body.classList.add('tema-claro');
        else document.body.classList.remove('tema-claro');
    }, []);

    const toggleMenu = useCallback((e) => {
        e.stopPropagation();
        setMenuAbierto((prev) => !prev);
    }, []);

    const cerrar = useCallback(() => setMenuAbierto(false), []);

    return { menuAbierto, toggleMenu, cerrar };
}

export default Sidebar;
