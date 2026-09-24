
export default function OutputModeSelector({ modoActual, onSelectModo }) {
  const modos = [
    { id: 'texto', label: 'Texto', icon: 'fa-solid fa-align-left' },
    { id: 'escuchar', label: 'Escuchar', icon: 'fa-solid fa-volume-high' },
    { id: 'avatar', label: 'Avatar', icon: 'fa-solid fa-user-astronaut' },
  ];

  return (
    <>
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-200">
          <i className="fa-solid fa-language text-teal-400"></i> Modos de Salida:
        </h4>
        <nav className="flex items-center gap-2" aria-label="Modos de salida">
          {modos.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer border ${
                modoActual === m.id
                  ? 'bg-teal-600 text-white border-teal-500 shadow-teal-500/20'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
              onClick={() => onSelectModo(m.id)}
            >
              <i className={m.icon}></i> {m.label}
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}