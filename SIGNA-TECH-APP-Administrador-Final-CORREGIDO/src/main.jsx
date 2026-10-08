import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./styles/index.css";
import Aplicacion from "./Aplicacion.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Aplicacion />
    </StrictMode>
);