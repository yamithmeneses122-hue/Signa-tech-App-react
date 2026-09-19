import React, { useState, useEffect } from 'react';
import '../../styles/diccionario_admin.css';

const DiccionarioAdmin = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [idEdicion, setIdEdicion] = useState(null);

    const [formData, setFormData] = useState({
        palabra: '',
        categoria: '',
        icono: '',
        descripcion: ''
    });

    const [senas, setSenas] = useState([
        { id: 's1', palabra: 'Hola', categoria: 'Saludos', descripcion: 'Seña de saludo inicial. Se realiza pasando la palma extendida cerca de la frente con un movimiento hacia afuera.', icono: 'fa-solid fa-hand', claseCategoria: 'saludo' },
        { id: 's2', palabra: 'Hardware', categoria: 'Técnico', descripcion: 'Término técnico de informática. Se representa configurando ambas manos en forma de pinza simulando estructuras físicas rígidas.', icono: 'fa-solid fa-laptop', claseCategoria: 'tecnico' },
        { id: 's3', palabra: 'Gracias', categoria: 'Cortesía', descripcion: 'Expresión de cortesía. Se ejecuta apoyando las yemas de los dedos en los labios y extendiendo la mano hacia el receptor.', icono: 'fa-solid fa-hands-praying', claseCategoria: 'cortesia' }
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idEdicion) {
            setSenas(senas.map(sena => sena.id === idEdicion ? { ...sena, ...formData } : sena));
            alert("¡Seña oficial modificada y re-indexada con éxito en la base de datos!");
        } else {
            const nuevaSena = {
                ...formData,
                id: 's' + Date.now(),
                claseCategoria: formData.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            };
            setSenas([...senas, nuevaSena]);
            alert("¡Nueva seña registrada correctamente en el catálogo global!");
        }
        cancelarModoEdicion();
    };

    const cargarSeñaAEdicion = (sena) => {
        setIdEdicion(sena.id);
        setFormData({
            palabra: sena.palabra,
            categoria: sena.categoria,
            icono: sena.icono,
            descripcion: sena.descripcion
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelarModoEdicion = () => {
        setIdEdicion(null);
        setFormData({ palabra: '', categoria: '', icono: '', descripcion: '' });
    };

    const consultarSeña = (sena) => {
        alert(`[TELEMETRÍA LSC]\n\nConcepto: ${sena.palabra.toUpperCase()}\n\nGesticulación: ${sena.descripcion}`);
    };

    const eliminarSeña = (id) => {
        if (window.confirm("ATENCIÓN ADMINISTRADOR\n\n¿Está absolutamente seguro de eliminar físicamente esta seña del diccionario? Esta acción descalibrará la interpretación de la IA en tiempo real.")) {
            setSenas(senas.filter(sena => sena.id !== id));
            alert("Registro eliminado permanentemente del servidor central.");
        }
    };

    const senasFiltradas = senas.filter(sena => 
        sena.palabra.toLowerCase().includes(busqueda.toLowerCase())
    );

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
                        <li><a href="/gestion_roles"><i className="fa-solid fa-shield-halved"></i> Roles y Permisos</a></li>
                        <li><a href="/diccionario" className="active"><i className="fa-solid fa-book-bookmark"></i> Diccionario LSC</a></li>
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
                    <h1 className="titulo-pagina">Consola del Diccionario LSC</h1>
                    <p className="subtitulo-pagina">Módulo CRUD avanzado. Inserta nuevos términos léxicos, altera traducciones o elimina registros de la base de datos central.</p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-file-pen"></i></span>
                            <section className="info-modulo">
                                <h3>{idEdicion ? 'Modificar Seña Guardada' : 'Agregar Nueva Seña Oficial'}</h3>
                                <p>{idEdicion ? 'Estás editando los parámetros lógicos de un registro existente.' : 'Inserta un nuevo concepto semántico indexado para el motor de traducción de las gafas.'}</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={handleSubmit}>
                            <fieldset className="grupo-formulario-interno">
                                <legend>Concepto / Palabra Clave</legend>
                                <input type="text" name="palabra" value={formData.palabra} onChange={handleInputChange} placeholder="Ej: Hardware, Computador, Hola..." required />
                            </fieldset>

                            <section className="subgrupo-formulario-fila">
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Categoría Léxica</legend>
                                    <select name="categoria" value={formData.categoria} onChange={handleInputChange} required>
                                        <option value="" disabled>Seleccione categoría...</option>
                                        <option value="Saludos">Saludos</option>
                                        <option value="Cortesía">Cortesía</option>
                                        <option value="Técnico">Técnico</option>
                                        <option value="Social">Social</option>
                                    </select>
                                </fieldset>
                                <fieldset className="grupo-formulario-interno">
                                    <legend>Símbolo Representativo (Ícono)</legend>
                                    <input type="text" name="icono" value={formData.icono} onChange={handleInputChange} placeholder="Ej: fa-solid fa-laptop" required />
                                </fieldset>
                            </section>

                            <fieldset className="grupo-formulario-interno">
                                <legend>Descripción Técnica de la Gesticulación</legend>
                                <input type="text" name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Detalla de forma exacta el movimiento cinemático de las manos..." required />
                            </fieldset>

                            <footer className="bloque-controles-internos" style={{ marginTop: '5px' }}>
                                <button type="submit" className="btn-operativo-modulo btn-confirmar">{idEdicion ? 'Actualizar Cambios Léxicos' : 'Cargar Registro Léxico'}</button>
                                {idEdicion && (
                                    <button type="button" className="btn-operativo-modulo btn-cancelar" onClick={cancelarModoEdicion}>Cancelar Edición</button>
                                )}
                            </footer>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <span className="icono-modulo-wrapper"><i className="fa-solid fa-book"></i></span>
                            <section className="info-modulo">
                                <h3>Glosario de Control Técnico</h3>
                                <p>Consulta el catálogo guardado, visualiza sus estructuras o ejecuta eliminaciones físicas del repositorio.</p>
                            </section>
                        </header>

                        <fieldset className="grupo-formulario-interno" style={{ marginBottom: '5px' }}>
                            <legend>Buscador de Consultas Rápidas</legend>
                            <input type="text" placeholder="Filtrar señas por concepto operativo..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                        </fieldset>

                        <ul className="lista-gestion-cuentas">
                            {senasFiltradas.map((sena) => (
                                <li key={sena.id} className="item-seña-registro">
                                    <figure className="preview-seña-avatar"><i className={sena.icono}></i></figure>
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">Concepto: {sena.palabra}</strong>
                                        <span className="correo-usuario-tabla">{sena.descripcion.substring(0, 60)}...</span>
                                        <nav className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${sena.claseCategoria || sena.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>{sena.categoria}</span>
                                        </nav>
                                    </section>
                                    <footer className="acciones-usuario-bloque">
                                        <button type="button" className="btn-accion-cuenta consultar" title="Visualizar Seña" onClick={() => consultarSeña(sena)}><i className="fa-solid fa-eye"></i></button>
                                        <button type="button" className="btn-accion-cuenta editar" title="Editar Seña" onClick={() => cargarSeñaAEdicion(sena)}><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button type="button" className="btn-accion-cuenta eliminar" title="Eliminar Seña" onClick={() => eliminarSeña(sena.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </footer>
                                </li>
                            ))}
                            {senasFiltradas.length === 0 && (
                                <p style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}>No se encontraron señas.</p>
                            )}
                        </ul>
                    </article>

                </section>
            </main>
        </section>
    );
};

export default DiccionarioAdmin;