import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-slate-900 border-r border-slate-800 text-slate-200 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Encabezado del Menú */}
        <header className="p-6 border-b border-slate-800 flex flex-col gap-1">
          <h2 className="text-xl font-bold tracking-wider text-teal-400 font-['Montserrat']">SIGNA-TECH</h2>
          <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase">PANEL OPERADOR</p>
        </header>

        {/* Navegación Principal */}
        <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Navegación principal">
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/inicio" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-teal-600/20 text-teal-300 border border-teal-500/30 transition-colors">
                <i className="fa-solid fa-chart-pie w-5 text-center"></i>
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/texto-voz" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-volume-high w-5 text-center"></i>
                <span>Texto a Voz</span>
              </Link>
            </li>
            <li>
              <Link to="/voz-a-texto" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-microphone w-5 text-center"></i>
                <span>Voz a Texto</span>
              </Link>
            </li>
            <li>
              <Link to="/camara" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-camera w-5 text-center"></i>
                <span>Detección Cámara</span>
              </Link>
            </li>
            <li>
              <Link to="/diccionario-operador" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-book w-5 text-center"></i>
                <span>Diccionario LSC</span>
              </Link>
            </li>
            <li>
              <Link to="/avatar" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-user w-5 text-center"></i>
                <span>Avatar</span>
              </Link>
            </li>
            <li>
              <Link to="/configuracion-operador" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <i className="fa-solid fa-gear w-5 text-center"></i>
                <span>Configuración</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Pie de página del Sidebar (Logout) */}
        <footer className="p-4 border-t border-slate-800">
          <Link 
            to="/" 
            className="flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
            onClick={(e) => {
              if(!window.confirm('¿Desea cerrar la sesión operativa?')) {
                e.preventDefault();
              }
            }}
          >
            Cerrar Sesión
          </Link>
        </footer>

      </aside>
    </>
  );
}