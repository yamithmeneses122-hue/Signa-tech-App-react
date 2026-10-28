# SIGNA-TECH-APP — migración a Next.js App Router

Esta carpeta es una copia de trabajo separada del proyecto React + Vite original. La rama `angela` y su carpeta original se mantienen sin modificar.

## Ejecutar localmente

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
cd SIGNA-TECH-APP-Next
npm install
npm run dev
```

Para validar producción:

```bash
npm run build
npm run start
```

## Rutas creadas en App Router

- Público: `/`, `/home` (redirige a `/`), `/product`, `/support`.
- Autenticación: `/login`, `/crear-cuenta`, `/recuperar-contrasena`.
- Administrador: `/administrador`, `/inicio_admin`, `/gestion_usuarios`, `/gestion_roles`, `/diccionario_admin`, `/aprobacion_senas`, `/configuracion_admin`.
- Intérprete: `/interprete`, `/interprete/validar`, `/interprete/registrar`, `/interprete/corregir`, `/interprete/historial`, `/interprete/perfil`.
- Operador: `/operador`, `/texto-voz`, `/voz-a-texto`, `/camara`, `/diccionario`, `/avatar`, `/configuracion`.

Los módulos originales de `src/Features` se conservan para no reemplazar sus pantallas por componentes de ejemplo. Se adaptaron los enlaces principales y la navegación de los paneles al enrutador de Next.js. Los grupos de rutas entre paréntesis no forman parte de las URL.

## Limitaciones pendientes de verificar

- No se pudo ejecutar `npm install` ni `npm run build` desde este entorno porque no tiene acceso de red al registro de paquetes. Por eso esta entrega no declara una compilación verificada.
- La autenticación original usa una función local y almacenamiento del navegador; no constituye autenticación segura respaldada por un servidor. No se inventó un backend.
- Texto a voz utiliza la API de síntesis de voz del navegador. La vista de voz a texto del original muestra estados de captura, pero debe conectarse y probarse con una implementación real de reconocimiento de voz.
- La vista de cámara solicita permiso y muestra el flujo de vídeo, pero no se encontró una integración demostrada con un modelo de IA para interpretar Lengua de Señas Colombiana. Conectar la cámara no equivale a traducir señas.
- Se deben probar manualmente en el equipo destino los formularios, la navegación entre módulos, los permisos de cámara/micrófono, las rutas directas y los recursos visuales.

## Seguridad

No almacenes contraseñas en texto plano ni agregues secretos a variables `NEXT_PUBLIC_*`. La protección real de rutas privadas requiere autenticación y autorización en servidor o backend.
