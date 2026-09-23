export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Paginación">
      <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)}>Anterior</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
        <button
          type="button"
          key={number}
          className={page === number ? "active" : ""}
          onClick={() => onChange(number)}
          aria-current={page === number ? "page" : undefined}
        >
          {number}
        </button>
      ))}
      <button type="button" disabled={page === totalPages} onClick={() => onChange(page + 1)}>Siguiente</button>
    </nav>
  );
}
