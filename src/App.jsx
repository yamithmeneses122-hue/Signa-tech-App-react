import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./Routes/PublicLayout";
import HomeView from "./Features/Public/view/Homeview";
import LoginView from "./Features/Authentication/Vistas/LoginView";
import ContraseñaView from "./Features/Authentication/Vistas/ContraseñaView";
import Nv_Cuenta_View from "./Features/Authentication/Vistas/Nv_Cuenta_View";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<PublicLayout />}>

                    <Route
                        path="/"
                        element={<HomeView />}
                    />

                    <Route
                        path="/home"
                        element={<HomeView />}
                    />

                </Route>

                <Route path="/login" element={<LoginView />} />
                <Route path="/recuperar-contrasena" element={<ContraseñaView />} />
                <Route path="/crear-cuenta" element={<Nv_Cuenta_View />} />

                {/* Si entran a una ruta inexistente */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
