export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Paginación">
      <ul>
        <li>
          <button
            type="button"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
          >
            Anterior
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <li key={number}>
              <button
                type="button"
                className={page === number ? "active" : ""}
                onClick={() => onChange(number)}
                aria-current={page === number ? "page" : undefined}
                aria-label={`Ir a la página ${number}`}
              >
                {number}
              </button>
            </li>
          )
        )}

        <li>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => onChange(page + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}
