const ROLES_POR_CORREO = {
  "c.satizabal@signatech.com": { rol: "interprete", ruta: "/interprete" },
  "e.silva@signatech.com": { rol: "operador", ruta: "/inicio" },
  "a.silva@signatech.com": { rol: "operador", ruta: "/inicio" },
};

export function obtenerRutaPorCorreo(correo) {
  const normalizado = correo.trim().toLowerCase();
  return ROLES_POR_CORREO[normalizado]?.ruta ?? null;
}

export function obtenerRolPorCorreo(correo) {
  const normalizado = correo.trim().toLowerCase();
  return ROLES_POR_CORREO[normalizado]?.rol ?? null;
}

export default obtenerRutaPorCorreo;
