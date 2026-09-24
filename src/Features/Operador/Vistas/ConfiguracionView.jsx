import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import AiOptimizationSelector from '../Components/AiOptimizationSelector';

export default function ConfiguracionView() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [tema, setTema] = useState('oscuro');

  const handleSubmit = (e, mensaje) => {
    e.preventDefault();
    alert(mensaje);
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
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-['Montserrat']">Panel de Configuración</h1>
            <p className="text-slate-400 text-sm md:text-base">Personaliza los parámetros del sistema, gestiona tus dispositivos y ajusta las preferencias operativas.</p>
          </header>

          <section className="flex flex-col gap-6">
            
            {/* Tarjeta 1: Perfil de Usuario */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">👤</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Perfil de Usuario</h3>
                  <p className="text-xs text-slate-400">Actualiza tu información personal de operador del sistema.</p>
                </section>
              </header>

              <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, 'Datos de perfil actualizados con éxito')}>
                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Nombre Completo</legend>
                  <input 
                    type="text" 
                    defaultValue="Edwin Alexis Silva Sandoval" 
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </fieldset>

                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Correo Electrónico</legend>
                  <input 
                    type="email" 
                    defaultValue="edwin.silva@sena.edu.co" 
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </fieldset>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                    <legend className="text-xs font-semibold text-slate-300">Teléfono</legend>
                    <input 
                      type="tel" 
                      defaultValue="6028200000"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                    <legend className="text-xs font-semibold text-slate-300">Celular</legend>
                    <input 
                      type="tel" 
                      defaultValue="3123456789" 
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </fieldset>
                </section>

                <button 
                  type="submit" 
                  className="mt-2 py-3 px-6 bg-teal-600 text-white font-bold rounded-xl text-sm hover:bg-teal-500 transition-colors shadow-lg border border-teal-500 w-full md:w-fit"
                >
                  Actualizar Datos
                </button>
              </form>
            </article>

            {/* Tarjeta 2: Seguridad */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🔒</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Seguridad</h3>
                  <p className="text-xs text-slate-400">Modifica tus credenciales de acceso para proteger tu cuenta.</p>
                </section>
              </header>

              <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, 'Contraseña modificada correctamente')}>
                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Contraseña Actual</legend>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </fieldset>

                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Nueva Contraseña</legend>
                  <input 
                    type="password" 
                    placeholder="Mínimo 8 caracteres" 
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </fieldset>

                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Confirmar Contraseña</legend>
                  <input 
                    type="password" 
                    placeholder="Repita la nueva contraseña" 
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </fieldset>

                <button 
                  type="submit" 
                  className="mt-2 py-3 px-6 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-500 transition-colors shadow-lg border border-emerald-500 w-full md:w-fit"
                >
                  Cambiar Contraseña
                </button>
              </form>
            </article>

            {/* Tarjeta 3: Dispositivos Periféricos */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">📷</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Dispositivos Periféricos</h3>
                  <p className="text-xs text-slate-400">Vincula y selecciona las fuentes de hardware activas.</p>
                </section>
              </header>

              <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, 'Periféricos guardados correctamente')}>
                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Cámara de Entrada</legend>
                  <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors">
                    <option value="integrada">Cámara Web Integrada</option>
                    <option value="usb" defaultValue>Sensor de Gafas Inteligentes (USB)</option>
                    <option value="externa">Cámara Secundaria Auxiliar</option>
                  </select>
                </fieldset>

                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Micrófono de Entrada</legend>
                  <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 transition-colors">
                    <option value="normal">Micrófono por Defecto (Analógico)</option>
                    <option value="usb" defaultValue>Micrófono de Diadema (USB Audio)</option>
                  </select>
                </fieldset>

                <button 
                  type="submit" 
                  className="mt-2 py-3 px-6 bg-teal-600 text-white font-bold rounded-xl text-sm hover:bg-teal-500 transition-colors shadow-lg border border-teal-500 w-full md:w-fit"
                >
                  Guardar Periféricos
                </button>
              </form>
            </article>

            {/* Tarjeta 4: Voz y Lectura */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🔊</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Voz y Lectura</h3>
                  <p className="text-xs text-slate-400">Configura los parámetros de la síntesis y el texto traducido.</p>
                </section>
              </header>

              <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, 'Preferencias de voz guardadas')}>
                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Tipo de Voz Narrativa</legend>
                  <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
                    <option value="mujer" defaultValue>Voz Femenina (Sintetizador Estándar)</option>
                    <option value="hombre">Voz Masculina (Sintetizador Estándar)</option>
                  </select>
                </fieldset>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                    <legend className="text-xs font-semibold text-slate-300">Velocidad Narración</legend>
                    <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
                      <option value="0.75">Lenta (0.75x)</option>
                      <option value="1.0" defaultValue>Normal (1.0x)</option>
                      <option value="1.25">Rápida (1.25x)</option>
                    </select>
                  </fieldset>

                  <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                    <legend className="text-xs font-semibold text-slate-300">Tamaño Texto Translation</legend>
                    <select className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
                      <option value="14">Pequeño (14px)</option>
                      <option value="16" defaultValue>Medio (16px)</option>
                      <option value="20">Grande (20px)</option>
                    </select>
                  </fieldset>
                </section>

                <button 
                  type="submit" 
                  className="mt-2 py-3 px-6 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-500 transition-colors shadow-lg border border-emerald-500 w-full md:w-fit"
                >
                  Aplicar Preferencias
                </button>
              </form>
            </article>

            {/* Tarjeta 5: Optimización de IA (Llamando al componente atómico) */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-teal-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">⚙️</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Optimización de IA</h3>
                  <p className="text-xs text-slate-400">Elige el rendimiento del modelo de Lengua de Señas Colombiana.</p>
                </section>
              </header>

              <AiOptimizationSelector />
            </article>

            {/* Tarjeta 6: Tema del Sistema */}
            <article className="flex flex-col gap-6 p-6 md:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <header className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">🌓</span>
                <section className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Tema del Sistema</h3>
                  <p className="text-xs text-slate-400">Cambia la apariencia estética de los paneles entre los modos integrados.</p>
                </section>
              </header>

              <form 
                id="form-selector-tema" 
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  localStorage.setItem('tema-sinatex-glasses', tema);
                  alert('Apariencia guardada con éxito');
                }}
              >
                <fieldset className="flex flex-col gap-1.5 border-none p-0 m-0">
                  <legend className="text-xs font-semibold text-slate-300">Tema de Pantalla</legend>
                  <select 
                    id="selector-tema-global" 
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="oscuro">Modo Oscuro (Predeterminado Cyberpunk)</option>
                    <option value="claro">Modo Claro (Contraste Alto)</option>
                  </select>
                </fieldset>

                <button 
                  type="submit" 
                  className="mt-2 py-3 px-6 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-500 transition-colors shadow-lg border border-emerald-500 w-full md:w-fit"
                >
                  Guardar Apariencia
                </button>
              </form>
            </article>

          </section>
        </main>

      </section>
    </>
  );
}