export default function PageHeader({ title, subtitle }) {
    return (
        <header className="cabecera-contenido">
            <h1 className="titulo-pagina">{title}</h1>
            <p className="subtitulo-pagina">{subtitle}</p>
        </header>
    );
}