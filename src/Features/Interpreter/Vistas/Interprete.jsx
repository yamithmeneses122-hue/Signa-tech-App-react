import { Link } from "react-router-dom";
import PageHeader from "../Componentes/PageHeader";
import StatCard from "../Componentes/StatCard";

const barras = [
    ["enero", "Ene"],
    ["febrero", "Feb"],
    ["marzo", "Mar"],
    ["abril", "Abr"],
    ["mayo", "May"],
    ["junio", "Jun"],
];

export default function Interprete() {
    return (
        <>
            <PageHeader
                title="Bienvenido al panel"
                subtitle="Gestiona, Valida y mejora el diccionario de señas."
            />

            <section className="fila-cajitas">
                <StatCard
                    title="Señas Validadas"
                    value="142"
                    description="total de señas confirmadas"
                    className="cajita-numero"
                />
                <StatCard
                    title="Nuevas Señas"
                    value="32"
                    description="Registradas en el sistema"
                    className="cajita-numero green"
                />
                <StatCard
                    title="Señas Corregidas"
                    value="85"
                    description="Modificaciones realizadas"
                    className="cajita-numero1"
                />
                <StatCard
                    title="Señas Pendientes"
                    value="14"
                    description="Esperando validación"
                    className="cajita-numero rojo"
                />
            </section>

            <section className="estadisticas">
                <section className="cartas">
                    <article className="cartas-header">
                        <h2>Señas registradas por mes</h2>
                        <select className="seleccion-años" defaultValue="Este año">
                            <option>Este año</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>
                    </article>

                    <article className="grafica-barras">
                        <ul className="barras">
                            {barras.map(([clase, mes]) => (
                                <li key={clase}>
                                    <span className={`barra ${clase}`} />
                                    <p>{mes}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>

                <section className="cartas">
                    <article className="cartas-header">
                        <h2>Tipos de señas</h2>
                    </article>

                    <article className="grafica-circular">
                        <figure className="circulo" />

                        <ul className="leyenda">
                            <li>
                                <span className="color azul" />
                                <p>Educativas</p>
                                <strong>55%</strong>
                            </li>
                            <li>
                                <span className="color verde" />
                                <p>Cotidianas</p>
                                <strong>30%</strong>
                            </li>
                            <li>
                                <span className="color naranja" />
                                <p>Técnicas</p>
                                <strong>15%</strong>
                            </li>
                        </ul>
                    </article>
                </section>
            </section>

            <section className="caja-usuarios">
                <h3>Últimas señas registradas / Modificadas</h3>

                <section className="tabla-responsiva">
                    <ul className="cabecera-lista">
                        <li>Código</li>
                        <li>Nombre de la seña</li>
                        <li>Categoria</li>
                        <li>Acción</li>
                        <li>Fecha</li>
                        <li>Estado</li>
                    </ul>

                    <ul className="lista-usuarios">
                        <li>SEN-045</li><li>Integral</li><li>Educativa</li>
                        <li className="estado-activo">Registro</li><li>12/05/2026</li><li className="estado-inactivo">Pendiente</li>
                    </ul>
                    <ul className="lista-usuarios">
                        <li>SEN-044</li><li>Reunión</li><li>Cotidiana</li>
                        <li className="estado-inactivo">Corrección</li><li>12/05/2026</li><li className="estado-activo">Aprobada</li>
                    </ul>
                    <ul className="lista-usuarios">
                        <li>SEN-043</li><li>Fotosíntesis</li><li>Educativa</li>
                        <li className="estado-activo">Registro</li><li>11/05/2026</li><li className="estado-inactivo">Pendiente</li>
                    </ul>
                    <ul className="lista-usuarios">
                        <li>SEN-042</li><li>Computadra</li><li>Técnica</li>
                        <li className="estado-inactivo">Correción</li><li>11/05/2026</li><li className="estado-activo">Aprobada</li>
                    </ul>
                    <ul className="lista-usuarios">
                        <li>SEN-041</li><li>Gracias</li><li>Cotidiana</li>
                        <li className="estado-activo">Registro</li><li>10/05/2026</li><li className="estado-activo">Aprobada</li>
                    </ul>
                </section>
            </section>

            <Link className="sr-only-link" to="/interprete/historial" aria-label="Ir al historial" />
        </>
    );
}