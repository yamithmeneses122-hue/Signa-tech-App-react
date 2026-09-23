import { useState } from 'react';
import '../../styles/index.css';
import Sidebar, { useSidebar } from './Sidebar';
import { useToast, ToastRegion } from '../../Hooks/useToast';

const DiccionarioAdmin = () => {
    const { menuAbierto, toggleMenu, cerrar } = useSidebar();
    const { toasts, toast } = useToast();

    const [busqueda, setBusqueda] = useState('');
    const [idEdicion, setIdEdicion] = useState(null);
    const [formData, setFormData] = useState({ palabra: '', categoria: '', icono: '', descripcion: '' });

    const [senas, setSenas] = useState([
        { id: 's1', palabra: 'Hola',     categoria: 'Saludos',  descripcion: 'Seña de saludo inicial. Se realiza pasando la palma extendida cerca de la frente con un movimiento hacia afuera.', icono: 'fa-solid fa-hand',           claseCategoria: 'saludo' },
        { id: 's2', palabra: 'Hardware', categoria: 'Técnico',   descripcion: 'Término técnico de informática. Se representa configurando ambas manos en forma de pinza simulando estructuras físicas rígidas.', icono: 'fa-solid fa-laptop',  claseCategoria: 'tecnico' },
        { id: 's3', palabra: 'Gracias',  categoria: 'Cortesía',  descripcion: 'Expresión de cortesía. Se ejecuta apoyando las yemas de los dedos en los labios y extendiendo la mano hacia el receptor.',  icono: 'fa-solid fa-hands-praying', claseCategoria: 'cortesia' },
    ]);

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idEdicion) {
            setSenas((prev) => prev.map((s) => s.id === idEdicion ? { ...s, ...formData } : s));
            toast('Seña modificada y re-indexada con éxito.', 'exito');
        } else {
            setSenas((prev) => [...prev, {
                ...formData,
                id: 's' + Date.now(),
                claseCategoria: formData.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            }]);
            toast('Nueva seña registrada en el catálogo global.', 'exito');
        }
        cancelarEdicion();
    };

    const cargarEdicion = (sena) => {
        setIdEdicion(sena.id);
        setFormData({ palabra: sena.palabra, categoria: sena.categoria, icono: sena.icono, descripcion: sena.descripcion });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelarEdicion = () => {
        setIdEdicion(null);
        setFormData({ palabra: '', categoria: '', icono: '', descripcion: '' });
    };

    const eliminarSena = (id, palabra) => {
        if (!window.confirm(`¿Eliminar físicamente la seña "${palabra}" del diccionario?`)) return;
        setSenas((prev) => prev.filter((s) => s.id !== id));
        toast(`Seña "${palabra}" eliminada permanentemente.`, 'error');
    };

    const consultarSena = (sena) => {
        toast(`${sena.palabra}: ${sena.descripcion.substring(0, 80)}...`, 'info');
    };

    const senasFiltradas = senas.filter((s) =>
        s.palabra.toLowerCase().includes(busqueda.toLowerCase())
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
                        <i className="fa-solid fa-book-bookmark" aria-hidden="true" />
                        Consola del Diccionario LSC
                    </h1>
                    <p className="subtitulo-pagina">
                        Módulo CRUD avanzado. Inserta nuevos términos léxicos, altera traducciones o elimina registros de la base de datos central.
                    </p>
                </header>

                <section className="flujo-vertical-config">
                    <article className="tarjeta-modulo bordo-azul">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className={idEdicion ? 'fa-solid fa-pen-to-square' : 'fa-solid fa-file-pen'} />
                            </figure>
                            <section className="info-modulo">
                                <h3>{idEdicion ? 'Modificar Seña Guardada' : 'Agregar Nueva Seña Oficial'}</h3>
                                <p>{idEdicion ? 'Estás editando los parámetros lógicos de un registro existente.' : 'Inserta un nuevo concepto semántico indexado para el motor de traducción.'}</p>
                            </section>
                        </header>

                        <form className="formulario-interno-config" onSubmit={handleSubmit} noValidate>
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
                                <input type="text" name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Detalla el movimiento cinemático de las manos..." required />
                            </fieldset>

                            <footer className="bloque-controles-internos">
                                <button type="submit" className="btn-operativo-modulo btn-confirmar">
                                    <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
                                    {idEdicion ? 'Actualizar Cambios' : 'Cargar Registro Léxico'}
                                </button>
                                {idEdicion && (
                                    <button type="button" className="btn-operativo-modulo btn-cancelar" onClick={cancelarEdicion}>
                                        Cancelar Edición
                                    </button>
                                )}
                            </footer>
                        </form>
                    </article>

                    <article className="tarjeta-modulo bordo-verde">
                        <header className="cabecera-tarjeta-interna">
                            <figure className="icono-modulo-wrapper" aria-hidden="true">
                                <i className="fa-solid fa-book" />
                            </figure>
                            <section className="info-modulo">
                                <h3>Glosario de Control Técnico</h3>
                                <p>Consulta el catálogo guardado, visualiza sus estructuras o ejecuta eliminaciones físicas del repositorio.</p>
                            </section>
                        </header>

                        <fieldset className="grupo-formulario-interno">
                            <legend>Buscador de Consultas Rápidas</legend>
                            <input type="text" placeholder="Filtrar señas por concepto..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                        </fieldset>

                        <ul className="lista-gestion-cuentas" role="list" aria-label="Catálogo de señas">
                            {senasFiltradas.map((sena) => (
                                <li key={sena.id} className="item-seña-registro">
                                    <figure className="preview-seña-avatar" aria-hidden="true">
                                        <i className={sena.icono} />
                                    </figure>
                                    <section className="meta-datos-usuario">
                                        <strong className="nombre-usuario-tabla">Concepto: {sena.palabra}</strong>
                                        <span className="correo-usuario-tabla">{sena.descripcion.substring(0, 60)}...</span>
                                        <p className="badges-usuario-fila">
                                            <span className={`badge-rol-usuario ${sena.claseCategoria || sena.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}>
                                                {sena.categoria}
                                            </span>
                                        </p>
                                    </section>
                                    <footer className="acciones-usuario-bloque">
                                        <button type="button" className="btn-accion-cuenta consultar" title="Ver detalles" onClick={() => consultarSena(sena)}>
                                            <i className="fa-solid fa-eye" aria-hidden="true" />
                                        </button>
                                        <button type="button" className="btn-accion-cuenta editar" title="Editar seña" onClick={() => cargarEdicion(sena)}>
                                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                        </button>
                                        <button type="button" className="btn-accion-cuenta eliminar" title="Eliminar seña" onClick={() => eliminarSena(sena.id, sena.palabra)}>
                                            <i className="fa-solid fa-trash-can" aria-hidden="true" />
                                        </button>
                                    </footer>
                                </li>
                            ))}

                            {senasFiltradas.length === 0 && (
                                <li>
                                    <p className="empty-state">
                                        <i className="fa-solid fa-book-open" aria-hidden="true" />
                                        No se encontraron señas.
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

export default DiccionarioAdmin;
