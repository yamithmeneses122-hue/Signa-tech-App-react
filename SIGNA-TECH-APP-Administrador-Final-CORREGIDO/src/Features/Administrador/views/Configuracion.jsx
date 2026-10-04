import { useState, useEffect, useRef } from 'react';
import AdminCardHeader from '../components/AdminCardHeader';
import AdminLayout from '../components/AdminLayout';
import { adminStyles } from '../components/adminStyles';
import { useToast } from '../../../Hooks/useToastHook';

const Configuracion = () => {
    const { toasts, toast } = useToast();
    const [tema, setTema] = useState(localStorage.getItem('tema-sinatex-glasses') || 'oscuro');
    const fileInputRef = useRef(null);

    useEffect(() => {
        document.documentElement.dataset.theme = tema === 'claro' ? 'light' : 'dark';
        localStorage.setItem('tema-sinatex-glasses', tema);
    }, [tema]);

    const handleBackupExport = () => {
        toast('Generando volcado de base de datos... Descarga iniciada.', 'info');
    };

    const triggerRestore = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            toast(`Archivo "${e.target.files[0].name}" cargado. Iniciando restauración...`, 'alerta');
        }
    };

    const handleAIUpdate = (e) => {
        e.preventDefault();
        toast('Parámetros de enlace de IA actualizados con éxito.', 'exito');
    };

    const guardarApariencia = (e) => {
        e.preventDefault();
        toast('Configuración de apariencia guardada.', 'exito');
    };

    const limpiarCache = () => {
        if (!window.confirm('¿Purgar los buffers de almacenamiento temporal? Esta acción no altera el diccionario.')) return;
        toast('Buffer y memoria caché del servidor limpiados.', 'exito');
    };

    return (
        <AdminLayout
            title="Configuración del Sistema"
            description="Gobernanza técnica. Administra los respaldos de las bases de datos, los canales de la IA y el mantenimiento del servidor local."
            icon="fa-solid fa-sliders"
            toasts={toasts}
        >

                <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8">
                    <article className={`${adminStyles.card} ${adminStyles.cardBlue}`}>
                        <AdminCardHeader icon="fa-solid fa-database" title="Copias de Seguridad y Restauración" description="Exporta el estado lógico del diccionario LSC y el padrón de usuarios para salvaguardar la información." />

                        <form className={adminStyles.form} onSubmit={(e) => e.preventDefault()}>
                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Formato de Salida Estándar</legend>
                                <select className={adminStyles.input} defaultValue="sql">
                                    <option value="sql">Estructura SQL Pura (*.sql Dumps)</option>
                                    <option value="json">Esquema de Intercambio JSON (*.json)</option>
                                </select>
                            </fieldset>

                            <footer className="flex flex-wrap gap-3">
                                <button type="button" className={`${adminStyles.button} ${adminStyles.primaryButton} flex-1`} onClick={handleBackupExport}>
                                    <i className="fa-solid fa-download" aria-hidden="true" /> Exportar Base de Datos
                                </button>
                                <button type="button" className={`${adminStyles.button} ${adminStyles.secondaryButton} flex-1`} onClick={triggerRestore}>
                                    <i className="fa-solid fa-upload" aria-hidden="true" /> Restaurar Respaldo
                                </button>
                                <input className="hidden" type="file" ref={fileInputRef} accept=".sql,.json" onChange={handleFileChange} aria-hidden="true" />
                            </footer>
                        </form>
                    </article>

                    <article className={`${adminStyles.card} ${adminStyles.cardTeal}`}>
                        <AdminCardHeader icon="fa-solid fa-brain" title="Conectividad Core e Inteligencia Artificial" description="Calibra los límites de comunicación del traductor en la nube y la latencia del sensor de las gafas." teal />

                        <form className={adminStyles.form} onSubmit={handleAIUpdate}>
                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Servidor del Modelo de Redes Neuronales</legend>
                                <select className={adminStyles.input} defaultValue="local">
                                    <option value="local">Modelo de Interpretación Local (Gafas Integrado)</option>
                                    <option value="cloud-api">API de Alta Precisión (Streaming en la Nube)</option>
                                </select>
                            </fieldset>

                            <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                                <fieldset className={adminStyles.fieldset}>
                                    <legend className={adminStyles.legend}>Tiempo Límite de Respuesta (Timeout)</legend>
                                    <select className={adminStyles.input} defaultValue="3000">
                                        <option value="1500">Ultra Rápido (1500ms)</option>
                                        <option value="3000">Estándar Tolerante (3000ms)</option>
                                    </select>
                                </fieldset>
                                <fieldset className={adminStyles.fieldset}>
                                    <legend className={adminStyles.legend}>Tasa de Refresco de Cuadros (FPS)</legend>
                                    <select className={adminStyles.input} defaultValue="60">
                                        <option value="30">Muestreo Estándar (30 FPS)</option>
                                        <option value="60">Muestreo Cinemático Fluido (60 FPS)</option>
                                    </select>
                                </fieldset>
                            </section>

                            <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton}`}>
                                <i className="fa-solid fa-satellite-dish" aria-hidden="true" /> Actualizar Canales de IA
                            </button>
                        </form>
                    </article>

                    <article className={`${adminStyles.card} ${adminStyles.cardBlue}`}>
                        <AdminCardHeader icon="fa-solid fa-circle-half-stroke" title="Mantenimiento Técnico e Interfaz" description="Purga los registros acumulados del servidor y personaliza la apariencia visual del panel administrativo." />

                        <form className={adminStyles.form} onSubmit={guardarApariencia}>
                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Modo de Contraste y Apariencia</legend>
                                <select className={adminStyles.input} value={tema} onChange={(e) => setTema(e.target.value)}>
                                    <option value="oscuro">Modo Oscuro (Predeterminado)</option>
                                    <option value="claro">Modo Claro (Contraste Alto)</option>
                                </select>
                            </fieldset>

                            <footer className="flex flex-wrap gap-3">
                                <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton} flex-1`}>
                                    <i className="fa-solid fa-floppy-disk" aria-hidden="true" /> Guardar Apariencia
                                </button>
                                <button type="button" className={`${adminStyles.button} ${adminStyles.dangerButton} flex-1`} onClick={limpiarCache}>
                                    <i className="fa-solid fa-broom" aria-hidden="true" /> Limpiar Caché de Logs
                                </button>
                            </footer>
                        </form>
                    </article>
                </section>
        </AdminLayout>
    );
};

export default Configuracion;
