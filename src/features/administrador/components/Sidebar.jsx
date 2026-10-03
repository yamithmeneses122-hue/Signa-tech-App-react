import { useLocation, Link } from 'react-router-dom';

const NAV_LINKS = [
    { href: '/inicio_admin', icon: 'fa-solid fa-chart-pie', label: 'Panel Global' },
    { href: '/gestion_usuarios', icon: 'fa-solid fa-users-gear', label: 'Gestión Usuarios' },
    { href: '/gestion_roles', icon: 'fa-solid fa-shield-halved', label: 'Roles y Permisos' },
    { href: '/diccionario_admin', icon: 'fa-solid fa-book-bookmark', label: 'Diccionario LSC' },
    { href: '/aprobacion_senas', icon: 'fa-solid fa-circle-check', label: 'Aprobación Señas' },
    { href: '/configuracion_admin', icon: 'fa-solid fa-sliders', label: 'Configuración' },
];

function Sidebar({ menuAbierto, onClose }) {
    const location = useLocation();

    const confirmarLogout = (event) => {
        if (!window.confirm('¿Desea cerrar la sesión administrativa?')) event.preventDefault();
    };

    return (
        <>
            {menuAbierto && (
                <button
                    type="button"
                    className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                    onClick={onClose}
                    aria-label="Cerrar menú de navegación"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[280px] flex-col overflow-hidden border-r border-[#1a2030] bg-[#050811] px-3.5 py-7 transition-transform duration-300 theme-light:border-slate-300 theme-light:bg-slate-200 ${
                    menuAbierto ? 'translate-x-0 shadow-2xl shadow-black/60' : '-translate-x-full lg:translate-x-0'
                }`}
                id="menu-lateral"
                aria-label="Menú de navegación"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="mb-7 text-center">
                    <h2 className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent">SIGNA-TECH</h2>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-300">Panel Administrador</p>
                </header>

                <nav className="mb-4 flex-1 overflow-y-auto pr-1" aria-label="Secciones del panel">
                    <ul className="m-0 list-none space-y-1 p-0" role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                                        location.pathname === link.href
                                            ? 'border-cyan-400/20 bg-cyan-400/10 font-semibold text-cyan-300'
                                            : 'border-transparent text-slate-400 hover:border-[#2a3550] hover:bg-white/5 hover:text-white theme-light:text-slate-700 theme-light:hover:border-slate-300 theme-light:hover:bg-white'
                                    }`}
                                    aria-current={location.pathname === link.href ? 'page' : undefined}
                                >
                                    <i className={`${link.icon} w-5 shrink-0 text-center`} aria-hidden="true" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="mt-auto border-t border-[#1a2030] pt-4 theme-light:border-slate-300">
                    <Link
                        to="/login"
                        className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-3 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-200"
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

export default Sidebar;
