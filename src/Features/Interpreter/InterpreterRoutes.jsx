import { Route } from "react-router-dom";
import { InterpreterLayout } from "./Componentes/component";
import {
  Interprete,
  Validar,
  Registrar,
  Corregir,
  Historial,
  Estadisticas,
  Perfil
} from "./Vistas/vista";

const interpreterRoutes = (
  <Route path="/interprete" element={<InterpreterLayout />}>
    <Route index element={<Interprete />} />
    <Route path="validar" element={<Validar />} />
    <Route path="registrar" element={<Registrar />} />
    <Route path="corregir" element={<Corregir />} />
    <Route path="historial" element={<Historial />} />
    <Route path="estadisticas" element={<Estadisticas />} />
    <Route path="perfil" element={<Perfil />} />
  </Route>
);

export default interpreterRoutes;
