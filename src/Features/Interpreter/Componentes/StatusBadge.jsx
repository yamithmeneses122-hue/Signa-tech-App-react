const statusClass = {
  Validada: "status-valid",
  Pendiente: "status-pending",
  Rechazada: "status-rejected",
  Corregida: "status-corrected"
};

export default function StatusBadge({ status }) {
  return (
    <span className={`status-badge ${statusClass[status] || ""}`}>
      {status}
    </span>
  );
}
