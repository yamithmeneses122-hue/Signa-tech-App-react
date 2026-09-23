import { useState } from 'react';
import '../../styles/index.css';
import Sidebar, { useSidebar } from './Sidebar';
import { useToast, ToastRegion } from '../../Hooks/useToast';

const AprobacionSenas = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts, toast } = useToast();

    const [nuevasSenas, setNuevasSenas] = useState([
        { id: 'n1', concepto: 'Servidor', gesticulacion: 'Manos paralelas moviéndose verticalmente simulando racks físicos rígidos.', categoria: 'Técnico', claseCategoria: 'tecnico', autor: 'Katherin Gómez' },
    ]);

    const [correcciones, setCorrecciones] = useState([
        { id: 'c1', concepto: 'Software', icono: 'fa-solid fa-laptop', autor: 'Dayanna Popayán', actual: 'Configuración de la mano dominante en forma de pinza tocando la sien de manera repetitiva.', propuesta: 'Palma extendida no dominante actúa como pantalla, mientras la mano dominante dibuja líneas lógicas fluidas descendentes.' },
    ]);

    const gestionarNuevaSena = (id, accion) => {
        if (!window.confirm(`¿Confirmar "${accion}" para este registro?`)) return;
        setNuevasSenas((prev) => prev.filter((s) => s.id !== id));
        toast(`Operación ejecutada: ${accion}.`, accion === 'Aprobado' ? 'exito' : 'alerta');
    };

    const gestionarCorreccion = (id, accion) => {
        if (!window.confirm(`¿Confirmar "${accion}" para esta corrección?`)) return;
        setCorrecciones((prev) => prev.filter((c) => c.id !== id));
        toast(`Operación ejecutada: ${accion}.`, accion.includes('Aplicada') ? 'exito' : 'alerta');
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
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                        Módulo de Auditoría Léxica
                    </h1>
                    <p className="subtitulo-pagina">
                        Cola de moderación en tiempo real. Examina y valida las nuevas incorporaciones o correcciones propuestas por los intérpretes.
                    </p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-hands-asl-interpreting" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Nuevas Señas Solicitadas</h3>
                                <p>Términos inéditos cargados que requieren autorización para ingresar al diccionario oficial de la IA.</p>
                            </section>
                        </header>

                        <ul className="lista-gestion-cuentas" role="list" aria-label="Solicitudes de nuevas señas">
                            {nuevasSenas.map((sena) => (
                                <li key={sena.id} className="item-solicitud-aprobacion">
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">
                                            Concepto: {sena.concepto} <span className="badge-estado-usuario activo">Nuevo</span>
                                        </strong>
                                        <span className="correo-usuario-tabla">
                                            <strong>Gesticulación:</strong> {sena.gesticulacion}
                                        </span>
                                        <p className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${sena.claseCategoria}`}>{sena.categoria}</span>
                                            <span className="badge-autor-interprete">Enviado por: {sena.autor}</span>
                                        </p>
                                    </section>
                                    <footer className="acciones-aprobacion-bloque">
                                        <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={() => gestionarNuevaSena(sena.id, 'Aprobado')}>
                                            <i className="fa-solid fa-check" aria-hidden="true" /> Aprobar
                                        </button>
                                        <button type="button" className="btn-operativo-modulo btn-rechazar" onClick={() => gestionarNuevaSena(sena.id, 'Rechazado')}>
                                            <i className="fa-solid fa-xmark" aria-hidden="true" /> Rechazar
                                        </button>
                                    </footer>
                                </li>
                            ))}

                            {nuevasSenas.length === 0 && (
                                <li>
                                    <p className="empty-state">
                                        <i className="fa-solid fa-inbox" aria-hidden="true" />
                                        No hay solicitudes pendientes.
                                    </p>
                                </li>
                            )}
                        </ul>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-scale-balanced" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Correcciones y Mutaciones Léxicas</h3>
                                <p>Modificaciones sugeridas a conceptos ya públicos para optimizar la precisión lingüística de la comunidad sorda.</p>
                            </section>
                        </header>

                        <ul className="lista-gestion-cuentas" role="list" aria-label="Correcciones propuestas">
                            {correcciones.map((corr) => (
                                <li key={corr.id} className="item-solicitud-aprobacion c-columna">
                                    <header className="encabezado-fila-interna">
                                        <strong className="nombre-usuario-tabla">
                                            Concepto en Mutación: {corr.concepto}
                                            <i className={`${corr.icono} ms-2`} aria-hidden="true" />
                                        </strong>
                                        <span className="badge-autor-interprete">Propuesto por: {corr.autor}</span>
                                    </header>

                                    <section className="contenedor-comparador-lexico" aria-label="Comparación de versiones">
                                        <article className="caja-estado-lexico anterior">
                                            <strong className="titulo-estado-caja">Definición Actual Activa</strong>
                                            <p>{corr.actual}</p>
                                        </article>
                                        <article className="caja-estado-lexico propuesta">
                                            <strong className="titulo-estado-caja">Modificación Propuesta</strong>
                                            <p>{corr.propuesta}</p>
                                        </article>
                                    </section>

                                    <footer className="acciones-aprobacion-bloque">
                                        <button type="button" className="btn-operativo-modulo btn-confirmar" onClick={() => gestionarCorreccion(corr.id, 'Mutación Aplicada')}>
                                            <i className="fa-solid fa-code-merge" aria-hidden="true" /> Validar e Intercambiar
                                        </button>
                                        <button type="button" className="btn-operativo-modulo btn-rechazar" onClick={() => gestionarCorreccion(corr.id, 'Mutación Rechazada')}>
                                            <i className="fa-solid fa-trash-arrow-up" aria-hidden="true" /> Descartar Sugerencia
                                        </button>
                                    </footer>
                                </li>
                            ))}

                            {correcciones.length === 0 && (
                                <li>
                                    <p className="empty-state">
                                        <i className="fa-solid fa-inbox" aria-hidden="true" />
                                        No hay correcciones pendientes.
                                    </p>
                                </li>
                            )}
                        </ul>
                    </article>
                </section>
            </main>

            <ToastRegion toasts={toasts} />
        </section>
    );
};

export default AprobacionSenas;
