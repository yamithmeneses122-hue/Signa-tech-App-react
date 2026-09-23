import { useState } from "react";
import PageHeader from "../Componentes/PageHeader";

export default function Registrar() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        categoria: "",
        descripcion: "",
        significado: "",
    });

    const actualizar = (campo, valor) => {
        setFormulario((actual) => ({ ...actual, [campo]: valor }));
    };

    const limpiar = () => {
        setFormulario({ nombre: "", categoria: "", descripcion: "", significado: "" });
    };

    const guardar = (e) => {
        e.preventDefault();
        alert("Registro guardado para validación.");
    };

    return (
        <>
            <PageHeader
                title="Registrar nuevas señas"
                subtitle="Agrega nuevas señas al diccionario del sistema"
            />

            <section className="contenido">
                <form className="formulario" onSubmit={guardar}>
                    <h2>Formulario de registro</h2>

                    <section className="fila">
                        <article className="campo">
                            <label htmlFor="nombre-sena">Nombre de la seña <strong>*</strong></label>
                            <input id="nombre-sena" type="text" placeholder="Ej. Biblioteca" value={formulario.nombre} onChange={(e) => actualizar("nombre", e.target.value)} required />
                        </article>

                        <article className="campo">
                            <label htmlFor="categoria-sena">Categoría <strong>*</strong></label>
                            <select id="categoria-sena" value={formulario.categoria} onChange={(e) => actualizar("categoria", e.target.value)} required>
                                <option value="">Selecciona una categoría</option>
                            </select>
                        </article>
                    </section>

                    <article className="campo grande">
                        <label htmlFor="descripcion-sena">Descripción <strong>*</strong></label>
                        <textarea id="descripcion-sena" placeholder="Describe el contexto o uso de la seña..." value={formulario.descripcion} onChange={(e) => actualizar("descripcion", e.target.value)} required />
                    </article>

                    <section className="fila">
                        <article className="archivo">
                            <label htmlFor="imagen-sena">Imagen de la seña <strong>*</strong></label>
                            <label className="subir" htmlFor="imagen-sena">
                                <i className="fa-solid fa-cloud-arrow-up" />
                                <p>Arrastra una imagen aquí</p>
                                <span>o selecciona un archivo</span>
                                <small>Formatos JPG, PNG (Máx. 5MB)</small>
                                <input id="imagen-sena" type="file" />
                            </label>
                        </article>

                        <article className="archivo">
                            <label htmlFor="video-sena">Video de la seña <strong>*</strong></label>
                            <label className="subir" htmlFor="video-sena">
                                <i className="fa-solid fa-cloud-arrow-up" />
                                <p>Arrastra un video aquí</p>
                                <span>o selecciona un archivo</span>
                                <small>Formato MP4 (Máx. 20MB)</small>
                                <input id="video-sena" type="file" />
                            </label>
                        </article>
                    </section>

                    <article className="campo grande">
                        <label htmlFor="significado-sena">Significado <strong>*</strong></label>
                        <textarea id="significado-sena" placeholder="Escribe el significado de la seña..." value={formulario.significado} onChange={(e) => actualizar("significado", e.target.value)} required />
                    </article>

                    <footer className="botones">
                        <button className="limpiar" type="button" onClick={limpiar}>Limpiar</button>
                        <section>
                            <button className="cancelar" type="button" onClick={limpiar}>Cancelar</button>
                            <button className="guardar" type="submit">Guardar</button>
                        </section>
                    </footer>
                </form>
            </section>
        </>
    );
}