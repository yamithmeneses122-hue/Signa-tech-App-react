import { useLocation, Link } from 'react-router-dom';

const NAV_LINKS = [
    { to: '/inicio_admin', icon: 'fa-solid fa-chart-pie', label: 'Panel Global' },
    { to: '/gestion_usuarios', icon: 'fa-solid fa-users-gear', label: 'Gestión Usuarios' },
    { to: '/gestion_roles', icon: 'fa-solid fa-shield-halved', label: 'Roles y Permisos' },
    { to: '/diccionario_admin', icon: 'fa-solid fa-book-bookmark', label: 'Diccionario LSC' },
    { to: '/aprobacion_senas', icon: 'fa-solid fa-circle-check', label: 'Aprobación Señas' },
    { to: '/configuracion_admin', icon: 'fa-solid fa-sliders', label: 'Configuración' },
];

function Sidebar({ menuAbierto, onClose }) {
    const location = useLocation();

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
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                                        location.pathname === link.to
                                            ? 'border-cyan-400/20 bg-cyan-400/10 font-semibold text-cyan-300'
                                            : 'border-transparent text-slate-400 hover:border-[#2a3550] hover:bg-white/5 hover:text-white theme-light:text-slate-700 theme-light:hover:border-slate-300 theme-light:hover:bg-white'
                                    }`}
                                    aria-current={location.pathname === link.to ? 'page' : undefined}
                                >
                                    <i className={`${link.icon} w-5 shrink-0 text-center`} aria-hidden="true" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;
