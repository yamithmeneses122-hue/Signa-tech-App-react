import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import SignCard from '../Components/SignCard';

export default function DiccionarioView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const signosData = [
    { id: 1, icon: 'fa-solid fa-hand-spock', title: 'Hola', category: 'Saludos' },
    { id: 2, icon: 'fa-solid fa-hands-clapping', title: 'Gracias', category: 'Saludos' },
    { id: 3, icon: 'fa-solid fa-hand-holding-heart', title: 'Por Favor', category: 'Cotidiano' },
    { id: 4, icon: 'fa-solid fa-house-user', title: 'Familia', category: 'Cotidiano' },
    { id: 5, icon: 'fa-solid fa-hand-peace', title: 'Amigo', category: 'Cotidiano' },
    { id: 6, icon: 'fa-solid fa-thumbs-up', title: 'Bien', category: 'Saludos' },
  ];

  const categorias = ['Todos', 'Saludos', 'Cotidiano', 'Abecedario', 'Números'];

  const signosFiltrados = signosData.filter((item) => {
    const coincideBusqueda = item.title.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaActiva === 'Todos' || item.category === categoriaActiva;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <>
      <section className="flex min-h-screen bg-slate-950 text-slate-100">
        
        {/* Componente Sidebar reutilizado */}
        <Sidebar isOpen={menuAbierto} onClose={() => setMenuAbierto(false)} />

        {/* Botón hamburguesa móvil */}
        <button 
          type="button" 
          className="fixed top-4 left-4 z-50 p-3 bg-slate-900 border border-slate-800 rounded-xl text-teal-400 md:hidden shadow-lg"
          id="comp-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="abrir menu"
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>

        {/* Contenido Centro */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 flex flex-col gap-8">
          
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Diccionario LSC</h1>
            <p className="text-slate-400 text-sm md:text-base">Explora y consulta señas, conceptos y modismos en Lengua de Señas Colombiana.</p>
          </header>

          <section className="flex flex-col gap-6">
            
            {/* Barra de Búsqueda y Filtros */}
            <section className="flex flex-col gap-4 p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl">
              <section className="relative w-full">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                <input 
                  type="text" 
                  id="input-buscar-seña"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar concepto o palabra (Ej: Hola, Gracias, Familia)..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </section>

              <nav className="flex flex-wrap items-center gap-2 pt-2" aria-label="Categorías del diccionario">
                {categorias.map((cat) => (
                  <button 
                    key={cat}
                    type="button" 
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all shadow-md ${categoriaActiva === cat ? 'bg-teal-600 text-white border border-teal-500' : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'}`}
                    onClick={() => setCategoriaActiva(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </section>

            {/* Grilla con Tarjetas */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="contenedor-tarjetas-senas">
              {signosFiltrados.length === 0 ? (
                <p className="text-slate-500 text-sm col-span-full text-center py-8">No se encontraron señas asociadas a tu búsqueda.</p>
              ) : (
                signosFiltrados.map((signo) => (
                  <SignCard 
                    key={signo.id}
                    iconClass={signo.icon}
                    title={signo.title}
                    category={signo.category}
                    onPlay={() => alert(`Reproduciendo demostración para: ${signo.title}`)}
                  />
                ))
              )}
            </section>

          </section>
        </main>

      </section>
    </>
  );
}