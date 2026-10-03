import Sidebar from '../../../features/administrador/components/Sidebar';
import PageHeader from '../../Interpreter/Componentes/PageHeader';
import { useSidebar } from './useSidebar';
import { ToastRegion } from '../../../Hooks/useToast';

function AdminLayout({ title, description, icon, toasts = [], children }) {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();

    return (
        <section className="flex min-h-screen bg-[#03050d] font-sans text-white theme-light:bg-slate-100 theme-light:text-slate-900">
            <button
                type="button"
                className="fixed left-4 top-4 z-[60] flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#1a2030] bg-[#080c18] text-cyan-300 lg:hidden"
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

            <main className="min-h-screen w-full px-4 pb-10 pt-20 sm:px-6 lg:ml-[280px] lg:w-[calc(100%_-_280px)] lg:px-10 lg:py-12">
                <PageHeader title={title} description={description} icon={icon} appearance="tailwind" eyebrow={null} />
                <section className="mx-auto w-full max-w-6xl">
                    {children}
                </section>
            </main>
            <ToastRegion toasts={toasts} />
        </section>
    );
}

export default AdminLayout;
