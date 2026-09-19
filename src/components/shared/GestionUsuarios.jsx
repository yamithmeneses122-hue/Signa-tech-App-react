import React, { useState, useEffect } from 'react';
import '../../styles/gestion_usuarios.css';

const GestionUsuarios = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const [usuarios, setUsuarios] = useState([
        { id: 'u1', nombre: 'Charlie Satizabal', correo: 'c.satizabal@signatech.com', rol: 'Intérprete LSC', claseRol: 'interprete', activo: true },
        { id: 'u2', nombre: 'Edwin Silva', correo: 'e.silva@signatech.com', rol: 'Operador', claseRol: 'operador', activo: true },
        { id: 'u3', nombre: 'Andrea Silva', correo: 'a.silva@signatech.com', rol: 'Operador', claseRol: 'operador', activo: false }
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

    const simularRegistro = (e) => {
        e.preventDefault();
        alert("¡Usuario registrado con éxito en los servidores de SIGNA-TECH!");
        e.target.reset();
    };

    const toggleEstadoUsuario = (id) => {
        setUsuarios(usuarios.map(user => {
            if (user.id === id) {
                if (user.activo) {
                    if (window.confirm("¿Está seguro de suspender y desactivar los privilegios de esta cuenta?")) {
                        return { ...user, activo: false };
                    }
                } else {
                    return { ...user, activo: true };
                }
            }
            return user;
        }));
    };

    const usuariosFiltrados = usuarios.filter(user => 
        user.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
        user.correo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <section className="pagina-completa">
            <aside className={`menu-lado ${menuAbierto ? 'menu-abierto' : ''}`} id="menu-lateral" onClick={(e) => e.stopPropagation()}>
                <button className={`btn-hamburguesa ${menuAbierto ? 'X-activa' : ''}`} onClick={toggleMenu} aria-label="abrir menu">
                    <span></span><span></span><span></span>
                </button>
                <h2 className="logo">SIGNA-TECH</h2>
                <p className="rol">PANEL ADMINISTRADOR</p>
                <nav className="navegacion-scroll">
                    <ul>
                        <li><a href="/inicio_admin"><i className="fa-solid fa-chart-pie"></i> Panel Global</a></li>
                        <li><a href="/gestion_usuarios" className="active"><i className="fa-solid fa-users-gear"></i> Gestión Usuarios</a></li>
                        <li><a href="/gestion_roles"><i className="fa-solid fa-shield-halved"></i> Roles y Permisos</a></li>
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
                    <h1 className="titulo-pagina">Gestión de Usuarios</h1>
                    <p className="subtitulo-pagina">Controla el ciclo de vida de las cuentas de operadores e intérpretes. Registra, modifica privilegios o suspende accesos.</p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-user-plus"></i></span>
                            <section className="info-modulo">
                                <h3>Registrar Nuevo Usuario</h3>
                                <p>Asigna credenciales iniciales de autenticación y vincula el rol operativo correspondiente.</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={simularRegistro}>
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

                            <button type="submit" className="btn-operativo-modulo btn-confirmar">Crear Cuenta de Usuario</button>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-users-gear"></i></span>
                            <section className="info-modulo">
                                <h3>Cuentas y Estados del Sistema</h3>
                                <p>Modifica la información de perfiles guardados o altera su estado lógico de acceso (Activo / Inactivo).</p>
                            </section>
                        </header>

                        <fieldset className="grupo-formulario-interno" style={{ marginBottom: '10px' }}>
                            <legend>Filtrar por Nombre o Correo</legend>
                            <input 
                                type="text" 
                                placeholder="Buscar cuenta..." 
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </fieldset>

                        <ul className="lista-gestion-cuentas">
                            {usuariosFiltrados.map((user) => (
                                <li key={user.id} className={`item-usuario-registro ${!user.activo ? 'cuenta-desactivada' : ''}`}>
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">{user.nombre}</strong>
                                        <span className="correo-usuario-tabla">{user.correo}</span>
                                        <nav className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${user.claseRol}`}>{user.rol}</span>
                                            <span className={`badge-estado-usuario ${user.activo ? 'activo' : 'inactivo'}`}>
                                                {user.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </nav>
                                    </section>
                                    <footer className="acciones-usuario-bloque">
                                        <button type="button" className="btn-accion-cuenta editar" onClick={() => alert(`Abriendo consola de edición para ${user.nombre}...`)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button 
                                            type="button" 
                                            className={`btn-accion-cuenta ${user.activo ? 'desactivar' : 'activar'}`} 
                                            onClick={() => toggleEstadoUsuario(user.id)}
                                        >
                                            <i className={`fa-solid ${user.activo ? 'fa-user-slash' : 'fa-user-check'}`}></i>
                                        </button>
                                    </footer>
                                </li>
                            ))}
                            
                            {usuariosFiltrados.length === 0 && (
                                <p style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}>No se encontraron usuarios.</p>
                            )}
                        </ul>
                    </article>

                </section>
            </main>
        </section>
    );
};

export default GestionUsuarios;