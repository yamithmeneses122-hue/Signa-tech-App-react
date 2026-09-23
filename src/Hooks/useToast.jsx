import { useState, useCallback } from 'react';

let _id = 0;

export function useToast() {
    const [toasts, setToasts] = useState([]);

    const toast = useCallback((mensaje, tipo = 'exito') => {
        const id = ++_id;
        setToasts((prev) => [...prev, { id, mensaje, tipo }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    }, []);

    return { toasts, toast };
}

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
