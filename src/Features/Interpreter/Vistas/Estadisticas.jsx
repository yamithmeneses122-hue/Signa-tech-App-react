import PageHeader from "../Componentes/PageHeader";
import StatCard from "../Componentes/StatCard";

const barras = [40, 70, 90, 110, 130, 160];
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

export default function Estadisticas() {
    return (
        <>
            <PageHeader title="Estadisticas" subtitle="" />

            <section className="estadisticas">
                <section className="tarjetas">
                    <StatCard className="card azul" value="124" title="Señas validadas" description="Total de señas confirmadas" />
                    <StatCard className="card verde" value="36" title="Nuevas señas" description="Registradas en el sistema" />
                    <StatCard className="card naranja" value="28" title="Señas corregidas" description="Modificaciones realizadas" />
                    <StatCard className="card morado" value="18" title="Señas pendientes" description="Esperando validación" />
                </section>

                <section className="fila">
                    <article className="grafica">
                        <h3>Señas registradas por mes</h3>
                        <ul className="barras">
                            {barras.map((alto) => <li style={{ height: alto }} key={alto} />)}
                        </ul>
                        <footer className="meses">
                            {meses.map((mes) => <span key={mes}>{mes}</span>)}
                        </footer>
                    </article>

                    <article className="categorias">
                        <h3>Distribución por categorías</h3>
                        <section className="circulo" />
                        <ul>
                            <li>Educativas - 55%</li>
                            <li>Cotidianas - 30%</li>
                            <li>Técnicas - 15%</li>
                        </ul>
                    </article>
                </section>

                <section className="fila">
                    <article className="actividad">
                        <h3>Actividad en el sistema</h3>
                        <img src="linea-grafica.png" alt="" />
                    </article>

                    <article className="resumen">
                        <h3>Resumen general</h3>
                        <p>Total de señas: <strong>206</strong></p>
                        <p>Activas: <strong>170</strong></p>
                        <p>Inactivas: <strong>18</strong></p>
                        <p>En revisión: <strong>18</strong></p>
                    </article>
                </section>

                <article className="estado">
                    <h3>Porcentaje de estado de las señas</h3>
                    <section className="barra">
                        <span className="activa" />
                        <span className="revision" />
                        <span className="inactiva" />
                    </section>
                    <footer className="porcentajes">
                        <p><strong>82%</strong><br />Activas</p>
                        <p><strong>9%</strong><br />En revisión</p>
                        <p><strong>9%</strong><br />Inactivas</p>
                    </footer>
                </article>
            </section>
        </>
    );
}