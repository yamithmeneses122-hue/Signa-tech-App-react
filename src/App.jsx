import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardAdmin from './features/administrador/views/DashboardAdmin';
import GestionUsuarios from './features/administrador/views/GestionUsuarios';
import GestionRoles from './features/administrador/views/GestionRoles';
import DiccionarioAdmin from './features/administrador/views/DiccionarioAdmin';
import AprobacionSenas from './features/administrador/views/AprobacionSenas';
import Configuracion from './features/administrador/views/Configuracion';

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