import { useState, useEffect, useRef } from 'react';
import '../../../styles/index.css';
import Sidebar from '../components/Sidebar';
import { useSidebar } from '../components/useSidebar';
import { useToast } from '../../../Hooks/useToastHook';
import { ToastRegion } from '../../../Hooks/useToast';

const Configuracion = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts, toast } = useToast();
    const [tema, setTema] = useState(localStorage.getItem('tema-sinatex-glasses') || 'oscuro');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (tema === 'claro') document.body.classList.add('tema-claro');
        else document.body.classList.remove('tema-claro');
        localStorage.setItem('tema-sinatex-glasses', tema);
    }, [tema]);

    const handleBackupExport = () => {
        toast('Generando volcado de base de datos... Descarga iniciada.', 'info');
    };

    const triggerRestore = () => fileInputRef.current.click();

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
        <section className="pagina-completa">
            <button
                className={`btn-hamburguesa${menuAbierto ? ' X-activa' : ''}`}
                aria-label="Abrir menú"
                aria-expanded={menuAbierto}
                aria-controls="menu-lateral"
                onClick={toggleMenu}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </button>

            <Sidebar menuAbierto={menuAbierto} onClose={cerrar} />

            <main className="contenido-centro">
                <header className="bloque-encabezado">
                    <h1 className="titulo-pagina">
                        <i className="fa-solid fa-sliders" aria-hidden="true" />
                        Configuración del Sistema
                    </h1>
                    <p className="subtitulo-pagina">
                        Gobernanza técnica. Administra los respaldos de las bases de datos, los canales de la IA y el mantenimiento del servidor local.
                    </p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-database" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Copias de Seguridad y Restauración</h3>
                                <p>Exporta el estado lógico del diccionario LSC y el padrón de usuarios para salvaguardar la información.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => e.preventDefault()}>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Formato de Salida Estándar</legend>
                                <select defaultValue="sql">
                                    <option value="sql">Estructura SQL Pura (*.sql Dumps)</option>
                                    <option value="json">Esquema de Intercambio JSON (*.json)</option>
                                </select>
                            </fieldset>

                            <footer className="bloque-controles-internos">
                                <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={handleBackupExport}>
                                    <i className="fa-solid fa-download" aria-hidden="true" /> Exportar Base de Datos
                                </button>
                                <button type="button" className="btn-operativo-modulo btn-secundario" onClick={triggerRestore}>
                                    <i className="fa-solid fa-upload" aria-hidden="true" /> Restaurar Respaldo
                                </button>
                                <input type="file" ref={fileInputRef} accept=".sql,.json" style={{ display: 'none' }} onChange={handleFileChange} aria-hidden="true" />
                            </footer>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-brain" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Conectividad Core e Inteligencia Artificial</h3>
                                <p>Calibra los límites de comunicación del traductor en la nube y la latencia del sensor de las gafas.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={handleAIUpdate}>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Servidor del Modelo de Redes Neuronales</legend>
                                <select defaultValue="local">
                                    <option value="local">Modelo de Interpretación Local (Gafas Integrado)</option>
                                    <option value="cloud-api">API de Alta Precisión (Streaming en la Nube)</option>
                                </select>
                            </fieldset>

                            <section className="subgrupo-formulario-fila">
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Tiempo Límite de Respuesta (Timeout)</legend>
                                    <select defaultValue="3000">
                                        <option value="1500">Ultra Rápido (1500ms)</option>
                                        <option value="3000">Estándar Tolerante (3000ms)</option>
                                    </select>
                                </fieldset>
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Tasa de Refresco de Cuadros (FPS)</legend>
                                    <select defaultValue="60">
                                        <option value="30">Muestreo Estándar (30 FPS)</option>
                                        <option value="60">Muestreo Cinemático Fluido (60 FPS)</option>
                                    </select>
                                </fieldset>
                            </section>

                            <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                <i className="fa-solid fa-satellite-dish" aria-hidden="true" /> Actualizar Canales de IA
                            </button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-circle-half-stroke" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Mantenimiento Técnico e Interfaz</h3>
                                <p>Purga los registros acumulados del servidor y personaliza la apariencia visual del panel administrativo.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={guardarApariencia}>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Modo de Contraste y Apariencia</legend>
                                <select value={tema} onChange={(e) => setTema(e.target.value)}>
                                    <option value="oscuro">Modo Oscuro (Predeterminado)</option>
                                    <option value="claro">Modo Claro (Contraste Alto)</option>
                                </select>
                            </fieldset>

                            <footer className="bloque-controles-internos">
                                <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                    <i className="fa-solid fa-floppy-disk" aria-hidden="true" /> Guardar Apariencia
                                </button>
                                <button type="button" className="btn-operativo-modulo btn-danger" onClick={limpiarCache}>
                                    <i className="fa-solid fa-broom" aria-hidden="true" /> Limpiar Caché de Logs
                                </button>
                            </footer>
                        </form>
                    </article>
                </section>
            </main>

            <ToastRegion toasts={toasts} />
        </section>
    );
};

export default Configuracion;
