export default function SearchBar({ value, onChange, placeholder = "Buscar..." }) {
  return <label className="search-control"><span aria-hidden="true">⌕</span><input type="search" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder}/></label>;
}