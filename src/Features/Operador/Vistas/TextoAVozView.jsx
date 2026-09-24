import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

export default function TextoAVozView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [texto, setTexto] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [estadoAudio, setEstadoAudio] = useState('Sintetizador en espera...');

  const handleReproducir = () => {
    if (!texto.trim()) {
      alert('Por favor escribe un mensaje para sintetizar.');
      return;
    }
    setIsSynthesizing(true);
    setEstadoAudio('Reproduciendo audio en vivo...');
  };

  const handleDetener = () => {
    setIsSynthesizing(false);
    setEstadoAudio('Sintetizador en espera...');
  };

  return (
    <>
      <section className="flex min-h-screen bg-slate-950 text-slate-100">
        
        {/* Componente Sidebar reutilizado */}
        <Sidebar isOpen={menuAbierto} onClose={() => setMenuAbierto(false)} />

        {/* Botón hamburguesa móvil */}
        <button 
          type="button" 
          className="fixed top-4 left-4 z-50 p-3 bg-slate-900 border border-slate-800 rounded-xl text-teal-400 md:hidden shadow-lg"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>

        {/* Contenido Central */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 flex flex-col gap-8">
          
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Módulo Texto a Voz</h1>
            <p className="text-slate-400 text-sm md:text-base">Escribe o procesa las frases para la reproducción de audio del sintetizador de voz.</p>
          </header>

          <section className="flex flex-col gap-6">
            
            <article className="flex flex-col gap-8 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              
              {/* Contenedor Avatar / Audio Animado */}
              <section className="flex flex-col items-center justify-center gap-4 py-4">
                <section className={`w-20 h-20 flex items-center justify-center rounded-full bg-teal-500/10 border-2 border-teal-500/40 text-teal-400 text-2xl shadow-lg transition-all ${isSynthesizing ? 'animate-pulse ring-4 ring-teal-500/20' : ''}`} id="onda-sonido">
                  <i className="fa-solid fa-volume-high" id="icono-parlante"></i>
                </section>
                <p id="txt-estado-audio" className="text-sm font-medium text-teal-400">{estadoAudio}</p>
              </section>

              {/* Contenedor Input de Audio */}
              <section className="flex flex-col gap-2">
                <label htmlFor="texto-sintesis" className="text-sm font-semibold text-slate-300">Mensaje a Sintetizar</label>
                <textarea 
                  id="texto-sintesis" 
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Escribe el texto o la frase que deseas que el sistema convierta en voz audible en tiempo real..."
                  className="w-full h-36 p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                ></textarea>
              </section>

              {/* Bloque Botones Operativos */}
              <section className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button 
                  type="button" 
                  className={`w-full sm:flex-1 py-3 px-6 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${isSynthesizing ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-teal-600 text-white hover:bg-teal-500 border border-teal-500'}`}
                  id="btn-reproducir"
                  onClick={handleReproducir}
                  disabled={isSynthesizing}
                >
                  <i className="fa-solid fa-play"></i> Reproducir Audio
                </button>
                <button 
                  type="button" 
                  className={`w-full sm:flex-1 py-3 px-6 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${!isSynthesizing ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-rose-600 text-white hover:bg-rose-500 border border-rose-500'}`}
                  id="btn-detener"
                  onClick={handleDetener}
                  disabled={!isSynthesizing}
                >
                  <i className="fa-solid fa-stop"></i> Detener
                </button>
              </section>

            </article>

          </section>
        </main>

      </section>
    </>
  );
}