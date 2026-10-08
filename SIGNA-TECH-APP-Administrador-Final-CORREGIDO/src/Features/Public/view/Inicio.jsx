import Presentacion from "../components/Presentacion.jsx";
import Estadisticas from "../components/Estadisticas.jsx";
import SeccionProblema from "../components/SeccionProblema.jsx";
import FlujoComunicacion from "../components/FlujoComunicacion.jsx";
import SeccionTecnologia from "../components/SeccionTecnologia.jsx";
import VistaPreviaProducto from "../components/VistaPreviaProducto.jsx";
import TarjetaCaracteristica from "../components/TarjetaCaracteristica.jsx";
import ComoFunciona from "../components/ComoFunciona.jsx";
import CasosUso from "../components/CasosUso.jsx";
import SeccionConfianza from "../components/SeccionConfianza.jsx";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.jsx";
import PanelDescarga from "../components/PanelDescarga.jsx";
import AccionFinal from "../components/AccionFinal.jsx";

export default function Inicio() {
    return (
        <>
            <Presentacion />
            <Estadisticas />
            <SeccionProblema />
            <FlujoComunicacion />
            <SeccionTecnologia />
            <VistaPreviaProducto />
            <TarjetaCaracteristica />
            <ComoFunciona />
            <CasosUso />
            <SeccionConfianza />
            <PreguntasFrecuentes />
            <PanelDescarga />
            <AccionFinal />
        </>
    );
}