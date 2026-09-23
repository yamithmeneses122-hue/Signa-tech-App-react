import { useMemo,useState } from "react";
import { Filter,PageHeader,SearchBar,StatusBadge } from "../Componentes/component";

const initialSigns=[
  {id:1,word:"Aprender",category:"Educación",meaning:"Adquirir conocimientos.",status:"Corregida"},
  {id:2,word:"Comunicar",category:"Acciones",meaning:"Transmitir información.",status:"Validada"},
  {id:3,word:"Familia",category:"Personas",meaning:"Grupo unido por parentesco.",status:"Validada"},
  {id:4,word:"Hospital",category:"Lugares",meaning:"Centro de atención médica.",status:"Corregida"}
];

export default function Corregir(){
  const [signs,setSigns]=useState(initialSigns),[query,setQuery]=useState(""),[category,setCategory]=useState("Todas"),[editing,setEditing]=useState(null);
  const filtered=useMemo(()=>signs.filter(sign=>sign.word.toLowerCase().includes(query.toLowerCase())&&(category==="Todas"||sign.category===category)),[signs,query,category]);
  function saveEdit(event){event.preventDefault();setSigns(current=>current.map(sign=>sign.id===editing.id?editing:sign));setEditing(null);}
  return <>
    <PageHeader title="Corregir señas" description="Actualiza la información de las señas que necesitan ajustes."/>
    <section className="toolbar panel"><SearchBar value={query} onChange={setQuery} placeholder="Buscar seña..."/><Filter label="Categoría" value={category} onChange={setCategory} options={[{value:"Todas",label:"Todas"},{value:"Personas",label:"Personas"},{value:"Acciones",label:"Acciones"},{value:"Educación",label:"Educación"},{value:"Lugares",label:"Lugares"}]}/></section>
    <section className="panel table-panel"><table><caption>Señas disponibles para corrección</caption><thead><tr><th>Palabra</th><th>Categoría</th><th>Significado</th><th>Estado</th><th>Acción</th></tr></thead><tbody>
      {filtered.map(sign=><tr key={sign.id}><th scope="row">{sign.word}</th><td>{sign.category}</td><td>{sign.meaning}</td><td><StatusBadge status={sign.status}/></td><td><button className="table-action" type="button" onClick={()=>setEditing({...sign})}>Editar</button></td></tr>)}
    </tbody></table>{!filtered.length&&<p className="empty-state">No se encontraron señas.</p>}</section>
    {editing&&<dialog className="edit-dialog" open><form onSubmit={saveEdit}><header><h2>Corregir "{editing.word}"</h2><button type="button" onClick={()=>setEditing(null)} aria-label="Cerrar">×</button></header>
      <label><span>Palabra</span><input value={editing.word} onChange={e=>setEditing({...editing,word:e.target.value})} required/></label>
      <label><span>Categoría</span><select value={editing.category} onChange={e=>setEditing({...editing,category:e.target.value})}><option>Personas</option><option>Acciones</option><option>Educación</option><option>Lugares</option></select></label>
      <label><span>Significado</span><textarea value={editing.meaning} onChange={e=>setEditing({...editing,meaning:e.target.value})} required/></label>
      <footer className="form-actions"><button className="button button-secondary" type="button" onClick={()=>setEditing(null)}>Cancelar</button><button className="button button-primary" type="submit">Guardar cambios</button></footer>
    </form></dialog>}
  </>;
}
