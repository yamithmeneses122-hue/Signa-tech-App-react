import React, { useState, useEffect, useRef } from 'react';
import '../../styles/configuracion_admin.css';

const Configuracion = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [tema, setTema] = useState(localStorage.getItem('tema-sinatex-glasses') || 'oscuro');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (tema === 'claro') {
            document.body.classList.add('tema-claro');
        } else {
            document.body.classList.remove('tema-claro');
        }
        localStorage.setItem('tema-sinatex-glasses', tema);
    }, [tema]);

    useEffect(() => {
        const cerrarMenuAfuera = () => {
            if (menuAbierto) setMenuAbierto(false);
        };
        document.addEventListener('click', cerrarMenuAfuera);
        return () => document.removeEventListener('click', cerrarMenuAfuera);
    }, [menuAbierto]);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setMenuAbierto(!menuAbierto);
    };

    const confirmarLogout = (e) => {
        if (!window.confirm('¿Desea cerrar la sesión?')) e.preventDefault();
    };

    const handleBackupExport = () => {
        alert('Generando volcado de base de datos... Descarga iniciada.');
    };

    const triggerRestore = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            alert(`Archivo ${e.target.files[0].name} cargado. Iniciando restauración...`);
        }
    };

    const handleAIUpdate = (e) => {
        e.preventDefault();
        alert('¡Parámetros de enlace actualizados con éxito!');
    };

    const guardarApariencia = (e) => {
        e.preventDefault();
        alert("¡Configuración del sistema guardada con éxito!");
    };

    const limpiarCache = () => {
        if(window.confirm('¿Desea purgar los buffers de almacenamiento temporal? Esta acción no altera el diccionario.')){
            alert('¡Buffer y memoria caché del servidor limpiados!');
        }
    };

    return (
        <section className="pagina-completa">
            <aside className={`menu-lado ${menuAbierto ? 'menu-abierto' : ''}`} id="menu-lateral" onClick={(e) => e.stopPropagation()}>
                <button className={`btn-hamburguesa ${menuAbierto ? 'X-activa' : ''}`} aria-label="abrir menu" onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </button>
                <h2 className="logo">SIGNA-TECH</h2>
                <p className="rol">PANEL ADMINISTRADOR</p>
                <nav className="navegacion-scroll">
                    <ul>
                        <li><a href="/inicio_admin"><i className="fa-solid fa-chart-pie"></i> Panel Global</a></li>
                        <li><a href="/gestion_usuarios"><i className="fa-solid fa-users-gear"></i> Gestión Usuarios</a></li>
                        <li><a href="/gestion_roles"><i className="fa-solid fa-shield-halved"></i> Roles y Permisos</a></li>
                        <li><a href="/diccionario"><i className="fa-solid fa-book-bookmark"></i> Diccionario LSC</a></li>
                        <li><a href="/aprobacion_senas"><i className="fa-solid fa-circle-check"></i> Aprobación Señas</a></li>
                        <li><a href="/configuracion" className="active"><i className="fa-solid fa-sliders"></i> Configuración</a></li>
                    </ul>
                </nav>
                <footer className="caja-logout-fija">
                    <a href="/login" id="btn-logout" title="Cerrar Sesión" onClick={confirmarLogout}>
                        <i className="fa-solid fa-door-open"></i> Cerrar Sesión
                    </a>
                </footer>
            </aside>

            <main className="contenido-centro">
                <header className="bloque-encabezado">
                    <h1 className="titulo-pagina">Configuración del Sistema</h1>
                    <p className="subtitulo-pagina">Gobernanza técnica. Administra los respaldos de las bases de datos, los canales de la IA y el mantenimiento del servidor local.</p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-database"></i></span>
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

                            <footer className="bloque-controles-internos" style={{ marginTop: '5px' }}>
                                <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={handleBackupExport}>
                                    <i className="fa-solid fa-download"></i> Exportar Base de Datos
                                </button>
                                <button type="button" className="btn-operativo-modulo btn-secundario" onClick={triggerRestore}>
                                    <i className="fa-solid fa-upload"></i> Restaurar Respaldo
                                </button>
                                <input type="file" ref={fileInputRef} accept=".sql, .json" style={{ display: 'none' }} onChange={handleFileChange} />
                            </footer>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-brain"></i></span>
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

                            <button type="submit" className="btn-operativo-modulo btn-confirmar">Actualizar Canales de IA</button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-circle-half-stroke"></i></span>
                            <section className="info-modulo">
                                <h3>Mantenimiento Técnico e Interfaz</h3>
                                <p>Purga los registros acumulados del servidor y personaliza la apariencia visual del panel administrativo.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={guardarApariencia}>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Modo de Contraste y Apariencia</legend>
                                <select value={tema} onChange={(e) => setTema(e.target.value)}>
                                    <option value="oscuro">Modo Oscuro (Predeterminado Cyberpunk)</option>
                                    <option value="claro">Modo Claro (Contraste Alto)</option>
                                </select>
                            </fieldset>

                            <footer className="bloque-controles-internos" style={{ marginTop: '5px' }}>
                                <button type="submit" className="btn-operativo-modulo btn-confirmar">Guardar Apariencia</button>
                                <button type="button" className="btn-operativo-modulo btn-danger" onClick={limpiarCache}>
                                    <i className="fa-solid fa-broom"></i> Limpiar Caché de Logs
                                </button>
                            </footer>
                        </form>
                    </article>
                </section>
            </main>
        </section>
    );
};

export default Configuracion;