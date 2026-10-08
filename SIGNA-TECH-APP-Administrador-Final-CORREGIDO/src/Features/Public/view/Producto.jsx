import EncabezadoProducto from "../components/EncabezadoProducto.jsx";
import CaracteristicasProducto from "../components/CaracteristicasProducto.jsx";
import PanelDescargaProducto from "../components/PanelDescargaProducto.jsx";

export default function Producto() {
    return (
        <>
            <EncabezadoProducto />
            <CaracteristicasProducto />
            <PanelDescargaProducto />
        </>
    );
}