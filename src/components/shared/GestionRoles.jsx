import React, { useState, useEffect } from 'react';
import '../../styles/gestion_de_roles_admin.css';

const GestionRoles = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    
    const [permisos, setPermisos] = useState({
        adminGobernanza: true,
        adminAprobacion: true,
        adminLogs: true,
        intRegistro: true,
        intCorrecciones: true,
        intAutoAprobacion: false,
        opModulos: true,
        opDiccionario: true,
        opBypass: false
    });

    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema-sinatex-glasses') || 'oscuro';
        if (temaGuardado === 'claro') {
            document.body.classList.add('tema-claro');
        }

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

    const handleToggle = (llave) => {
        setPermisos(prev => ({
            ...prev,
            [llave]: !prev[llave]
        }));
    };

    const guardarPermisos = (e, rol) => {
        e.preventDefault();
        alert(`¡Privilegios de ${rol} actualizados exitosamente en SIGNA-TECH!`);
    };

    return (
        <section className="pagina-completa">
            <aside className={`menu-lado ${menuAbierto ? 'menu-abierto' : ''}`} id="menu-lateral" onClick={(e) => e.stopPropagation()}>
                <button className={`btn-hamburguesa ${menuAbierto ? 'X-activa' : ''}`} id="comp-hamburguesa" aria-label="abrir menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <h2 className="logo">SIGNA-TECH</h2>
                <p className="rol">PANEL ADMINISTRADOR</p>
                
                <nav className="navegacion-scroll">
                    <ul>
                        <li><a href="/inicio_admin"><i className="fa-solid fa-chart-pie"></i> Panel Global</a></li>
                        <li><a href="/gestion_usuarios"><i className="fa-solid fa-users-gear"></i> Gestión Usuarios</a></li>
                        <li><a href="/gestion_roles" className="active"><i className="fa-solid fa-shield-halved"></i> Roles y Permisos</a></li>
                        <li><a href="/diccionario"><i className="fa-solid fa-book-bookmark"></i> Diccionario LSC</a></li>
                        <li><a href="/aprobacion_senas"><i className="fa-solid fa-circle-check"></i> Aprobación Señas</a></li>
                        <li><a href="/configuracion"><i className="fa-solid fa-sliders"></i> Configuración</a></li>
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
                    <h1 className="titulo-pagina">Matriz de Roles y Permisos</h1>
                    <p className="subtitulo-pagina">Modifica las capacidades de acceso del personal de SIGNA-TECH. Los cambios alteran los tokens de seguridad al instante.</p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-crown"></i></span>
                            <section className="info-modulo">
                                <h3>Rol: Administrador Global</h3>
                                <p>Nivel supremo de acceso. Posee gobernanza total sobre las bases de datos y la seguridad de la infraestructura.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Administración')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles">
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Gobernanza de Cuentas</strong>
                                            <p>Crear, editar, auditar y desactivar credenciales de cualquier usuario.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.adminGobernanza} disabled />
                                            <span className="slider-visual-switch bloqueado"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Aprobación Léxica LSC</strong>
                                            <p>Aprobar nuevas señas o validar correcciones enviadas por el intérprete.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.adminAprobacion} onChange={() => handleToggle('adminAprobacion')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Acceso a Logs de Auditoría</strong>
                                            <p>Visualizar el registro en bruto de operaciones de la base de datos y sistema.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.adminLogs} onChange={() => handleToggle('adminLogs')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">Guardar Permisos Admin</button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-hands-asl-interpreting"></i></span>
                            <section className="info-modulo">
                                <h3>Rol: Intérprete LSC</h3>
                                <p>Encargado de la fidelidad y curaduría lingüística del diccionario multimedia de señas colombianas.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Intérprete LSC')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles">
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Registro y Carga Multimedia</strong>
                                            <p>Subir nuevos videos, imágenes o descripciones cinemáticas al catálogo.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.intRegistro} onChange={() => handleToggle('intRegistro')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Proponer Correcciones de Señas</strong>
                                            <p>Modificar y sugerir mutaciones o actualizaciones a señas que ya estén públicas.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.intCorrecciones} onChange={() => handleToggle('intCorrecciones')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Auto-Aprobación Directa</strong>
                                            <p>Publicar contenido en el diccionario sin pasar por la auditoría del administrador.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.intAutoAprobacion} onChange={() => handleToggle('intAutoAprobacion')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">Guardar Permisos Intérprete</button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-desktop"></i></span>
                            <section className="info-modulo">
                                <h3>Rol: Operador de Sistema</h3>
                                <p>Usuario final operativo en territorio. Controla la captura ambiental, el hardware periférico y el visor de traducción.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Operador de Sistema')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles">
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Uso de Módulos de Conversión</strong>
                                            <p>Acceso completo a las vistas de Texto a Voz, Voz a Texto y Detección de Cámara.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.opModulos} onChange={() => handleToggle('opModulos')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Consulta de Diccionario Nativo</strong>
                                            <p>Visualizar el glosario de términos LSC de manera interna para soporte.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.opDiccionario} onChange={() => handleToggle('opDiccionario')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                    <li className="item-permiso-fila">
                                        <section className="texto-permiso-info">
                                            <strong>Bypass de Configuración Avanzada</strong>
                                            <p>Alterar los periféricos de entrada/salida USB o los niveles de optimización de la IA.</p>
                                        </section>
                                        <label className="switch-interruptor-neon">
                                            <input type="checkbox" checked={permisos.opBypass} onChange={() => handleToggle('opBypass')} />
                                            <span className="slider-visual-switch"></span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">Guardar Permisos Operador</button>
                        </form>
                    </article>

                </section>
            </main>
        </section>
    );
};

export default GestionRoles;