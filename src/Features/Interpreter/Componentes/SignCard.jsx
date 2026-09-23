import StatusBadge from "./StatusBadge";

export default function SignCard({ sign, onSelect, selected }) {
  return (
    <article className={`sign-card ${selected ? "selected" : ""}`}>
      <button
        type="button"
        className="sign-card-button"
        onClick={() => onSelect(sign)}
        aria-pressed={selected}
        aria-label={`Seleccionar seña ${sign.word}`}
      >
        <span className="sign-image-placeholder" aria-hidden="true">✋</span>
        <span className="sign-card-content">
          <span className="sign-card-heading">
            <strong>{sign.word}</strong>
            <StatusBadge status={sign.status} />
          </span>
          <span className="sign-card-category">{sign.category}</span>
          <time dateTime={sign.date}>{sign.date}</time>
        </span>
      </button>
    </article>
  );
}