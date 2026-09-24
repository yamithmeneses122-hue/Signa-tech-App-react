import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HeaderHomeLayout from "./Routes/HeaderHome";
import HeaderProductoLayout from "./Routes/HeaderProducto";
import HomeView from "./Features/Public/view/Homeview";
import ProductView from "./Features/Public/view/Productview";
import SupportView from "./Features/Public/view/SupportView";

import LoginView from "./Features/Authentication/Vistas/LoginView";
import ContraseñaView from "./Features/Authentication/Vistas/ContraseñaView";
import Nv_Cuenta_View from "./Features/Authentication/Vistas/Nv_Cuenta_View";

import DashboardAdmin from "./features/administrador/views/DashboardAdmin";
import GestionUsuarios from "./features/administrador/views/GestionUsuarios";
import GestionRoles from "./features/administrador/views/GestionRoles";
import DiccionarioAdmin from "./features/administrador/views/DiccionarioAdmin";
import AprobacionSenas from "./features/administrador/views/AprobacionSenas";
import Configuracion from "./features/administrador/views/Configuracion";

import OperadorHome from "./Features/Operador/Vistas/HomeView";
import VozATextoView from "./Features/Operador/Vistas/VozATextoView";
import TextoAVozView from "./Features/Operador/Vistas/TextoAVozView";
import DiccionarioView from "./Features/Operador/Vistas/DiccionarioView";
import ConfiguracionView from "./Features/Operador/Vistas/ConfiguracionView";
import CameraDetectionView from "./Features/Operador/Vistas/CameraDetectionView";
import AvatarView from "./Features/Operador/Vistas/AvatarView";

import interpreterRoutes from "./Features/Interpreter/InterpreterRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderHomeLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
        </Route>

        <Route element={<HeaderProductoLayout />}>
          <Route path="/product" element={<ProductView />} />
          <Route path="/support" element={<SupportView />} />
        </Route>

        <Route path="/login" element={<LoginView />} />
        <Route path="/recuperar-contrasena" element={<ContraseñaView />} />
        <Route path="/crear-cuenta" element={<Nv_Cuenta_View />} />

        <Route path="/inicio_admin" element={<DashboardAdmin />} />
        <Route path="/gestion_usuarios" element={<GestionUsuarios />} />
        <Route path="/gestion_roles" element={<GestionRoles />} />
        <Route path="/diccionario" element={<DiccionarioAdmin />} />
        <Route path="/aprobacion_senas" element={<AprobacionSenas />} />
        <Route path="/configuracion" element={<Configuracion />} />

        <Route path="/inicio" element={<OperadorHome />} />
        <Route path="/voz-a-texto" element={<VozATextoView />} />
        <Route path="/texto-voz" element={<TextoAVozView />} />
        <Route path="/diccionario-operador" element={<DiccionarioView />} />
        <Route path="/configuracion-operador" element={<ConfiguracionView />} />
        <Route path="/camara" element={<CameraDetectionView />} />
        <Route path="/avatar" element={<AvatarView />} />

        {interpreterRoutes}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
