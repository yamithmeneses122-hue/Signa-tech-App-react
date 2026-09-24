import { useState } from 'react';
import '../../../styles/index.css';
import Sidebar from '../components/Sidebar';
import { useSidebar } from '../components/useSidebar';
import { useToast } from '../../../Hooks/useToastHook';
import { ToastRegion } from '../../../Hooks/useToast';

const GestionUsuarios = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts, toast } = useToast();
    const [busqueda, setBusqueda] = useState('');

    const [usuarios, setUsuarios] = useState([
        { id: 'u1', nombre: 'Charlie Satizabal', correo: 'c.satizabal@signatech.com', rol: 'Intérprete LSC', claseRol: 'interprete', activo: true },
        { id: 'u2', nombre: 'Edwin Silva',        correo: 'e.silva@signatech.com',     rol: 'Operador',       claseRol: 'operador',   activo: true },
        { id: 'u3', nombre: 'Andrea Silva',       correo: 'a.silva@signatech.com',     rol: 'Operador',       claseRol: 'operador',   activo: false },
    ]);

    const simularRegistro = (e) => {
        e.preventDefault();
        toast('Usuario registrado con éxito en SIGNA-TECH.', 'exito');
        e.target.reset();
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
                        <i className="fa-solid fa-users-gear" aria-hidden="true" />
                        Gestión de Usuarios
                    </h1>
                    <p className="subtitulo-pagina">
                        Controla el ciclo de vida de las cuentas de operadores e intérpretes. Registra, modifica privilegios o suspende accesos.
                    </p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-user-plus" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Registrar Nuevo Usuario</h3>
                                <p>Asigna credenciales iniciales de autenticación y vincula el rol operativo correspondiente.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={simularRegistro} noValidate>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Nombre Completo</legend>
                                <input type="text" placeholder="Ej: Juan Carlos Pérez Popayán" required />
                            </fieldset>

                            <fieldset className="grupo-formulario-interno">
                                <legend>Correo Electrónico Corporativo</legend>
                                <input type="email" placeholder="usuario@signatech.com" required />
                            </fieldset>

                            <section className="subgrupo-formulario-fila">
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Asignación de Rol</legend>
                                    <select required defaultValue="">
                                        <option value="" disabled>Seleccione un rol...</option>
                                        <option value="operador">Operador de Sistema</option>
                                        <option value="interprete">Intérprete LSC</option>
                                        <option value="administrador">Administrador Global</option>
                                    </select>
                                </fieldset>
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Número Celular</legend>
                                    <input type="tel" placeholder="3XXXXXXXXX" required />
                                </fieldset>
                            </section>

                            <fieldset className="grupo-formulario-interno">
                                <legend>Contraseña Temporal de Acceso</legend>
                                <input type="password" placeholder="Asigne una clave provisional segura" required />
                            </fieldset>

                            <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                <i className="fa-solid fa-user-plus" aria-hidden="true" />
                                Crear Cuenta de Usuario
                            </button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-users-gear" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Cuentas y Estados del Sistema</h3>
                                <p>Modifica la información de perfiles guardados o altera su estado lógico de acceso.</p>
                            </section>
                        </header>

                        <fieldset className="grupo-formulario-interno">
                            <legend>Filtrar por Nombre o Correo</legend>
                            <input
                                type="text"
                                placeholder="Buscar cuenta..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </fieldset>

                        <ul className="lista-gestion-cuentas" role="list" aria-label="Lista de usuarios">
                            {usuariosFiltrados.map((user) => (
                                <li
                                    key={user.id}
                                    className={`item-usuario-registro${!user.activo ? ' cuenta-desactivada' : ''}`}
                                >
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">{user.nombre}</strong>
                                        <span className="correo-usuario-tabla">{user.correo}</span>
                                        <p className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${user.claseRol}`}>{user.rol}</span>
                                            <span className={`badge-estado-usuario ${user.activo ? 'activo' : 'inactivo'}`}>
                                                {user.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </p>
                                    </section>
                                    <footer className="acciones-usuario-bloque">
                                        <button
                                            type="button"
                                            className="btn-accion-cuenta editar"
                                            title={`Editar a ${user.nombre}`}
                                            onClick={() => toast(`Abriendo editor para ${user.nombre}...`, 'info')}
                                        >
                                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn-accion-cuenta ${user.activo ? 'desactivar' : 'activar'}`}
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
                                    <p className="empty-state">
                                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                                        No se encontraron usuarios.
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

export default GestionUsuarios;
