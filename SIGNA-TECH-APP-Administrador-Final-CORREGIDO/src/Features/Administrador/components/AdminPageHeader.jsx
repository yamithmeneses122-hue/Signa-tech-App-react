function AdminPageHeader({ title, description, action, icon, eyebrow }) {
    return (
        <header className="mx-auto mb-7 flex w-full max-w-6xl flex-col items-start justify-between gap-4 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur md:flex-row md:items-center theme-light:border-slate-300 theme-light:bg-gradient-to-br theme-light:from-white theme-light:via-white theme-light:to-cyan-50 theme-light:shadow-lg">
            <section className="max-w-3xl">
                <p className="text-[11px] font-extrabold tracking-[0.18em] text-cyan-400 theme-light:text-cyan-700">
                    {eyebrow || 'MÓDULO ADMINISTRADOR'}
                </p>
                <h1 className="mt-2 flex items-center gap-3 text-3xl font-black tracking-tight text-white theme-light:text-slate-900 sm:text-4xl">
                    {icon && (
                        <i
                            className={`${icon} text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.35)] theme-light:text-cyan-700 theme-light:drop-shadow-none`}
                            aria-hidden="true"
                        />
                    )}
                    {title}
                </h1>
                {description && (
                    <p className="mt-2 max-w-2xl text-sm text-slate-300 theme-light:text-slate-600 md:text-base">
                        {description}
                    </p>
                )}
            </section>
            {action && <section className="flex gap-2">{action}</section>}
        </header>
    );
}

export default AdminPageHeader;
