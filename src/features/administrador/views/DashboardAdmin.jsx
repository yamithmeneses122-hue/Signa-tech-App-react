import '../../../styles/index.css';
import Sidebar from '../components/Sidebar';
import { useSidebar } from '../components/useSidebar';
import { useToast } from '../../../Hooks/useToastHook';
import { ToastRegion } from '../../../Hooks/useToast';

const DashboardAdmin = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts } = useToast();

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
                        Panel de Control Global
                        <i className="fa-solid fa-hand-peace" aria-hidden="true" />
                    </h1>
                    <p className="subtitulo-pagina">
                        Bienvenido al núcleo de administración de SIGNA-TECH. Audita el rendimiento del sistema y gestiona las historias operativas.
                    </p>
                </header>

                <section className="fila-metricas-admin" aria-label="Métricas del sistema">
                    <article className="tarjeta-metrica">
                        <h4>Usuarios Activos</h4>
                        <p className="numero-metrica">42</p>
                        <p className="tendencia-metrica positivo">
                            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" /> 4 nuevos esta semana
                        </p>
                    </article>
                    <article className="tarjeta-metrica">
                        <h4>Señas por Aprobar</h4>
                        <p className="numero-metrica">18</p>
                        <p className="tendencia-metrica alerta">
                            <i className="fa-solid fa-circle-exclamation" aria-hidden="true" /> Requiere revisión del intérprete
                        </p>
                    </article>
                    <article className="tarjeta-metrica">
                        <h4>Eficacia del Modelo IA</h4>
                        <p className="numero-metrica">98.4%</p>
                        <p className="tendencia-metrica positivo">
                            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" /> Tasa de precisión estable
                        </p>
                    </article>
                </section>

                <section className="dashboard-grid-operador" aria-label="Módulos del panel">
                    <a href="/gestion_usuarios" className="tarjeta-modulo bordo-azul">
                        <figure className="icono-modulo-wrapper" aria-hidden="true">
                            <i className="fa-solid fa-users-gear" />
                        </figure>
                        <section className="info-modulo">
                            <h3>Gestión de Usuarios</h3>
                            <p>Registrar nuevos perfiles, editar credenciales operativas y desactivar cuentas del sistema de forma segura.</p>
                        </section>
                        <span className="flecha-ir" aria-hidden="true">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </a>

                    <a href="/gestion_roles" className="tarjeta-modulo bordo-verde">
                        <figure className="icono-modulo-wrapper" aria-hidden="true">
                            <i className="fa-solid fa-shield-halved" />
                        </figure>
                        <section className="info-modulo">
                            <h3>Roles y Permisos</h3>
                            <p>Auditar la matriz de privilegios y configurar los alcances de acceso para Administradores, Intérpretes y Operadores.</p>
                        </section>
                        <span className="flecha-ir" aria-hidden="true">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </a>

                    <a href="/diccionario_admin" className="tarjeta-modulo bordo-azul">
                        <figure className="icono-modulo-wrapper" aria-hidden="true">
                            <i className="fa-solid fa-book-bookmark" />
                        </figure>
                        <section className="info-modulo">
                            <h3>Diccionario LSC</h3>
                            <p>Administración completa del glosario multimedia: crear, consultar, visualizar, modificar y eliminar señas oficiales.</p>
                        </section>
                        <span className="flecha-ir" aria-hidden="true">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </a>

                    <a href="/aprobacion_senas" className="tarjeta-modulo bordo-verde">
                        <figure className="icono-modulo-wrapper" aria-hidden="true">
                            <i className="fa-solid fa-circle-check" />
                        </figure>
                        <section className="info-modulo">
                            <h3>Aprobación de Señas</h3>
                            <p>Validar las nuevas señas cargadas por el intérprete y auditar las correcciones léxicas propuestas en tiempo real.</p>
                        </section>
                        <span className="flecha-ir" aria-hidden="true">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </a>

                    <a href="/configuracion_admin" className="tarjeta-modulo bordo-azul">
                        <figure className="icono-modulo-wrapper" aria-hidden="true">
                            <i className="fa-solid fa-sliders" />
                        </figure>
                        <section className="info-modulo">
                            <h3>Configuración General</h3>
                            <p>Ajustar parámetros core del traductor, gestionar temas visuales e inspeccionar los logs de auditoría técnica.</p>
                        </section>
                        <span className="flecha-ir" aria-hidden="true">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </a>
                </section>
            </main>

            <ToastRegion toasts={toasts} />
        </section>
    );
};

export default DashboardAdmin;
