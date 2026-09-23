import { useMemo, useState } from "react";
import PageHeader from "../Componentes/PageHeader";

const senas = [
    { imagen: "https://picsum.photos/400/400?random=1", nombre: "Educación", categoria: "Educativa", estado: "Pendiente", significado: "Acción y efecto de educar o instruir.", descripcion: "Se utiliza en contextos formales de aprendizaje y enseñanza." },
    { imagen: "https://picsum.photos/400/400?random=2", nombre: "Biblioteca", categoria: "Educativa", estado: "Pendiente", significado: "Lugar donde se conservan y consultan libros.", descripcion: "Se utiliza para identificar espacios de estudio y consulta." },
    { imagen: "https://picsum.photos/400/400?random=3", nombre: "Laboratorio", categoria: "Tecnología", estado: "Pendiente", significado: "Lugar destinado a la investigación.", descripcion: "Se utiliza en contextos de experimentación y aprendizaje." },
    { imagen: "https://picsum.photos/400/400", nombre: "Educación", categoria: "Educativa", estado: "Pendiente", significado: "Acción y efecto de educar o instruir.", descripcion: "Se utiliza en contextos formales de aprendizaje y enseñanza." },
    { imagen: "https://picsum.photos/400/400?random=4", nombre: "Biblioteca", categoria: "Comunicación", estado: "Pendiente", significado: "Lugar donde se conservan y consultan libros.", descripcion: "Se utiliza para identificar espacios de estudio y consulta." },
    { imagen: "https://picsum.photos/400/400?random=5", nombre: "Laboratorio", categoria: "Salud", estado: "Pendiente", significado: "Lugar destinado a la investigación.", descripcion: "Se utiliza en contextos de experimentación y aprendizaje." },
    { imagen: "https://i.pravatar.cc/40", nombre: "Laboratorio", categoria: "Tecnología", estado: "Pendiente", significado: "Lugar destinado a la investigación.", descripcion: "Se utiliza en contextos de experimentación y aprendizaje." },
];

export default function Validar() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("todas");
    const [estado, setEstado] = useState("todos");
    const [seleccionada, setSeleccionada] = useState(senas[0]);

    const filtradas = useMemo(
        () => senas.filter((sena) => {
            const coincideTexto = sena.nombre.toLocaleLowerCase("es").includes(busqueda.toLocaleLowerCase("es"));
            const coincideCategoria = categoria === "todas" || sena.categoria.toLocaleLowerCase("es") === categoria;
            const coincideEstado = estado === "todos" || sena.estado.toLocaleLowerCase("es") === estado;
            return coincideTexto && coincideCategoria && coincideEstado;
        }),
        [busqueda, categoria, estado]
    );

    const cambiarEstado = (nuevoEstado) => {
        setSeleccionada((actual) => actual ? { ...actual, estado: nuevoEstado } : actual);
    };

    return (
        <>
            <PageHeader
                title="Validar diccionario"
                subtitle="Confirma que la seña y su significado sean correctos"
            />

            <nav className="filtros">
                <select id="filtroCategoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="todas">Todas las categorías</option>
                    <option value="educativa">Educativa</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="comunicacion">Comunicación</option>
                    <option value="salud">Salud</option>
                </select>

                <select id="filtroEstado" value={estado} onChange={(e) => setEstado(e.target.value)}>
                    <option value="todos">Todos los estados</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="validada">Validada</option>
                    <option value="rechazada">Rechazada</option>
                </select>
            </nav>

            <section className="contenido">
                <aside className="panel">
                    <form className="buscador" onSubmit={(e) => e.preventDefault()}>
                        <i className="fa-solid fa-magnifying-glass" />
                        <input
                            type="text"
                            placeholder="Buscar por palabra..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </form>

                    <h3>Señas pendientes ({filtradas.length})</h3>

                    {filtradas.map((sena, indice) => (
                        <article
                            className={seleccionada?.nombre === sena.nombre && indice === 0 ? "item activo" : "item"}
                            key={`${sena.nombre}-${indice}`}
                            onClick={() => setSeleccionada(sena)}
                        >
                            <img src={sena.imagen} alt={sena.nombre} />
                            <section>
                                <h4>{sena.nombre}</h4>
                                <p>{sena.estado}</p>
                            </section>
                            <small>{sena.estado}</small>
                        </article>
                    ))}
                </aside>

                <article className="tarjeta">
                    <h2>Vista previa de la seña</h2>

                    <figure className="video">
                        <img
                            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop"
                            alt="Vista previa de la seña"
                        />
                    </figure>

                    <section className="informacion">
                        <p><strong>Palabra:</strong> {seleccionada.nombre}</p>
                        <p><strong>Categoría:</strong> {seleccionada.categoria}</p>
                        <p><strong>Significado:</strong> {seleccionada.significado}</p>
                        <p><strong>Descripción:</strong> {seleccionada.descripcion}</p>
                    </section>

                    <footer className="botones">
                        <button className="rechazar active" type="button" onClick={() => cambiarEstado("Rechazada")}>Rechazar</button>
                        <button className="validar active" type="button" onClick={() => cambiarEstado("Validada")}>Validar</button>
                    </footer>
                </article>
            </section>
        </>
    );
}