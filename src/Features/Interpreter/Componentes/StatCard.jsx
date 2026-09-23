export default function StatCard({ className = "cajita-numero", title, value, description }) {
    return (
        <article className={className}>
            <h3>{title}</h3>
            <span>{value}</span>
            <h6>{description}</h6>
        </article>
    );
}