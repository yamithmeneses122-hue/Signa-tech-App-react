import { useState } from 'react';
import { useToast } from '../../../Hooks/useToastHook';
import AdminCardHeader from '../components/AdminCardHeader';
import AdminLayout from '../components/AdminLayout';
import { adminStyles } from '../components/adminStyles';

const Permiso = ({ id, label, descripcion, bloqueado = false, checked, onChange }) => (
    <li className={`${adminStyles.listItem} gap-4`}>
        <section className="min-w-0">
            <strong className="block text-sm font-semibold text-white theme-light:text-slate-900">{label}</strong>
            <p className={`mt-1 ${adminStyles.muted}`}>{descripcion}</p>
        </section>
        <label
            className={`relative inline-flex shrink-0 items-center ${bloqueado ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
            htmlFor={`toggle-${id}`}
        >
            <input
                id={`toggle-${id}`}
                className="peer sr-only"
                type="checkbox"
                role="switch"
                checked={checked}
                onChange={onChange}
                disabled={bloqueado}
                aria-label={label}
            />
            <span className="h-7 w-12 rounded-full border border-slate-600 bg-slate-700 transition-colors peer-checked:border-cyan-400 peer-checked:bg-cyan-500/40 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-60 theme-light:border-slate-400 theme-light:bg-slate-300" />
            <span className="pointer-events-none absolute left-1 size-5 rounded-full bg-slate-300 shadow transition-transform peer-checked:translate-x-5 peer-checked:bg-cyan-300 theme-light:bg-white" />
        </label>
    </li>
);

const GestionRoles = () => {
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

    return (
        <AdminLayout
            title="Matriz de Roles y Permisos"
            description="Modifica las capacidades de acceso del personal de SIGNA-TECH. Los cambios alteran los tokens de seguridad al instante."
            icon="fa-solid fa-shield-halved"
            toasts={toasts}
        >
            <section className="flex flex-col gap-6">
                <article className={`${adminStyles.card} ${adminStyles.cardBlue}`}>
                    <AdminCardHeader
                        icon="fa-solid fa-crown"
                        title="Rol: Administrador Global"
                        description="Nivel supremo de acceso. Posee gobernanza total sobre las bases de datos y la seguridad de la infraestructura."
                    />
                    <form className={adminStyles.form} onSubmit={(e) => guardarPermisos(e, 'Administración')}>
                        <fieldset className={adminStyles.fieldset}>
                            <legend className={adminStyles.legend}>Acciones y Privilegios Core</legend>
                            <ul className={adminStyles.list} role="list">
                                <Permiso id="adminGobernanza" label="Gobernanza de Cuentas" descripcion="Crear, editar, auditar y desactivar credenciales de cualquier usuario." checked={permisos.adminGobernanza} onChange={() => handleToggle('adminGobernanza')} bloqueado />
                                <Permiso id="adminAprobacion" label="Aprobación Léxica LSC" descripcion="Aprobar nuevas señas o validar correcciones enviadas por el intérprete." checked={permisos.adminAprobacion} onChange={() => handleToggle('adminAprobacion')} />
                                <Permiso id="adminLogs" label="Acceso a Logs de Auditoría" descripcion="Visualizar el registro en bruto de operaciones de la base de datos y sistema." checked={permisos.adminLogs} onChange={() => handleToggle('adminLogs')} />
                            </ul>
                        </fieldset>
                        <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton} self-start`}>
                            <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                            Guardar Permisos Admin
                        </button>
                    </form>
                </article>

                <article className={`${adminStyles.card} ${adminStyles.cardTeal}`}>
                    <AdminCardHeader
                        icon="fa-solid fa-hands-asl-interpreting"
                        title="Rol: Intérprete LSC"
                        description="Encargado de la fidelidad y curaduría lingüística del diccionario multimedia de señas colombianas."
                        teal
                    />
                    <form className={adminStyles.form} onSubmit={(e) => guardarPermisos(e, 'Intérprete LSC')}>
                        <fieldset className={adminStyles.fieldset}>
                            <legend className={adminStyles.legend}>Acciones y Privilegios Core</legend>
                            <ul className={adminStyles.list} role="list">
                                <Permiso id="intRegistro" label="Registro y Carga Multimedia" descripcion="Subir nuevos videos, imágenes o descripciones cinemáticas al catálogo." checked={permisos.intRegistro} onChange={() => handleToggle('intRegistro')} />
                                <Permiso id="intCorrecciones" label="Proponer Correcciones de Señas" descripcion="Modificar y sugerir actualizaciones a señas que ya estén públicas." checked={permisos.intCorrecciones} onChange={() => handleToggle('intCorrecciones')} />
                                <Permiso id="intAutoAprobacion" label="Auto-Aprobación Directa" descripcion="Publicar contenido en el diccionario sin pasar por la auditoría del administrador." checked={permisos.intAutoAprobacion} onChange={() => handleToggle('intAutoAprobacion')} />
                            </ul>
                        </fieldset>
                        <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton} self-start`}>
                            <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                            Guardar Permisos Intérprete
                        </button>
                    </form>
                </article>

                <article className={`${adminStyles.card} ${adminStyles.cardBlue}`}>
                    <AdminCardHeader
                        icon="fa-solid fa-desktop"
                        title="Rol: Operador de Sistema"
                        description="Usuario final operativo en territorio. Controla la captura ambiental, el hardware periférico y el visor de traducción."
                    />
                    <form className={adminStyles.form} onSubmit={(e) => guardarPermisos(e, 'Operador de Sistema')}>
                        <fieldset className={adminStyles.fieldset}>
                            <legend className={adminStyles.legend}>Acciones y Privilegios Core</legend>
                            <ul className={adminStyles.list} role="list">
                                <Permiso id="opModulos" label="Uso de Módulos de Conversión" descripcion="Acceso completo a las vistas de Texto a Voz, Voz a Texto y Detección de Cámara." checked={permisos.opModulos} onChange={() => handleToggle('opModulos')} />
                                <Permiso id="opDiccionario" label="Consulta de Diccionario Nativo" descripcion="Visualizar el glosario de términos LSC de manera interna para soporte." checked={permisos.opDiccionario} onChange={() => handleToggle('opDiccionario')} />
                                <Permiso id="opBypass" label="Bypass de Configuración Avanzada" descripcion="Alterar los periféricos de entrada/salida USB o los niveles de optimización de la IA." checked={permisos.opBypass} onChange={() => handleToggle('opBypass')} />
                            </ul>
                        </fieldset>
                        <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton} self-start`}>
                            <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                            Guardar Permisos Operador
                        </button>
                    </form>
                </article>
            </section>
        </AdminLayout>
    );
};

export default GestionRoles;
