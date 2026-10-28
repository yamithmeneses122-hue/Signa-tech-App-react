# SIGNA-TECH-APP — Next.js

Migración a Next.js App Router basada en los módulos existentes.

## Requisitos
- Node.js 20.9 o superior
- npm

## Instalar y ejecutar
```bash
npm install
npm run dev
```
Abre http://localhost:3000.

## Compilar para producción
```bash
npm run build
npm start
```

## Organización
- `src/app`: rutas y layouts de Next.js.
- `src/Features`: módulos originales por rol.
- `src/componentes`: componentes compartidos.
- `src/lib/router-compat.jsx`: adaptador temporal de navegación para imports heredados de React Router.

La compatibilidad de navegación es inicial; las integraciones con backend, autenticación, cámara, voz y modelos de IA deben verificarse en el entorno local. No se afirma que el build haya sido probado desde este entorno.
