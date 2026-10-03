export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar...",
  appearance = "default"
}) {
  if (appearance === "tailwind") {
    return (
      <label className="flex w-full items-center gap-3 rounded-lg border border-[#2a3550] bg-[#0d1117] px-3.5 text-slate-400 transition focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 theme-light:border-slate-300 theme-light:bg-white">
        <span aria-hidden="true">⌕</span>
        <input
          className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500 theme-light:text-slate-900"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </label>
    );
  }

  return (
    <label className="search-control">
      <span aria-hidden="true">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  );
}
