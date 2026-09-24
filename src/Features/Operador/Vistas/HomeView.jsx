import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

export default function HomeView() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema-sinatex-glasses') || 'oscuro';
    if (temaGuardado === 'claro') {
      document.body.classList.add('tema-claro');
    }
  }, []);

  return (
    <>
      <section className="flex min-h-screen bg-slate-950 text-slate-100">
        
        {/* Componente Sidebar atómico reutilizado */}
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">¡Hola, Edwin! 👋</h1>
            <p className="text-slate-400 text-sm md:text-base">¿Qué quieres hacer hoy? Selecciona uno de los módulos operativos del sistema.</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-teal-500"
              onClick={() => navigate('/texto-voz')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">🔊</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Texto a Voz</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Configurar y reproducir los parámetros de la síntesis de voz del sistema.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-teal-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-emerald-500"
              onClick={() => navigate('/voz-a-texto')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🎙️</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Voz a Texto</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Auditar las transcripciones algorítmicas y la precisión del modelo en vivo.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-emerald-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-teal-500"
              onClick={() => navigate('/camara')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">📷</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Detección de Cámara</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Vincular y calibrar la señal de streaming del sensor de las gafas inteligentes.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-teal-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-emerald-500"
              onClick={() => navigate('/avatar')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🤖</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Módulo de Avatar</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Controlar la visualización tridimensional y el modelado de señas.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-emerald-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-teal-500"
              onClick={() => navigate('/diccionario')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">📖</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Diccionario LSC</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Explorar las tarjetas multimedia oficiales de la comunidad sorda.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-teal-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

            <article 
              className="group flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer shadow-xl border-l-4 border-l-emerald-500"
              onClick={() => navigate('/configuracion')}
            >
              <section className="flex flex-col gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">⚙️</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Configuraciones</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">Ajustar preferencias de cuenta, seguridad de contraseña y temas visuales.</p>
                </section>
              </section>
              <footer className="mt-6 flex justify-end text-slate-500 group-hover:text-emerald-400 transition-colors">
                <span className="text-lg font-bold">➔</span>
              </footer>
            </article>

          </section>
        </main>

      </section>
    </>
  );
}