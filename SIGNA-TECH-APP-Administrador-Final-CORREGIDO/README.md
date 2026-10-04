# SIGNA-TECH-APP — versión corregida

## Corrección principal
Se corrigieron las rutas/importaciones que impedían `vite build`:
- `HeaderProductoLayout` ahora se importa desde `Features/Public/view/HeaderProductoLayout.jsx`.
- `Homeview.jsx`, `Productview.jsx` y `SupportView.jsx` usan rutas correctas desde `src/Routes/rutas.jsx`.
- Los layouts ahora apuntan correctamente a `src/components/shared/`.

## Rutas
- `/` — Home
- `/home` — Home
- `/product` — Producto
- `/support` — Soporte
- cualquier ruta inexistente — vuelve a `/`

## Ejecutar en Windows
Desde la carpeta del proyecto:
1. `npm install`
2. `npm run dev`

Para validar producción:
1. `npm run build`
2. `npm run preview`

## Importante
El botón "Iniciar sesión" apunta actualmente a `/login`, pero este ZIP no incluye una vista `LoginView`; por eso esa ruta cae al fallback `/`. La navegación `/`, `/product` y `/support` sí queda configurada correctamente.
