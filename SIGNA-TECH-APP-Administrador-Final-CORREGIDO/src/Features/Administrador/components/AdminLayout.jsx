import Sidebar from './Sidebar';
import AdminPageHeader from './AdminPageHeader';
import { useSidebar } from './useSidebar';
import { ToastRegion } from '../../../Hooks/useToast';

function AdminLayout({ title, description, icon, toasts = [], children }) {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();

    return (
        <section className="relative min-h-screen bg-slate-950 font-sans text-slate-100 theme-light:bg-slate-100 theme-light:text-slate-900">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl theme-light:opacity-40" />
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl theme-light:opacity-40" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl theme-light:opacity-40" />
            </div>
            <button
                type="button"
                className="fixed left-4 top-4 z-[60] flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 text-cyan-300 shadow-lg backdrop-blur transition-colors hover:border-cyan-400/50 hover:bg-slate-800 lg:hidden"
                aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuAbierto}
                aria-controls="menu-lateral"
                onClick={toggleMenu}
            >
                <span className={`h-0.5 w-5 rounded bg-current transition ${menuAbierto ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 w-5 rounded bg-current transition ${menuAbierto ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-5 rounded bg-current transition ${menuAbierto ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>

            <Sidebar menuAbierto={menuAbierto} onClose={cerrar} />

            <main className="relative z-10 min-h-screen w-full px-4 pb-10 pt-20 sm:px-6 lg:ml-[280px] lg:w-[calc(100%_-_280px)] lg:px-10 lg:py-12">
                <AdminPageHeader title={title} description={description} icon={icon} />
                <section className="mx-auto w-full max-w-6xl">
                    {children}
                </section>
            </main>
            <ToastRegion toasts={toasts} />
        </section>
    );
}

export default AdminLayout;
