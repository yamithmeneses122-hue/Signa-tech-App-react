import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const DashboardAdmin = () => {
    // Estado para controlar si el menú hamburguesa está abierto o cerrado
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Efecto para manejar el tema claro/oscuro al cargar la página
    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema-sinatex-glasses') || 'oscuro';
        if (temaGuardado === 'claro') {
            document.body.classList.add('tema-claro');
        }
    }, []);

    // Efecto para cerrar el menú si se hace clic por fuera
    useEffect(() => {
        const cerrarMenuAfuera = () => {
            if (menuAbierto) {
                setMenuAbierto(false);
            }
        };
        
        document.addEventListener('click', cerrarMenuAfuera);
        // Función de limpieza para no saturar la memoria
        return () => document.removeEventListener('click', cerrarMenuAfuera);
    }, [menuAbierto]);

    // Función para alternar el menú
    const toggleMenu = (e) => {
        e.stopPropagation(); // Evita que el clic se propague al documento y lo cierre de una
        setMenuAbierto(!menuAbierto);
    };

    // Función para validar el cierre de sesión
    const confirmarLogout = (e) => {
        if (!window.confirm('¿Desea cerrar la sesión administrativa?')) {
            e.preventDefault(); // Detiene la redirección si dice que no
        }
    };

    return (
        <section className="pagina-completa">
            
            {/* El onClick evita que los clics dentro del menú lo cierren por accidente */}
            <aside className={`menu-lado ${menuAbierto ? 'menu-abierto' : ''}`} id="menu-lateral" onClick={(e) => e.stopPropagation()}>
                <button 
                    className={`btn-hamburguesa ${menuAbierto ? 'X-activa' : ''}`} 
                    id="comp-hamburguesa" 
                    aria-label="abrir menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <h2 className="logo">SIGNA-TECH</h2>
                <p className="rol">PANEL ADMINISTRADOR</p>
                
                <nav className="navegacion-scroll">
                    <ul>
                        <li><a href="/inicio_admin" className="active"><i className="fa-solid fa-chart-pie"></i> Panel Global</a></li>
                        <li><a href="/gestion_usuarios"><i className="fa-solid fa-users-gear"></i> Gestión Usuarios</a></li>
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
                    <h1 className="titulo-pagina">Panel de Control Global <i className="fa-solid fa-hand-peace"></i></h1>
                    <p className="subtitulo-pagina">Bienvenido al núcleo de administración de SIGNA-TECH. Audita el rendimiento del sistema y gestiona las historias operativas.</p>
                </header>

                <section className="fila-metricas-admin">
                    <article className="tarjeta-metrica">
                        <h4>Usuarios Activos</h4>
                        <p className="numero-metrica">42</p>
                        <span className="tendencia-metrica positivo"><i className="fa-solid fa-arrow-trend-up"></i> 4 nuevos esta semana</span>
                    </article>
                    <article className="tarjeta-metrica">
                        <h4>Señas por Aprobar</h4>
                        <p className="numero-metrica">18</p>
                        <span className="tendencia-metrica alerta"><i className="fa-solid fa-circle-exclamation"></i> Requiere revisión del intérprete</span>
                    </article>
                    <article className="tarjeta-metrica">
                        <h4>Eficacia del Modelo IA</h4>
                        <p className="numero-metrica">98.4%</p>
                        <span className="tendencia-metrica positivo"><i className="fa-solid fa-arrow-trend-up"></i> Tasa de precisión estable</span>
                    </article>
                </section>

                <section className="dashboard-grid-operador">
                    
                    <a href="/gestion_usuarios" className="tarjeta-modulo bordo-azul">
                        <article className="tarjeta-contenido-interno">
                            <figure className="icono-modulo-wrapper">
                                <i className="fa-solid fa-users-gear"></i>
                            </figure>
                            <section className="info-modulo">
                                <h3>Gestión de Usuarios</h3>
                                <p>Registrar nuevos perfiles, editar credenciales operativas y desactivar cuentas del sistema de forma segura.</p>
                            </section>
                            <span className="flecha-ir"><i className="fa-solid fa-arrow-right"></i></span>
                        </article>
                    </a>

                    <a href="/gestion_roles" className="tarjeta-modulo bordo-verde">
                        <article className="tarjeta-contenido-interno">
                            <figure className="icono-modulo-wrapper">
                                <i className="fa-solid fa-shield-halved"></i>
                            </figure>
                            <section className="info-modulo">
                                <h3>Roles y Permisos</h3>
                                <p>Auditar la matriz de privilegios y configurar los alcances de acceso para Administradores, Intérpretes y Operadores.</p>
                            </section>
                            <span className="flecha-ir"><i className="fa-solid fa-arrow-right"></i></span>
                        </article>
                    </a>

                    <a href="/diccionario" className="tarjeta-modulo bordo-azul">
                        <article className="tarjeta-contenido-interno">
                            <figure className="icono-modulo-wrapper">
                                <i className="fa-solid fa-book-bookmark"></i>
                            </figure>
                            <section className="info-modulo">
                                <h3>Diccionario LSC</h3>
                                <p>Administración completa del glosario multimedia: crear, consultar, visualizar, modificar y eliminar señas oficiales.</p>
                            </section>
                            <span className="flecha-ir"><i className="fa-solid fa-arrow-right"></i></span>
                        </article>
                    </a>

                    <a href="/aprobacion_senas" className="tarjeta-modulo bordo-verde">
                        <article className="tarjeta-contenido-interno">
                            <figure className="icono-modulo-wrapper">
                                <i className="fa-solid fa-circle-check"></i>
                            </figure>
                            <section className="info-modulo">
                                <h3>Aprobación de Señas</h3>
                                <p>Validar las nuevas señas cargadas por el intérprete y auditar las correcciones léxicas propuestas en tiempo real.</p>
                            </section>
                            <span className="flecha-ir"><i className="fa-solid fa-arrow-right"></i></span>
                        </article>
                    </a>

                    <a href="/configuracion" className="tarjeta-modulo bordo-azul">
                        <article className="tarjeta-contenido-interno">
                            <figure className="icono-modulo-wrapper">
                                <i className="fa-solid fa-sliders"></i>
                            </figure>
                            <section className="info-modulo">
                                <h3>Configuración General</h3>
                                <p>Ajustar parámetros core del traductor, gestionar temas visuales e inspeccionar los logs de auditoría técnica.</p>
                            </section>
                            <span className="flecha-ir"><i className="fa-solid fa-arrow-right"></i></span>
                        </article>
                    </a>

                </section>
            </main>
        </section>
    );
};

export default DashboardAdmin;