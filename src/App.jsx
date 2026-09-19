import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardAdmin from './components/shared/DashboardAdmin';
import GestionUsuarios from './components/shared/GestionUsuarios';
import GestionRoles from './components/shared/GestionRoles';
import DiccionarioAdmin from './components/shared/DiccionarioAdmin';
import AprobacionSenas from './components/shared/AprobacionSenas';
import Configuracion from './components/shared/Configuracion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio_admin" replace />} />
        <Route path="/inicio_admin" element={<DashboardAdmin />} />
        <Route path="/gestion_usuarios" element={<GestionUsuarios />} />
        <Route path="/gestion_roles" element={<GestionRoles />} />
        <Route path="/diccionario" element={<DiccionarioAdmin />} />
        <Route path="/aprobacion_senas" element={<AprobacionSenas />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;