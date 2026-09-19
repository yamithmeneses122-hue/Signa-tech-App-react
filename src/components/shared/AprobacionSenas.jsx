import React, { useState, useEffect } from 'react';
import '../../styles/aprobacion_senas_admin.css';

const AprobacionSenas = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const [nuevasSenas, setNuevasSenas] = useState([
        { id: 'n1', concepto: 'Servidor', gesticulacion: 'Manos paralelas moviéndose verticalmente simulando racks físicos rígidos.', categoria: 'Técnico', claseCategoria: 'tecnico', autor: 'Katherin Gómez' }
    ]);

    const [correcciones, setCorrecciones] = useState([
        { id: 'c1', concepto: 'Software', icono: 'fa-solid fa-laptop', autor: 'Dayanna Popayán', actual: 'Configuración de la mano dominante en forma de pinza tocando la sien de manera repetitiva.', propuesta: 'Palma extendida no dominante actúa como pantalla, mientras la mano dominante dibuja líneas lógicas fluidas descendentes.' }
    ]);

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

    const gestionarNuevaSena = (id, estadoDestino) => {
        if (window.confirm(`¿Confirmar acción administrativa: "${estadoDestino}" para este registro?`)) {
            setNuevasSenas(nuevasSenas.filter(sena => sena.id !== id));
            alert(`[AUDITORÍA]: Operación ejecutada con éxito. Estado: ${estadoDestino}`);
        }
    };

    const gestionarCorreccion = (id, estadoDestino) => {
        if (window.confirm(`¿Confirmar acción administrativa: "${estadoDestino}" para este registro?`)) {
            setCorrecciones(correcciones.filter(corr => corr.id !== id));
            alert(`[AUDITORÍA]: Operación ejecutada con éxito. Estado: ${estadoDestino}`);
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
                        <li><a href="/aprobacion_senas" className="active"><i className="fa-solid fa-circle-check"></i> Aprobación Señas</a></li>
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
                    <h1 className="titulo-pagina">Módulo de Auditoría Léxica</h1>
                    <p className="subtitulo-pagina">Cola de moderación en tiempo real. Examina y valida las nuevas incorporaciones o correcciones propuestas por los intérpretes.</p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-hands-asl-interpreting"></i></span>
                            <section className="info-modulo">
                                <h3>Nuevas Señas Solicitadas</h3>
                                <p>Términos inéditos cargados que requieren autorización para ingresar al diccionario oficial de la IA.</p>
                            </section>
                        </header>

                        <ul className="lista-gestion-cuentas">
                            {nuevasSenas.map((sena) => (
                                <li key={sena.id} className="item-solicitud-aprobacion">
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">Concepto: {sena.concepto} <span>(Nuevo)</span></strong>
                                        <span className="correo-usuario-tabla"><strong>Gesticulación:</strong> {sena.gesticulacion}</span>
                                        <nav className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${sena.claseCategoria}`}>{sena.categoria}</span>
                                            <span className="badge-autor-interprete">Enviado por: {sena.autor}</span>
                                        </nav>
                                    </section>
                                    <footer className="acciones-aprobacion-bloque">
                                        <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={() => gestionarNuevaSena(sena.id, 'Aprobado')}>
                                            <i className="fa-solid fa-check"></i> Aprobar
                                        </button>
                                        <button type="button" className="btn-operativo-modulo btn-rechazar" onClick={() => gestionarNuevaSena(sena.id, 'Rechazado')}>
                                            <i className="fa-solid fa-xmark"></i> Rechazar
                                        </button>
                                    </footer>
                                </li>
                            ))}
                            {nuevasSenas.length === 0 && (
                                <p style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}>No hay solicitudes pendientes.</p>
                            )}
                        </ul>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-scale-balanced"></i></span>
                            <section className="info-modulo">
                                <h3>Correcciones y Mutaciones Léxicas</h3>
                                <p>Modificaciones sugeridas a conceptos ya públicos para optimizar la precisión lingüística de la comunidad sorda.</p>
                            </section>
                        </header>

                        <ul className="lista-gestion-cuentas">
                            {correcciones.map((corr) => (
                                <li key={corr.id} className="item-solicitud-aprobacion c-columna">
                                    <header className="encabezado-fila-interna">
                                        <strong className="nombre-usuario-tabla">Concepto en Mutación: {corr.concepto} <i className={corr.icono}></i></strong>
                                        <span className="badge-autor-interprete">Propuesto por: {corr.autor}</span>
                                    </header>

                                    <section className="contenedor-comparador-lexico">
                                        <article className="caja-estado-lexico anterior">
                                            <strong className="titulo-estado-caja">Definición Actual Activa</strong>
                                            <p>{corr.actual}</p>
                                        </article>

                                        <article className="caja-estado-lexico propuesta">
                                            <strong className="titulo-estado-caja">Modificación Propuesta</strong>
                                            <p>{corr.propuesta}</p>
                                        </article>
                                    </section>

                                    <footer className="acciones-aprobacion-bloque extendido">
                                        <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={() => gestionarCorreccion(corr.id, 'Mutación Aplicada')}>
                                            <i className="fa-solid fa-code-merge"></i> Validar e Intercambiar
                                        </button>
                                        <button type="button" className="btn-operativo-modulo btn-rechazar" onClick={() => gestionarCorreccion(corr.id, 'Mutación Rechazada')}>
                                            <i className="fa-solid fa-trash-arrow-up"></i> Descartar Sugerencia
                                        </button>
                                    </footer>
                                </li>
                            ))}
                            {correcciones.length === 0 && (
                                <p style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}>No hay correcciones pendientes.</p>
                            )}
                        </ul>
                    </article>
                </section>
            </main>
        </section>
    );
};

export default AprobacionSenas;