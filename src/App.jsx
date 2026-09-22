import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './Features/Operador/Vistas/HomeView';
import VozATextoView from './Features/Operador/Vistas/VozATextoView';
import TextoAVozView from './Features/Operador/Vistas/TextoAVozView';
import DiccionarioView from './Features/Operador/Vistas/DiccionarioView';
import ConfiguracionView from './Features/Operador/Vistas/ConfiguracionView';
import CameraDetectionView from './Features/Operador/Vistas/CameraDetectionView';
import AvatarView from './Features/Operador/Vistas/AvatarView';

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/inicio" element={<HomeView />} />
          <Route path="/voz-a-texto" element={<VozATextoView />} />
          <Route path="/texto-voz" element={<TextoAVozView />} />
          <Route path="/diccionario" element={<DiccionarioView />} />
          <Route path="/configuracion" element={<ConfiguracionView />} />
          <Route path="/camara" element={<CameraDetectionView />} />
          <Route path="/avatar" element={<AvatarView />} />
        </Routes>
      </main>
    </>
  );
}