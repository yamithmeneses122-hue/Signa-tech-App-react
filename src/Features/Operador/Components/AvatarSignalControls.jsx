import { useState } from 'react';

export default function AvatarSignalControls({ onSubmitText, onAudioAction, onVideoAction }) {
  const [textoInput, setTextoInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textoInput.trim() !== '') {
      onSubmitText(textoInput);
      setTextoInput('');
    }
  };

  return (
    <>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit} id="form-control-avatar">
        
        {/* Canal A: Entrada de Texto */}
        <fieldset className="flex flex-col gap-3 p-5 bg-slate-950/40 border border-slate-800/60 rounded-2xl m-0">
          <legend className="flex items-center gap-2 text-xs font-bold text-teal-400">
            <i className="fa-solid fa-keyboard"></i> Canal A: Entrada de Texto
          </legend>
          <p className="text-xs text-slate-400 leading-relaxed">Traduce caracteres directamente en movimientos cinemáticos.</p>
          <section className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            <input 
              type="text" 
              id="input-texto-avatar" 
              value={textoInput}
              onChange={(e) => setTextoInput(e.target.value)}
              placeholder="Escribe un concepto (Ej: Hola, Gracias)..."
              className="w-full flex-1 px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto py-3 px-6 bg-teal-600 text-white font-bold rounded-xl text-sm hover:bg-teal-500 transition-colors shadow-lg border border-teal-500"
            >
              Enviar
            </button>
          </section>
        </fieldset>

        {/* Canal B: Captura de Audio */}
        <fieldset className="flex flex-col gap-3 p-5 bg-slate-950/40 border border-slate-800/60 rounded-2xl m-0">
          <legend className="flex items-center gap-2 text-xs font-bold text-emerald-400">
            <i className="fa-solid fa-microphone"></i> Canal B: Captura de Audio
          </legend>
          <p className="text-xs text-slate-400 leading-relaxed">Sincroniza el micrófono para convertir ondas sonoras en señas.</p>
          <button 
            type="button" 
            className="w-full py-3 px-4 bg-emerald-600/20 text-emerald-300 font-bold rounded-xl text-xs hover:bg-emerald-600 hover:text-white transition-colors shadow-lg border border-emerald-500/30 flex items-center justify-center gap-2"
            id="btn-audio-avatar"
            onClick={onAudioAction}
          >
            <i className="fa-solid fa-play"></i> Activar Reconocimiento de Voz
          </button>
        </fieldset>

        {/* Canal C: Sensor de Gafas */}
        <fieldset className="flex flex-col gap-3 p-5 bg-slate-950/40 border border-slate-800/60 rounded-2xl m-0">
          <legend className="flex items-center gap-2 text-xs font-bold text-teal-400">
            <i className="fa-solid fa-camera"></i> Canal C: Sensor de Gafas
          </legend>
          <p className="text-xs text-slate-400 leading-relaxed">Vincula la señal de video para auditar traducción en vivo.</p>
          <button 
            type="button" 
            className="w-full py-3 px-4 bg-teal-600/20 text-teal-300 font-bold rounded-xl text-xs hover:bg-teal-600 hover:text-white transition-colors shadow-lg border border-teal-500/30 flex items-center justify-center gap-2"
            id="btn-video-avatar"
            onClick={onVideoAction}
          >
            <i className="fa-solid fa-link"></i> Vincular Streaming de Video
          </button>
        </fieldset>

      </form>
    </>
  );
}