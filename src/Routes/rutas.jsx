import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderHomeLayout from "../Features/Public/view/HeaderHomeLayout";
import HeaderProductoLayout from "../Features/Public/view/HeaderProductoLayout.jsx";
import HomeView from "../Features/Public/view/Homeview.jsx";
import ProductView from "../Features/Public/view/Productview.jsx";
import SupportView from "../Features/Public/view/SupportView.jsx";

export default function Rutas() {
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

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

