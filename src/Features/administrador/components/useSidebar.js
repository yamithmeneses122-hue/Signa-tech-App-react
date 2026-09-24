import { useCallback, useEffect, useState } from 'react';

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
