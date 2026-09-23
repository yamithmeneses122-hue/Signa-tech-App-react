import { useState } from "react";

export default function Perfil() {
    const [datos, setDatos] = useState({
        nombre: "Intérprete",
        correo: "interprete@diccionario.com",
        telefono: "+57 300 123 4567",
    });

    const actualizar = (campo, valor) => {
        setDatos((actuales) => ({ ...actuales, [campo]: valor }));
    };

    const guardar = (e) => {
        e.preventDefault();
        alert("Cambios guardados correctamente.");
    };

    return (
        <section className="perfil-contenedor">
            <header className="perfil-header">
                <figure className="foto-perfil">
                    <img src="https://picsum.photos/400/400" alt="Foto de perfil" />
                    <button className="editar-foto" type="button">📷</button>
                </figure>

                <article className="datos-principales">
                    <h2>Intérprete</h2>
                    <p>📧 interprete@diccionario.com</p>
                    <p>📞 +57 300 123 4567</p>
                    <p>📅 Miembro desde: 10/01/2026</p>
                </article>
            </header>

            <nav className="tabs" aria-label="Secciones del perfil">
                <button className="activo" type="button">Información personal</button>
                <button type="button">Preferencias</button>
                <button type="button">Seguridad</button>
            </nav>

            <form className="formulario" onSubmit={guardar}>
                <article className="campo">
                    <label htmlFor="perfil-nombre">Nombre completo</label>
                    <input id="perfil-nombre" type="text" value={datos.nombre} onChange={(e) => actualizar("nombre", e.target.value)} />
                </article>
                <article className="campo">
                    <label htmlFor="perfil-correo">Correo electrónico</label>
                    <input id="perfil-correo" type="email" value={datos.correo} onChange={(e) => actualizar("correo", e.target.value)} />
                </article>
                <article className="campo">
                    <label htmlFor="perfil-telefono">Teléfono</label>
                    <input id="perfil-telefono" type="text" value={datos.telefono} onChange={(e) => actualizar("telefono", e.target.value)} />
                </article>
                <article className="campo">
                    <label htmlFor="perfil-nacimiento">Fecha de nacimiento</label>
                    <input id="perfil-nacimiento" type="date" />
                </article>
                <article className="campo">
                    <label htmlFor="perfil-pais">País</label>
                    <select id="perfil-pais" defaultValue="Colombia">
                        <option>Colombia</option>
                        <option>México</option>
                        <option>Perú</option>
                    </select>
                </article>
                <article className="campo">
                    <label htmlFor="perfil-biografia">Biografía</label>
                    <textarea id="perfil-biografia" defaultValue="Intérprete especializado en Lengua de Señas Colombiana." />
                </article>
            </form>

            <section className="subir-foto">
                <h3>Cambiar foto de perfil</h3>
                <label className="zona-subida" htmlFor="foto-perfil">
                    ⬆️
                    <p>Arrastra una imagen aquí</p>
                    <span>o selecciona un archivo</span>
                    <small>Formatos JPG, PNG. Máx. 2MB</small>
                    <input id="foto-perfil" type="file" />
                </label>
            </section>

            <footer className="acciones">
                <button className="cancelar" type="button">Cancelar</button>
                <button className="guardar" type="button" onClick={guardar}>Guardar cambios</button>
            </footer>
        </section>
    );
}