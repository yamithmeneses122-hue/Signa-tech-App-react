import { useState } from 'react';
import '../../../styles/index.css';
import Sidebar, { useSidebar } from '../components/Sidebar';
import { useToast, ToastRegion } from '../../../Hooks/useToast';

const GestionRoles = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts, toast } = useToast();

    const [permisos, setPermisos] = useState({
        adminGobernanza: true,
        adminAprobacion: true,
        adminLogs: true,
        intRegistro: true,
        intCorrecciones: true,
        intAutoAprobacion: false,
        opModulos: true,
        opDiccionario: true,
        opBypass: false,
    });

    const handleToggle = (llave) => {
        setPermisos((prev) => ({ ...prev, [llave]: !prev[llave] }));
    };

    const guardarPermisos = (e, rol) => {
        e.preventDefault();
        toast(`Privilegios de ${rol} actualizados exitosamente.`, 'exito');
    };

    const Permiso = ({ id, label, descripcion, bloqueado = false }) => (
        <li className="item-permiso-fila">
            <section className="texto-permiso-info">
                <strong>{label}</strong>
                <p>{descripcion}</p>
            </section>
            <label className="switch-interruptor-neon" htmlFor={`toggle-${id}`}>
                <input
                    id={`toggle-${id}`}
                    type="checkbox"
                    checked={permisos[id]}
                    onChange={() => !bloqueado && handleToggle(id)}
                    disabled={bloqueado}
                    aria-label={label}
                />
                <span className={`slider-visual-switch${bloqueado ? ' bloqueado' : ''}`} />
            </label>
        </li>
    );

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
                        <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                        Matriz de Roles y Permisos
                    </h1>
                    <p className="subtitulo-pagina">
                        Modifica las capacidades de acceso del personal de SIGNA-TECH. Los cambios alteran los tokens de seguridad al instante.
                    </p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-crown" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Rol: Administrador Global</h3>
                                <p>Nivel supremo de acceso. Posee gobernanza total sobre las bases de datos y la seguridad de la infraestructura.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Administración')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles" role="list">
                                    <Permiso id="adminGobernanza" label="Gobernanza de Cuentas" descripcion="Crear, editar, auditar y desactivar credenciales de cualquier usuario." bloqueado />
                                    <Permiso id="adminAprobacion" label="Aprobación Léxica LSC"  descripcion="Aprobar nuevas señas o validar correcciones enviadas por el intérprete." />
                                    <Permiso id="adminLogs"       label="Acceso a Logs de Auditoría" descripcion="Visualizar el registro en bruto de operaciones de la base de datos y sistema." />
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                                Guardar Permisos Admin
                            </button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-hands-asl-interpreting" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Rol: Intérprete LSC</h3>
                                <p>Encargado de la fidelidad y curaduría lingüística del diccionario multimedia de señas colombianas.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Intérprete LSC')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles" role="list">
                                    <Permiso id="intRegistro"        label="Registro y Carga Multimedia"   descripcion="Subir nuevos videos, imágenes o descripciones cinemáticas al catálogo." />
                                    <Permiso id="intCorrecciones"    label="Proponer Correcciones de Señas" descripcion="Modificar y sugerir actualizaciones a señas que ya estén públicas." />
                                    <Permiso id="intAutoAprobacion"  label="Auto-Aprobación Directa"       descripcion="Publicar contenido en el diccionario sin pasar por la auditoría del administrador." />
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                                Guardar Permisos Intérprete
                            </button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-desktop" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Rol: Operador de Sistema</h3>
                                <p>Usuario final operativo en territorio. Controla la captura ambiental, el hardware periférico y el visor de traducción.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={(e) => guardarPermisos(e, 'Operador de Sistema')}>
                            <fieldset className="grupo-fieldset-permisos">
                                <legend>Acciones y Privilegios Core</legend>
                                <ul className="lista-permisos-toggles" role="list">
                                    <Permiso id="opModulos"     label="Uso de Módulos de Conversión"    descripcion="Acceso completo a las vistas de Texto a Voz, Voz a Texto y Detección de Cámara." />
                                    <Permiso id="opDiccionario" label="Consulta de Diccionario Nativo"  descripcion="Visualizar el glosario de términos LSC de manera interna para soporte." />
                                    <Permiso id="opBypass"      label="Bypass de Configuración Avanzada" descripcion="Alterar los periféricos de entrada/salida USB o los niveles de optimización de la IA." />
                                </ul>
                            </fieldset>
                            <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                                Guardar Permisos Operador
                            </button>
                        </form>
                    </article>
                </section>
            </main>

            <ToastRegion toasts={toasts} />
        </section>
    );
};

export default GestionRoles;
