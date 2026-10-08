import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// ==========================================
// PÚBLICO
// ==========================================
import DisenoEncabezadoInicio from "../Features/Public/Vistas/DisenoEncabezadoInicio";
import DisenoEncabezadoProducto from "../Features/Public/Vistas/DisenoEncabezadoProducto";
import VistaInicio from "../Features/Public/Vistas/VistaInicio";
import VistaProducto from "../Features/Public/Vistas/VistaProducto";
import VistaSoporte from "../Features/Public/Vistas/VistaSoporte";

// ==========================================
// AUTENTICACIÓN
// ==========================================
import InicioSesionVista from "../Features/Authentication/Vistas/InicioSesionVista";
import NuevaCuentaVista from "../Features/Authentication/Vistas/NuevaCuentaVista";
import ContrasenaVista from "../Features/Authentication/Vistas/ContrasenaVista";

// ==========================================
// ADMINISTRADOR
// ==========================================
import PanelAdministracion from "../Features/Administrador/Vistas/PanelAdministracion";
import GestionUsuarios from "../Features/Administrador/Vistas/GestionUsuarios";
import GestionRoles from "../Features/Administrador/Vistas/GestionRoles";
import DiccionarioAdministracion from "../Features/Administrador/Vistas/DiccionarioAdministracion";
import AprobacionSenas from "../Features/Administrador/Vistas/AprobacionSenas";
import Configuracion from "../Features/Administrador/Vistas/Configuracion";

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
} from "../Features/Interprete/Vistas/vista";

// ==========================================
// OPERADOR
// ==========================================
import VistaInicioOperador from "../Features/Operador/Vistas/VistaInicio";
import VistaTextoAVoz from "../Features/Operador/Vistas/VistaTextoAVoz";
import VistaVozATexto from "../Features/Operador/Vistas/VistaVozATexto";
import VistaDeteccionCamara from "../Features/Operador/Vistas/VistaDeteccionCamara";
import VistaAvatar from "../Features/Operador/Vistas/VistaAvatar";
import VistaDiccionario from "../Features/Operador/Vistas/VistaDiccionario";
import VistaConfiguracion from "../Features/Operador/Vistas/VistaConfiguracion";

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ==========================================
                    PÁGINA PÚBLICA
                ========================================== */}
                <Route element={<DisenoEncabezadoInicio />}>
                    <Route path="/" element={<VistaInicio />} />
                </Route>

                {/* ==========================================
                    PRODUCTO Y SOPORTE
                ========================================== */}
                <Route element={<DisenoEncabezadoProducto />}>
                    <Route path="/product" element={<VistaProducto />} />
                    <Route path="/support" element={<VistaSoporte />} />
                </Route>

                {/* ==========================================
                    AUTENTICACIÓN
                ========================================== */}
                <Route path="/login" element={<InicioSesionVista />} />
                <Route path="/crear-cuenta" element={<NuevaCuentaVista />} />
                <Route path="/recuperar-contrasena" element={<ContrasenaVista />} />

                {/* ==========================================
                    ADMINISTRADOR
                ========================================== */}
                {/* Entrada utilizada por InicioSesionComponente */}
                <Route
                    path="/administrador"
                    element={<Navigate to="/inicio_admin" replace />}
                />
                <Route path="/inicio_admin" element={<PanelAdministracion />} />
                <Route path="/gestion_usuarios" element={<GestionUsuarios />} />
                <Route path="/gestion_roles" element={<GestionRoles />} />
                <Route path="/diccionario_admin" element={<DiccionarioAdministracion />} />
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
                <Route path="/operador" element={<VistaInicioOperador />} />
                <Route path="/texto-voz" element={<VistaTextoAVoz />} />
                <Route path="/voz-a-texto" element={<VistaVozATexto />} />
                <Route path="/camara" element={<VistaDeteccionCamara />} />
                <Route path="/diccionario" element={<VistaDiccionario />} />
                <Route path="/avatar" element={<VistaAvatar />} />
                <Route path="/configuracion" element={<VistaConfiguracion />} />

                {/* ==========================================
                    RUTA NO ENCONTRADA
                ========================================== */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}