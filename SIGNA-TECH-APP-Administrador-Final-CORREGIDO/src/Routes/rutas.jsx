import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// ==========================================
// PÚBLICO
// ==========================================
import HeaderHomeLayout from "../Features/Public/view/HeaderHomeLayout";
import HeaderProductoLayout from "../Features/Public/view/HeaderProductoLayout";
import HomeView from "../Features/Public/view/Homeview";
import ProductView from "../Features/Public/view/Productview";
import SupportView from "../Features/Public/view/SupportView";

// ==========================================
// AUTENTICACIÓN
// ==========================================
import LoginView from "../Features/Authentication/Vistas/LoginView";
import Nv_Cuenta_View from "../Features/Authentication/Vistas/Nv_Cuenta_View";
import ContrasenaView from "../Features/Authentication/Vistas/ContrasenaView";

// ==========================================
// ADMINISTRADOR
// ==========================================
import DashboardAdmin from "../Features/Administrador/views/DashboardAdmin";
import GestionUsuarios from "../Features/Administrador/views/GestionUsuarios";
import GestionRoles from "../Features/Administrador/views/GestionRoles";
import DiccionarioAdmin from "../Features/Administrador/views/DiccionarioAdmin";
import AprobacionSenas from "../Features/Administrador/views/AprobacionSenas";
import Configuracion from "../Features/Administrador/views/Configuracion";

// ==========================================
// INTÉRPRETE
// ==========================================
import InterpreterLayout from "../Features/Interprete/Componentes/InterpreterLayout";
import {
    Interprete,
    Validar,
    Registrar,
    Corregir,
    Historial,
    Perfil,
} from "../Features/Interprete/Vistas/vista";

// ==========================================
// OPERADOR
// ==========================================
import HomeViewOperador from "../Features/Operador/Vistas/HomeView";
import TextoAVozView from "../Features/Operador/Vistas/TextoAVozView";
import VozATextoView from "../Features/Operador/Vistas/VozATextoView";
import CameraDetectionView from "../Features/Operador/Vistas/CameraDetectionView";
import AvatarView from "../Features/Operador/Vistas/AvatarView";
import DiccionarioView from "../Features/Operador/Vistas/DiccionarioView";
import ConfiguracionView from "../Features/Operador/Vistas/ConfiguracionView";

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ==========================================
                    PÁGINA PÚBLICA
                ========================================== */}
                <Route element={<HeaderHomeLayout />}>
                    <Route path="/" element={<HomeView />} />
                </Route>

                {/* ==========================================
                    PRODUCTO Y SOPORTE
                ========================================== */}
                <Route element={<HeaderProductoLayout />}>
                    <Route path="/product" element={<ProductView />} />
                    <Route path="/support" element={<SupportView />} />
                </Route>

                {/* ==========================================
                    AUTENTICACIÓN
                ========================================== */}
                <Route path="/login" element={<LoginView />} />
                <Route path="/crear-cuenta" element={<Nv_Cuenta_View />} />
                <Route path="/recuperar-contrasena" element={<ContrasenaView />} />

                {/* ==========================================
                    ADMINISTRADOR
                ========================================== */}
                {/* Entrada utilizada por LoginComponent */}
                <Route
                    path="/administrador"
                    element={<Navigate to="/inicio_admin" replace />}
                />
                <Route path="/inicio_admin" element={<DashboardAdmin />} />
                <Route path="/gestion_usuarios" element={<GestionUsuarios />} />
                <Route path="/gestion_roles" element={<GestionRoles />} />
                <Route path="/diccionario_admin" element={<DiccionarioAdmin />} />
                <Route path="/aprobacion_senas" element={<AprobacionSenas />} />
                <Route path="/configuracion_admin" element={<Configuracion />} />

                {/* ==========================================
                    INTÉRPRETE
                ========================================== */}
                <Route path="/interprete" element={<InterpreterLayout />}>
                    <Route index element={<Interprete />} />
                    <Route path="validar" element={<Validar />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="corregir" element={<Corregir />} />
                    <Route path="historial" element={<Historial />} />
                    <Route path="perfil" element={<Perfil />} />
                </Route>

                {/* ==========================================
                    OPERADOR
                ========================================== */}
                <Route path="/operador" element={<HomeViewOperador />} />
                <Route path="/texto-voz" element={<TextoAVozView />} />
                <Route path="/voz-a-texto" element={<VozATextoView />} />
                <Route path="/camara" element={<CameraDetectionView />} />
                <Route path="/diccionario" element={<DiccionarioView />} />
                <Route path="/avatar" element={<AvatarView />} />
                <Route path="/configuracion" element={<ConfiguracionView />} />

                {/* ==========================================
                    RUTA NO ENCONTRADA
                ========================================== */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}