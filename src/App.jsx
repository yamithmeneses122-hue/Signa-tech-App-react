import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HeaderHomeLayout from "./Routes/HeaderHome";
import HeaderProductoLayout from "./Routes/HeaderProducto";
import HomeView from "./Features/Public/view/Homeview";
import ProductView from "./Features/Public/view/Productview";
import SupportView from "./Features/Public/view/SupportView";
import interpreterRoutes from "./Features/Interpreter/InterpreterRoutes";
import OperatorHomeView from "./Features/Operador/Vistas/HomeView";
import VozATextoView from "./Features/Operador/Vistas/VozATextoView";
import TextoAVozView from "./Features/Operador/Vistas/TextoAVozView";
import DiccionarioView from "./Features/Operador/Vistas/DiccionarioView";
import ConfiguracionView from "./Features/Operador/Vistas/ConfiguracionView";
import CameraDetectionView from "./Features/Operador/Vistas/CameraDetectionView";
import AvatarView from "./Features/Operador/Vistas/AvatarView";
import DashboardAdmin from "./features/administrador/views/DashboardAdmin";
import GestionUsuarios from "./features/administrador/views/GestionUsuarios";
import GestionRoles from "./features/administrador/views/GestionRoles";
import DiccionarioAdmin from "./features/administrador/views/DiccionarioAdmin";
import AprobacionSenas from "./features/administrador/views/AprobacionSenas";
import ConfiguracionAdmin from "./features/administrador/views/Configuracion";

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

        {interpreterRoutes}

        <Route path="/inicio" element={<OperatorHomeView />} />
        <Route path="/voz-a-texto" element={<VozATextoView />} />
        <Route path="/texto-voz" element={<TextoAVozView />} />
        <Route path="/diccionario" element={<DiccionarioView />} />
        <Route path="/configuracion" element={<ConfiguracionView />} />
        <Route path="/camara" element={<CameraDetectionView />} />
        <Route path="/avatar" element={<AvatarView />} />

        <Route path="/inicio_admin" element={<DashboardAdmin />} />
        <Route path="/gestion_usuarios" element={<GestionUsuarios />} />
        <Route path="/gestion_roles" element={<GestionRoles />} />
        <Route path="/diccionario_admin" element={<DiccionarioAdmin />} />
        <Route path="/aprobacion_senas" element={<AprobacionSenas />} />
        <Route path="/configuracion_admin" element={<ConfiguracionAdmin />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
