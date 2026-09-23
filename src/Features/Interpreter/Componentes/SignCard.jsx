import StatusBadge from "./StatusBadge";

export default function SignCard({ sign, onSelect, selected }) {
  return (
    <article className={`sign-card ${selected ? "selected" : ""}`}>
      <button
        type="button"
        className="sign-card-button"
        onClick={() => onSelect(sign)}
        aria-pressed={selected}
      >
        <figure className="sign-image-placeholder">
          <span aria-hidden="true">✋</span>
          <figcaption className="sr-only">
            Vista previa de la seña {sign.word}
          </figcaption>
        </figure>

        <section>
          <header>
            <h3>{sign.word}</h3>
            <StatusBadge status={sign.status} />
          </header>
          <p>{sign.category}</p>
          <time dateTime={sign.date}>{sign.date}</time>
        </section>
      </button>
    </article>
  );
}
