import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./Routes/PublicLayout";
import HomeView from "./Features/Public/view/Homeview";

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