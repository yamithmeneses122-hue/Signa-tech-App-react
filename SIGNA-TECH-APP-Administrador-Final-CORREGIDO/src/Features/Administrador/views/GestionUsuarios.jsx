import { useState } from 'react';
import AdminCardHeader from '../components/AdminCardHeader';
import AdminLayout from '../components/AdminLayout';
import { adminStyles } from '../components/adminStyles';
import AdminSearchBar from '../components/AdminSearchBar';
import { useToast } from '../../../Hooks/useToastHook';

const GestionUsuarios = () => {
    const { toasts, toast } = useToast();
    const [busqueda, setBusqueda] = useState('');
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        rol: '',
        telefono: '',
        contrasena: '',
    });

    const [usuarios, setUsuarios] = useState([
        { id: 'u1', nombre: 'Charlie Satizabal', correo: 'c.satizabal@signatech.com', rol: 'Intérprete LSC', claseRol: 'interprete', activo: true },
        { id: 'u2', nombre: 'Edwin Silva',        correo: 'e.silva@signatech.com',     rol: 'Operador',       claseRol: 'operador',   activo: true },
        { id: 'u3', nombre: 'Andrea Silva',       correo: 'a.silva@signatech.com',     rol: 'Operador',       claseRol: 'operador',   activo: false },
    ]);

    const limpiarFormulario = () => {
        setUsuarioEditando(null);
        setFormulario({ nombre: '', correo: '', rol: '', telefono: '', contrasena: '' });
    };

    const guardarUsuario = (e) => {
        e.preventDefault();
        const nombre = formulario.nombre.trim();
        const correo = formulario.correo.trim().toLowerCase();
        const correoDuplicado = usuarios.some(
            (usuario) => usuario.id !== usuarioEditando && usuario.correo.toLowerCase() === correo,
        );

        if (!nombre || !correo || !formulario.rol || !formulario.telefono.trim() || (!usuarioEditando && !formulario.contrasena)) {
            toast('Completa nombre, correo, rol y celular antes de guardar.', 'alerta');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            toast('Ingresa un correo electrónico válido.', 'alerta');
            return;
        }

        if (correoDuplicado) {
            toast('Ya existe una cuenta registrada con ese correo.', 'alerta');
            return;
        }

        if (!usuarioEditando && formulario.contrasena.length < 8) {
            toast('La contraseña temporal debe tener al menos 8 caracteres.', 'alerta');
            return;
        }

        const rolSeleccionado = {
            administrador: 'Administrador',
            interprete: 'Intérprete LSC',
            operador: 'Operador',
        }[formulario.rol];

        if (usuarioEditando) {
            setUsuarios((prev) => prev.map((usuario) => (
                usuario.id === usuarioEditando
                    ? { ...usuario, nombre, correo, rol: rolSeleccionado, claseRol: formulario.rol, telefono: formulario.telefono.trim() }
                    : usuario
            )));
            toast('Los datos de la cuenta se actualizaron en esta sesión.', 'exito');
        } else {
            setUsuarios((prev) => [...prev, {
                id: `u-${Date.now()}`,
                nombre,
                correo,
                rol: rolSeleccionado,
                claseRol: formulario.rol,
                telefono: formulario.telefono.trim(),
                activo: true,
            }]);
            toast('Cuenta agregada a la lista de esta sesión.', 'exito');
        }

        limpiarFormulario();
    };

    const editarUsuario = (usuario) => {
        setUsuarioEditando(usuario.id);
        setFormulario({
            nombre: usuario.nombre,
            correo: usuario.correo,
            rol: usuario.claseRol,
            telefono: usuario.telefono || '',
            contrasena: '',
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const eliminarUsuario = (usuario) => {
        if (!window.confirm(`¿Eliminar la cuenta de ${usuario.nombre} de esta sesión?`)) return;
        setUsuarios((prev) => prev.filter((item) => item.id !== usuario.id));
        if (usuarioEditando === usuario.id) limpiarFormulario();
        toast(`Cuenta de ${usuario.nombre} eliminada de esta sesión.`, 'info');
    };

    const toggleEstadoUsuario = (id) => {
        const user = usuarios.find((u) => u.id === id);
        if (!user) return;

        if (user.activo) {
            if (!window.confirm('¿Seguro de suspender esta cuenta?')) return;
            setUsuarios((prev) => prev.map((u) => u.id === id ? { ...u, activo: false } : u));
            toast(`Cuenta de ${user.nombre} desactivada.`, 'alerta');
        } else {
            setUsuarios((prev) => prev.map((u) => u.id === id ? { ...u, activo: true } : u));
            toast(`Cuenta de ${user.nombre} reactivada.`, 'exito');
        }
    };

    const usuariosFiltrados = usuarios.filter((u) =>
        u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.correo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <AdminLayout
            title="Gestión de Usuarios"
            description="Controla el ciclo de vida de las cuentas de operadores e intérpretes. Registra, modifica privilegios o suspende accesos."
            icon="fa-solid fa-users-gear"
            toasts={toasts}
        >
                <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8">
                    <article className={`${adminStyles.card} ${adminStyles.cardBlue}`}>
                        <AdminCardHeader
                            icon="fa-solid fa-user-plus"
                            title={usuarioEditando ? 'Editar Usuario' : 'Registrar Nuevo Usuario'}
                            description="Asigna credenciales iniciales de autenticación y vincula el rol operativo correspondiente."
                        />

                        <form className={adminStyles.form} onSubmit={guardarUsuario} noValidate>
                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Nombre Completo</legend>
                                <input
                                    className={adminStyles.input}
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Ej: Juan Carlos Pérez Popayán"
                                    value={formulario.nombre}
                                    onChange={(e) => setFormulario((prev) => ({ ...prev, nombre: e.target.value }))}
                                    required
                                />
                            </fieldset>

                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Correo Electrónico Corporativo</legend>
                                <input
                                    className={adminStyles.input}
                                    type="email"
                                    autoComplete="email"
                                    placeholder="usuario@signatech.com"
                                    value={formulario.correo}
                                    onChange={(e) => setFormulario((prev) => ({ ...prev, correo: e.target.value }))}
                                    required
                                />
                            </fieldset>

                            <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                                <fieldset className={adminStyles.fieldset}>
                                    <legend className={adminStyles.legend}>Asignación de Rol</legend>
                                    <select
                                        className={adminStyles.input}
                                        required
                                        value={formulario.rol}
                                        onChange={(e) => setFormulario((prev) => ({ ...prev, rol: e.target.value }))}
                                    >
                                        <option value="" disabled>Seleccione un rol...</option>
                                        <option value="operador">Operador de Sistema</option>
                                        <option value="interprete">Intérprete LSC</option>
                                        <option value="administrador">Administrador Global</option>
                                    </select>
                                </fieldset>
                                <fieldset className={adminStyles.fieldset}>
                                    <legend className={adminStyles.legend}>Número Celular</legend>
                                    <input
                                        className={adminStyles.input}
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="3XXXXXXXXX"
                                        value={formulario.telefono}
                                        onChange={(e) => setFormulario((prev) => ({ ...prev, telefono: e.target.value }))}
                                        required
                                    />
                                </fieldset>
                            </section>

                            <fieldset className={adminStyles.fieldset}>
                                <legend className={adminStyles.legend}>Contraseña Temporal de Acceso</legend>
                                <input
                                    className={adminStyles.input}
                                    type="password"
                                    autoComplete="new-password"
                                    placeholder={usuarioEditando ? 'Dejar vacío para conservar la contraseña' : 'Asigne una clave provisional segura'}
                                    value={formulario.contrasena}
                                    onChange={(e) => setFormulario((prev) => ({ ...prev, contrasena: e.target.value }))}
                                    required={!usuarioEditando}
                                />
                            </fieldset>

                            <footer className="flex flex-wrap gap-3">
                                <button type="submit" className={`${adminStyles.button} ${adminStyles.primaryButton}`}>
                                    <i className={`fa-solid ${usuarioEditando ? 'fa-floppy-disk' : 'fa-user-plus'}`} aria-hidden="true" />
                                    {usuarioEditando ? 'Guardar Cambios' : 'Crear Cuenta de Usuario'}
                                </button>
                                {usuarioEditando && (
                                    <button type="button" className={`${adminStyles.button} ${adminStyles.secondaryButton}`} onClick={limpiarFormulario}>
                                        Cancelar Edición
                                    </button>
                                )}
                            </footer>
                        </form>
                    </article>

                    <article className={`${adminStyles.card} ${adminStyles.cardTeal}`}>
                        <AdminCardHeader
                            icon="fa-solid fa-users-gear"
                            title="Cuentas y Estados del Sistema"
                            description="Modifica la información de perfiles guardados o altera su estado lógico de acceso."
                            teal
                        />

                        <AdminSearchBar value={busqueda} onChange={setBusqueda} placeholder="Filtrar por nombre o correo..." />

                        <ul className={adminStyles.list} role="list" aria-label="Lista de usuarios">
                            {usuariosFiltrados.map((user) => (
                                <li
                                    key={user.id}
                                    className={`${adminStyles.listItem} ${!user.activo ? 'opacity-50' : ''}`}
                                >
                                    <section className="flex min-w-0 flex-1 flex-col gap-1">
                                        <strong className="truncate text-sm font-semibold text-white theme-light:text-slate-900">{user.nombre}</strong>
                                        <span className={adminStyles.muted}>{user.correo}</span>
                                        <p className="mt-1 flex flex-wrap gap-1.5">
                                            <span className={`rounded border px-2 py-0.5 text-[0.68rem] font-bold uppercase ${user.claseRol === 'interprete' ? 'border-teal-300/20 bg-teal-300/10 text-teal-300' : 'border-cyan-300/20 bg-cyan-300/10 text-cyan-300'}`}>{user.rol}</span>
                                            <span className={`rounded px-2 py-0.5 text-[0.68rem] font-bold uppercase ${user.activo ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'}`}>
                                                {user.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </p>
                                    </section>
                                    <footer className="flex shrink-0 gap-2">
                                        <button
                                            type="button"
                                            className="flex size-9 items-center justify-center rounded-lg border border-[#2a3550] text-slate-400 transition hover:border-cyan-400 hover:text-cyan-300"
                                            title={`Editar a ${user.nombre}`}
                                            aria-label={`Editar a ${user.nombre}`}
                                            onClick={() => editarUsuario(user)}
                                        >
                                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`${adminStyles.button} size-9 min-h-9 px-0 ${adminStyles.dangerButton}`}
                                            title={`Eliminar a ${user.nombre}`}
                                            aria-label={`Eliminar a ${user.nombre}`}
                                            onClick={() => eliminarUsuario(user)}
                                        >
                                            <i className="fa-solid fa-trash-can" aria-hidden="true" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`flex size-9 items-center justify-center rounded-lg border transition ${user.activo ? 'border-red-400/30 text-red-300 hover:border-red-400 hover:bg-red-500/10' : 'border-emerald-400/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/10'}`}
                                            title={user.activo ? 'Desactivar cuenta' : 'Reactivar cuenta'}
                                            onClick={() => toggleEstadoUsuario(user.id)}
                                        >
                                            <i className={`fa-solid ${user.activo ? 'fa-user-slash' : 'fa-user-check'}`} aria-hidden="true" />
                                        </button>
                                    </footer>
                                </li>
                            ))}

                            {usuariosFiltrados.length === 0 && (
                                <li>
                                    <p className={adminStyles.empty}>
                                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                                        No se encontraron usuarios.
                                    </p>
                                </li>
                            )}
                        </ul>
                    </article>
                </section>
        </AdminLayout>
    );
};

export default GestionUsuarios;
