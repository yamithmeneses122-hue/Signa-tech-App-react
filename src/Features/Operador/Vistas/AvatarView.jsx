import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import AvatarSignalControls from '../Components/AvatarSignalControls';

export default function AvatarView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isGesturing, setIsGesturing] = useState(false);
  const [txtRender, setTxtRender] = useState('Avatar en espera. Listo para recibir flujos...');
  const [consolaLog, setConsolaLog] = useState('[SISTEMA]: Subsistema cinemático mapeado en canal cero. Esperando inyección multimodal...');
  const [bordeLog, setBordeLog] = useState('border-slate-800/80');

  const triggerGesticulation = (logMessage, renderMessage) => {
    setIsGesturing(true);
    setTxtRender(renderMessage);
    setConsolaLog(`[IA TRADUCTOR]: Mapeando fonemas a LSC...\n[CINEMÁTICA]: Executing hands translation track.\n${logMessage}`);
    setBordeLog('border-emerald-500/50');

    setTimeout(() => {
      setIsGesturing(false);
      setTxtRender('Avatar en espera. Listo para recibir flujos...');
      setConsolaLog('[SISTEMA]: Subsistema cinemático en reposo. Esperando inyección multimodal...');
      setBordeLog('border-slate-800/80');
    }, 4000);
  };

  const handleTextSubmit = (texto) => {
    triggerGesticulation(
      `[TEXT-INPUT]: Entrada de caracteres -> "${texto}"`,
      `🤖 El muñequito está haciendo la seña de: "${texto}" con las manos.`
    );
  };

  const handleAudioAction = () => {
    triggerGesticulation(
      `[AUDIO-INPUT]: Canal de voz detectado (Simulación micrófono USB).`,
      `🎙️ El muñequito procesó el audio y lo está interpretando con las manos en LSC.`
    );
  };

  const handleVideoAction = () => {
    triggerGesticulation(
      `[VIDEO-INPUT]: Mapeo de imagen activo (Streaming gafas inteligentes).`,
      `📷 El muñequito recibió las señas visuales y responde con las manos en vivo.`
    );
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
          id="comp-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="abrir menu"
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>

        {/* Contenido Centro */}
        <main className="flex-1 md:ml-64 p-6 md:p-12 flex flex-col gap-8">
          
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Módulo de Avatar 3D</h1>
            <p className="text-slate-400 text-sm md:text-base">Controla la visualización interactiva y el modelado de señas a través de flujos multimodales de datos.</p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Columna Izquierda: Visor de Avatar */}
            <article className="flex flex-col justify-between p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <section className="flex flex-col gap-6">
                
                <header className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🤖</span>
                  <section className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-white">Visor de Modelado LSC</h3>
                    <p className="text-xs text-slate-400">Monitorea la ejecución cinemática y el movimiento del muñequito virtual.</p>
                  </section>
                </header>

                <figure className="relative w-full aspect-video bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-6 shadow-inner">
                  <section className={`w-24 h-24 flex items-center justify-center rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 text-4xl shadow-lg transition-all duration-300 ${isGesturing ? 'scale-110 rotate-3 ring-4 ring-emerald-500/20' : ''}`} id="muñeco-avatar-placeholder">
                    <i className="fa-solid fa-user-astronaut" id="icono-avatar-render"></i>
                    {isGesturing && <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping" id="ondas-animacion"></span>}
                  </section>
                  <figcaption className="text-xs font-medium text-emerald-400 text-center" id="txt-render-avatar">
                    {txtRender}
                  </figcaption>
                </figure>

              </section>

              <section className={`mt-6 p-4 bg-slate-950 border rounded-xl font-mono text-xs text-slate-300 leading-relaxed shadow-inner transition-colors ${bordeLog}`} id="consola-logs-avatar">
                <p>{consolaLog}</p>
              </section>
            </article>

            {/* Columna Derecha: Inyección de Señales */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">📥</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Inyección de Señales</h3>
                  <p className="text-xs text-slate-400">Selecciona un canal de datos para transmitir información al Avatar.</p>
                </section>
              </header>

              <AvatarSignalControls 
                onSubmitText={handleTextSubmit}
                onAudioAction={handleAudioAction}
                onVideoAction={handleVideoAction}
              />

            </article>

          </section>
        </main>

      </section>
    </>
  );
}