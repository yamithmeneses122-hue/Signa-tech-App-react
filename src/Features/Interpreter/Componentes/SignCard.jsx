import StatusBadge from "./StatusBadge";

export default function SignCard({ sign, onSelect, selected }) {
  return (
    <article className={`sign-card ${selected ? "selected" : ""}`}>
      <button type="button" className="sign-card-button" onClick={() => onSelect(sign)}>
        <span className="sign-image-placeholder" aria-hidden="true">✋</span>
        <section>
          <header>
            <h3>{sign.word}</h3>
            <StatusBadge status={sign.status} />
          </header>
          <p>{sign.category}</p>
          <small>{sign.date}</small>
        </section>
      </button>
    </article>
  );
}
