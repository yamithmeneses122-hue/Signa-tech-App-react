import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import AudioVisualizer from '../Components/AudioVisualizer';

export default function VozATextoView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [estadoAudio, setEstadoAudio] = useState('Sistema en espera...');
  const [transcripcion, setTranscripcion] = useState('Esperando señales de audio...');

  const handleStartCapture = () => {
    setIsCapturing(true);
    setEstadoAudio('Capturando audio ambiental en vivo...');
    setTranscripcion('Escuchando frecuencia y procesando tokens de voz...');
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
    setEstadoAudio('Sistema en espera...');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(transcripcion);
    alert('Texto copiado al portapapeles');
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

        {/* Contenido Centro */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 flex flex-col gap-8">
          
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Procesador de Voz en Vivo</h1>
            <p className="text-slate-400 text-sm md:text-base">Captura y transcripción algorítmica de audio ambiental.</p>
          </header>

          <section className="flex flex-col gap-6">
            
            {/* Tarjeta 1: Control de Captura */}
            <article className="flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              <section className="flex flex-col gap-6">
                
                <header className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">🎙️</span>
                  <section className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-white">Control de Captura</h3>
                    <p id="txt-estado-audio" className="text-xs text-teal-400 font-medium">{estadoAudio}</p>
                  </section>
                </header>
                
                <AudioVisualizer />

              </section>

              <section className="flex items-center gap-4 mt-6">
                <button 
                  type="button" 
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg ${isCapturing ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-teal-600 text-white hover:bg-teal-500 border border-teal-500'}`}
                  id="btn-escuchar"
                  onClick={handleStartCapture}
                  disabled={isCapturing}
                >
                  Iniciar Captura
                </button>
                <button 
                  type="button" 
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg ${!isCapturing ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-rose-600 text-white hover:bg-rose-500 border border-rose-500'}`}
                  id="btn-detener"
                  onClick={handleStopCapture}
                  disabled={!isCapturing}
                >
                  Detener
                </button>
              </section>
            </article>

            {/* Tarjeta 2: Output Transcripción */}
            <article className="flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <section className="flex flex-col gap-6">
                
                <header className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">📄</span>
                  <section className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-white">Output: Transcripción</h3>
                    <p className="text-xs text-slate-400">Resultado de la conversión en tiempo real.</p>
                  </section>
                </header>

                <section className="p-4 bg-slate-950 border border-slate-800 rounded-xl min-h-[120px] max-h-[200px] overflow-y-auto font-mono text-sm text-slate-300" id="txt-transcripcion-vivo">
                  <p>{transcripcion}</p>
                </section>

              </section>

              <button 
                type="button" 
                className="w-full mt-6 py-3 px-4 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-500 transition-colors shadow-lg border border-emerald-500"
                id="btn-copiar"
                onClick={handleCopyText}
              >
                Copiar Texto
              </button>
            </article>

          </section>
        </main>

      </section>
    </>
  );
}