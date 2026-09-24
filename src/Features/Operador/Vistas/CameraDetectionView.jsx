import { useState, useRef } from 'react';
import Sidebar from '../Components/Sidebar';
import OutputModeSelector from '../Components/OutputModeSelector';

export default function CameraDetectionView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conectado, setConectado] = useState(false);
  const [modoSalida, setModoSalida] = useState('texto');
  const [textoConversion, setTextoConversion] = useState(
    'El sistema está apagado. Vincule las gafas para iniciar la interpretación automática de gestos...'
  );
  
  const videoRef = useRef(null);

  const handleVincular = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setConectado(true);
      setTextoConversion('Interpretando gestos en tiempo real desde el sensor OV5640...');
    } catch {
      alert('No se pudo acceder a la cámara o sensor inteligente.');
    }
  };

  const handleDesconectar = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setConectado(false);
    setTextoConversion('El sistema está apagado. Vincule las gafas para iniciar la interpretación automática de gestos...');
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Detección de Cámara</h1>
            <p className="text-slate-400 text-sm md:text-base">Vincula el sensor de las gafas inteligentes y lee la conversión de señas a texto en tiempo real.</p>
          </header>

          <section className="flex flex-col gap-6">
            
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              
              <header className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-white">Streaming del Sensor LSC</h3>
                <p className="text-xs text-slate-400">Monitoreo visual en vivo de la captura de manos a través del sensor OV5640.</p>
              </header>

              {/* Feed de Cámara */}
              <figure className="relative w-full aspect-video bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-inner">
                <span className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wider border shadow-md ${conectado ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 animate-pulse' : 'bg-rose-500/10 text-rose-400 border-rose-500/30'}`} id="live-badge">
                  {conectado ? '● CONECTADO' : '● DESCONECTADO'}
                </span>

                <figure className="relative w-full h-full flex flex-col items-center justify-center" id="pantalla-camara">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted 
                    className={`absolute inset-0 w-full h-full object-cover ${conectado ? 'block' : 'hidden'}`}
                  ></video>
                  
                  {!conectado && (
                    <section className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <i className="fa-solid fa-camera-retro text-4xl text-slate-600" id="icono-espera-cam"></i>
                      <p className="text-xs text-slate-500 font-medium" id="txt-estado-feed">Esperando vinculación del hardware periférico...</p>
                    </section>
                  )}
                </figure>
              </figure>

              {/* Panel de Opciones (Salidas) */}
              <aside className="flex flex-col gap-6 p-6 bg-slate-950/40 border border-slate-800/60 rounded-2xl">
                
                <OutputModeSelector modoActual={modoSalida} onSelectModo={setModoSalida} />

                {/* Salida 1: Texto */}
                {modoSalida === 'texto' && (
                  <article className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-sm text-slate-300 flex items-start gap-3 shadow-inner" id="panel-salida-texto">
                    <span className="text-teal-400 font-bold select-none">▶</span>
                    <span id="texto-conversion-vivo">{textoConversion}</span>
                  </article>
                )}

                {/* Salida 2: Escuchar */}
                {modoSalida === 'escuchar' && (
                  <article className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-sm text-teal-300 flex items-center gap-3 shadow-inner">
                    <i className="fa-solid fa-volume-high animate-bounce text-lg"></i>
                    <span>Sintetizador de voz activo transmitiendo audio del gesto interpretado...</span>
                  </article>
                )}

                {/* Salida 3: Avatar */}
                {modoSalida === 'avatar' && (
                  <article className="flex items-center justify-center p-6 bg-slate-950 border border-slate-800 rounded-xl shadow-inner" id="panel-salida-avatar">
                    <figure className="flex flex-col items-center gap-3 text-teal-400">
                      <i className="fa-solid fa-user-astronaut text-3xl animate-pulse avatar-icon-anim"></i>
                      <figcaption className="text-xs font-semibold text-slate-300" id="txt-avatar-status">Avatar listo para reproducir señas LSC</figcaption>
                    </figure>
                  </article>
                )}

              </aside>

              {/* Controles de Conexión */}
              <section className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button 
                  type="button" 
                  className={`w-full sm:flex-1 py-3 px-6 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${conectado ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-teal-600 text-white hover:bg-teal-500 border border-teal-500'}`}
                  id="btn-vincular"
                  onClick={handleVincular}
                  disabled={conectado}
                >
                  <i className="fa-solid fa-link"></i> Vincular Gafas
                </button>
                <button 
                  type="button" 
                  className={`w-full sm:flex-1 py-3 px-6 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${!conectado ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'bg-rose-600 text-white hover:bg-rose-500 border border-rose-500'}`}
                  id="btn-desconectar"
                  onClick={handleDesconectar}
                  disabled={!conectado}
                >
                  <i className="fa-solid fa-link-slash"></i> Desconectar
                </button>
              </section>

            </article>

          </section>
        </main>

      </section>
    </>
  );
}