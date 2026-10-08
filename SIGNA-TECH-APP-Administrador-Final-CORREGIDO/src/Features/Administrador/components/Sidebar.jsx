import { useLocation, Link } from 'react-router-dom';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

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
                className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[280px] flex-col overflow-hidden border-r border-slate-800 bg-slate-900 px-3.5 py-7 text-slate-200 shadow-2xl transition-transform duration-300 theme-light:border-slate-300 theme-light:bg-slate-200 theme-light:text-slate-800 ${
                    menuAbierto ? 'translate-x-0 shadow-2xl shadow-black/60' : '-translate-x-full lg:translate-x-0'
                }`}
                id="menu-lateral"
                aria-label="Menú de navegación"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="mb-7 text-center">
                    <h2 className="font-['Montserrat'] text-xl font-bold tracking-wider text-white theme-light:text-slate-900">SIGNA-TECH</h2>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-400">Panel Administrador</p>
                </header>

                <nav className="mb-4 flex-1 overflow-y-auto pr-1" aria-label="Secciones del panel">
                    <ul className="m-0 list-none space-y-1 p-0" role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    onClick={onClose}
                                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                                        location.pathname === link.to
                                            ? 'border-cyan-400/50 bg-cyan-900/40 font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] theme-light:border-cyan-300 theme-light:bg-cyan-50 theme-light:text-cyan-800 theme-light:shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                                            : 'border-transparent text-slate-300 hover:border-cyan-400/20 hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.15)] theme-light:text-slate-700 theme-light:hover:border-slate-300 theme-light:hover:bg-white theme-light:hover:shadow-none'
                                    }`}
                                    aria-current={location.pathname === link.to ? 'page' : undefined}
                                >
                                    <i className={`${link.icon} w-5 shrink-0 text-center text-cyan-400 transition-colors group-hover:text-cyan-300`} aria-hidden="true" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="border-t border-slate-800 p-4 theme-light:border-slate-300">
                    <Link
                        to="/"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-300 transition-all hover:bg-rose-500/20 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] theme-light:border-rose-200 theme-light:bg-rose-50 theme-light:text-rose-600 theme-light:hover:bg-rose-100 theme-light:hover:shadow-[0_0_10px_rgba(244,63,94,0.2)]"
                        onClick={(e) => {
                            if (!window.confirm('¿Desea cerrar la sesión de administrador?')) {
                                e.preventDefault();
                                return;
                            }

                            sessionStorage.removeItem('usuario');
                            localStorage.removeItem('usuario');
                        }}
                    >
                        <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-rose-400" aria-hidden="true" />
                        <span>Cerrar Sesión</span>
                    </Link>
                </footer>
            </aside>
        </>
    );
}

export default Sidebar;
