import { useMemo, useState } from "react";
import PageHeader from "../Componentes/PageHeader";

const cambios = [
    ["12/05/2026 08:40", "Intérprete", "Registro", "Educación", "Nueva seña agregada"],
    ["12/05/2026 07:15", "Intérprete", "Corrección", "Biblioteca", "Se actualizó el significado"],
    ["11/05/2026 18:30", "Intérprete", "Validación", "Laboratorio", "Se validó la seña"],
    ["11/05/2026 16:05", "Intérprete", "Corrección", "Descanso", "Se actualizó el video"],
    ["11/05/2026 15:20", "Intérprete", "Registro", "Matemáticas", "Nueva seña agregada"],
    ["10/05/2026 11:45", "Intérprete", "Eliminación", "Antiguo", "Se eliminó la seña"],
    ["10/05/2026 09:10", "Intérprete", "Validación", "Álgebra", "Se validó la seña"],
    ["09/05/2026 14:50", "Intérprete", "Corrección", "Ciencia", "Se corrigió la descripción"],
];

export default function Historial() {
    const [busqueda, setBusqueda] = useState("");
    const [accion, setAccion] = useState("Todas las acciones");

    const filtrados = useMemo(
        () => cambios.filter((cambio) => {
            const texto = cambio.join(" ").toLocaleLowerCase("es");
            return texto.includes(busqueda.toLocaleLowerCase("es"))
                && (accion === "Todas las acciones" || cambio[2] === accion);
        }),
        [busqueda, accion]
    );

    return (
        <>
            <PageHeader
                title="Historial de Cambios"
                subtitle="Consulta los cambios realizados en el diccionario."
            />

            <section className="contenedor">
                <section className="filtros">
                    <input
                        type="text"
                        placeholder="🔍 Buscar por palabra..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <input type="date" />
                    <input type="date" />
                    <select value={accion} onChange={(e) => setAccion(e.target.value)}>
                        <option>Todas las acciones</option>
                        <option>Registro</option>
                        <option>Corrección</option>
                        <option>Validación</option>
                        <option>Eliminación</option>
                    </select>
                </section>

                <section className="tabla-contenedor">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Usuario</th>
                                <th>Acción</th>
                                <th>Seña</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrados.map((cambio) => (
                                <tr key={cambio.join("-")}>
                                    {cambio.map((dato) => <td key={dato}>{dato}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <nav className="paginacion" aria-label="Paginación">
                        <button className="activa" type="button">1</button>
                    </nav>
                </section>
            </section>
        </>
    );
}