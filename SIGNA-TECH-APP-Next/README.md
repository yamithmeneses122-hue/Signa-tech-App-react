# SIGNA-TECH-APP — migración a Next.js

Esta carpeta contiene la migración inicial hacia Next.js App Router y conserva los módulos originales de `src/Features` para evitar reemplazar sus interfaces por ejemplos.

## Requisitos
- Node.js compatible con Next.js 16
- npm

## Ejecutar
```bash
cd SIGNA-TECH-APP-Next
npm install
npm run dev
```

## Estado de la migración
Esta migración requiere validación local con `npm run build` y pruebas manuales de navegación, formularios, permisos de cámara y APIs de voz. La autenticación actual del proyecto original utiliza almacenamiento del navegador y una función local; no equivale a autenticación segura con backend. Las vistas de voz a texto y la detección de cámara deben verificarse: conectar la cámara no demuestra que exista un modelo real de interpretación de LSC.
