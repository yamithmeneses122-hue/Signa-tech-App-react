import { useMemo, useState } from "react";
import PageHeader from "../Componentes/PageHeader";

const senas = [
    ["SEN-001", "Educación", "Educativa"],
    ["SEN-002", "Biblioteca", "Cotidiana"],
    ["SEN-003", "Laboratorio", "Educativa"],
    ["SEN-004", "Descanso", "Cotidiana"],
    ["SEN-005", "Matemáticas", "Educativa"],
    ["SEN-006", "Álgebra", "Educativa"],
    ["SEN-007", "Ciencia", "Educativa"],
    ["SEN-008", "Computadora", "Técnica"],
];

export default function Corregir() {
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("Todas las categorías");
    const [estado, setEstado] = useState("Todos los estados");

    const filtradas = useMemo(
        () => senas.filter(([codigo, nombre, tipo]) => {
            const texto = `${codigo} ${nombre} ${tipo}`.toLocaleLowerCase("es");
            const coincideTexto = texto.includes(busqueda.toLocaleLowerCase("es"));
            const coincideCategoria = categoria === "Todas las categorías" || tipo === categoria;
            return coincideTexto && coincideCategoria;
        }),
        [busqueda, categoria, estado]
    );

    return (
        <>
            <PageHeader title="Corregir Señas" subtitle="Modifica o actualiza señas existentes." />

            <section className="contenedor">
                <section className="filtros">
                    <input
                        type="text"
                        placeholder="Buscar por palabra..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option>Todas las categorías</option>
                        <option>Educativa</option>
                        <option>Cotidiana</option>
                        <option>Técnica</option>
                    </select>
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option>Todos los estados</option>
                        <option>Activa</option>
                        <option>inactiva</option>
                    </select>
                </section>

                <section className="tabla-señas">
                    <h2>Lista de señas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nombre de la seña</th>
                                <th>Categoría</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtradas.map(([codigo, nombre, tipo]) => (
                                <tr key={codigo}>
                                    <td>{codigo}</td>
                                    <td>{nombre}</td>
                                    <td>{tipo}</td>
                                    <td className="activo">Activa</td>
                                    <td>
                                        <button type="button" onClick={() => alert("La edición de la seña se conectará al servicio del diccionario.")}>
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <nav className="paginacion" aria-label="Paginación">
                    <button className="pagina-activa" type="button">1</button>
                </nav>
            </section>
        </>
    );
}