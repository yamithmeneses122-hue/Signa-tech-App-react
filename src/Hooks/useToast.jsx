const ICONOS = {
    exito: 'fa-solid fa-circle-check',
    alerta: 'fa-solid fa-triangle-exclamation',
    error: 'fa-solid fa-circle-xmark',
    info: 'fa-solid fa-circle-info',
};

export function ToastRegion({ toasts }) {
    if (!toasts.length) return null;
    return (
        <output className="toast-region" aria-live="polite" aria-atomic="false">
            {toasts.map((t) => (
                <p key={t.id} className={`toast ${t.tipo}`} role="status">
                    <i className={ICONOS[t.tipo]} aria-hidden="true" />
                    {t.mensaje}
                </p>
            ))}
        </output>
    );
}
