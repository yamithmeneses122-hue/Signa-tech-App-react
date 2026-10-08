import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// ==========================================
// PÚBLICO
// ==========================================
import DisenoInicio from "../Features/Public/view/DisenoInicio";
import DisenoProducto from "../Features/Public/view/DisenoProducto";
import Inicio from "../Features/Public/view/Inicio";
import Producto from "../Features/Public/view/Producto";
import Soporte from "../Features/Public/view/Soporte";

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
import DisenoInterprete from "../Features/Interprete/Componentes/DisenoInterprete";
import {
    Interprete,
    Validar,
    Registrar,
    Corregir,
    Historial,
    Perfil,
} from "../Features/Interprete/Vistas/vistas";

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
                <Route element={<DisenoInicio />}>
                    <Route path="/" element={<Inicio />} />
                </Route>

                {/* ==========================================
                    PRODUCTO Y SOPORTE
                ========================================== */}
                <Route element={<DisenoProducto />}>
                    <Route path="/product" element={<Producto />} />
                    <Route path="/support" element={<Soporte />} />
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
                <Route path="/interprete" element={<DisenoInterprete />}>
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