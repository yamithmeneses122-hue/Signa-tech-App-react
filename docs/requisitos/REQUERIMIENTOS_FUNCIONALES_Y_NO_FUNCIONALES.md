# Especificación de requisitos — SIGNA-TECH-APP

**Documento:** Requisitos funcionales y no funcionales  
**Versión:** 1.0 — propuesta para validación del Product Owner  
**Fecha:** 11 de noviembre de 2026  
**Proyecto:** SIGNA-TECH-APP — Lenguaje de Señas Colombiano Tecnológico  
**Rama de referencia:** `Next_Proyecto`  
**Metodología:** Scrum  
**Estado:** Línea base propuesta; requiere revisión y aprobación del Product Owner y del equipo.

---

## 1. Propósito

Definir de manera clara, verificable y priorizable lo que SIGNA-TECH-APP debe ofrecer y las condiciones de calidad con las que debe operar. Este documento sirve como base para refinar el Product Backlog, redactar historias de usuario, establecer criterios de aceptación, planificar Sprints y validar entregables.

Los requisitos describen el comportamiento esperado del producto. **No certifican que una funcionalidad ya esté implementada.** La existencia de una pantalla, ruta o prototipo no demuestra por sí sola que el proceso esté conectado a un backend, a un servicio de voz o a un modelo de inteligencia artificial.

## 2. Visión y alcance del producto

SIGNA-TECH-APP es un prototipo web y móvil de comunicación bidireccional asistida por inteligencia artificial, orientado a reducir barreras de comunicación entre personas con dificultad de comunicación auditiva y de habla y personas oyentes.

El alcance funcional se concentra en comunicaciones básicas y educativas en Lengua de Señas Colombiana (LSC), texto y voz:

- **Señas → texto y, cuando esté habilitado, audio.**
- **Voz → texto.**
- **Texto → audio.**
- **Texto o voz → apoyo visual de señas disponibles en el diccionario**, sin prometer traducción gramatical completa de LSC.
- Gestión y validación del diccionario por parte de intérpretes.
- Administración de usuarios, roles, permisos, reportes y auditoría.

La herramienta es de apoyo para expresiones cotidianas y aprendizaje. No reemplaza a un intérprete profesional ni debe presentarse como traductor certificado de conversaciones complejas.

### 2.1 Roles del producto

| Rol | Responsabilidad principal |
|---|---|
| Administrador | Gestionar usuarios, roles, permisos, configuración, reportes y auditoría. |
| Intérprete | Registrar, revisar, validar, rechazar y corregir contenido del diccionario y traducciones que requieran revisión. |
| Operador con dificultad de comunicación auditiva o del habla | Utilizar cámara, señas, texto, diccionario y herramientas de comunicación. |
| Operador oyente | Utilizar voz, texto, audio y apoyos visuales para comunicarse. |

**Decisión pendiente de normalización:** el SQL/procedimiento existente contempla los roles «Usuario Sordo» e «Invitado» para autorregistro, mientras que la definición funcional del producto utiliza «operador con discapacidad» y «operador oyente». El Product Owner debe aprobar los nombres definitivos y su correspondencia antes de ajustar roles, permisos, datos semilla o procedimientos. No se deben crear roles duplicados por diferencias de nombre.

### 2.2 Fuera del alcance de esta línea base

- Interpretación profesional o certificada de conversaciones complejas en LSC.
- Sustituir intérpretes humanos.
- Diagnosticar condiciones médicas o inferir la condición de una persona.
- Garantizar traducción perfecta, precisión universal o funcionamiento sin conexión si no existe una implementación validada.
- Entrenar modelos de IA desde el panel administrativo como función obligatoria del prototipo. La administración de metadatos de modelos y datasets puede mantenerse como soporte técnico.
- Almacenar vídeo continuo de cámara por defecto.

## 3. Convenciones de priorización y estado

**Prioridad MoSCoW:**
- **Must:** indispensable para que el flujo principal sea utilizable y seguro.
- **Should:** importante para completar una experiencia consistente; puede planificarse después del núcleo.
- **Could:** mejora valiosa que depende de capacidad, validación o disponibilidad técnica.

**Estado inicial:** todos los requisitos se consideran **propuestos / pendientes de validación**. El equipo debe actualizar su estado real en el Product Backlog: pendiente, en desarrollo, implementado, probado o bloqueado. No se debe marcar como terminado únicamente porque exista una interfaz.

---

# 4. Requisitos funcionales (RF)

## Épica E01 — Identidad, acceso y permisos

### RF-01 — Registro de operadores
**Prioridad:** Must  
El sistema debe permitir que una persona cree una cuenta de operador mediante un formulario con nombre, correo y contraseña, validando los campos obligatorios y evitando correos duplicados. El autorregistro solo podrá asignar los perfiles de operador aprobados por el Product Owner; nunca podrá crear cuentas de administrador o intérprete.

**Criterios de aceptación:**
- Si falta un dato obligatorio, el sistema informa qué campo debe corregirse.
- Si el correo ya existe, no crea una segunda cuenta.
- El usuario no puede seleccionar ni autoasignarse un rol interno privilegiado.
- Al completar el registro, el sistema informa el resultado y registra el evento de auditoría cuando corresponda.

### RF-02 — Inicio y cierre de sesión
**Prioridad:** Must  
El sistema debe permitir iniciar sesión con credenciales válidas, identificar el rol autorizado y cerrar la sesión de forma segura.

**Criterios de aceptación:**
- Credenciales incorrectas no permiten el acceso.
- Después del inicio de sesión, el usuario accede únicamente a las opciones de su rol.
- Al cerrar sesión, la sesión queda invalidada y las rutas privadas dejan de estar disponibles.

### RF-03 — Recuperación de contraseña
**Prioridad:** Should  
El sistema debe ofrecer un flujo de recuperación de contraseña mediante un mecanismo verificable y seguro, sin revelar si un correo está registrado.

**Criterios de aceptación:**
- La respuesta inicial no expone la existencia de una cuenta.
- El enlace o código de recuperación tiene vencimiento y un solo uso.
- La nueva contraseña reemplaza la anterior y se invalidan los mecanismos de recuperación utilizados.

### RF-04 — Gestión de usuarios
**Prioridad:** Must  
El administrador debe poder consultar, buscar, visualizar y actualizar los datos permitidos de los usuarios, así como activar, desactivar o bloquear cuentas según las reglas del negocio.

**Criterios de aceptación:**
- Solo un administrador autorizado puede ejecutar estas acciones.
- El sistema confirma la acción y refleja el nuevo estado.
- No se permite que un usuario privilegiado se quite a sí mismo el acceso administrativo si eso deja el sistema sin administrador, salvo procedimiento controlado.

### RF-05 — Gestión de roles y permisos
**Prioridad:** Must  
El administrador debe poder consultar los roles y permisos definidos y gestionar sus asignaciones de acuerdo con una matriz de autorización aprobada.

**Criterios de aceptación:**
- Cada acción protegida valida permisos en el servidor, no solo ocultando botones.
- Los cambios de permisos quedan auditados.
- Un usuario no puede concederse privilegios a sí mismo.

### RF-06 — Perfil del usuario
**Prioridad:** Should  
El usuario autenticado debe poder consultar y actualizar los datos personales que el sistema permita modificar, sin poder alterar su rol ni su estado de seguridad.

## Épica E02 — Comunicación por voz y texto

### RF-07 — Conversión de voz a texto
**Prioridad:** Must  
El operador oyente debe poder activar la captura de voz, visualizar el estado del micrófono y obtener una transcripción textual mediante un servicio o motor de reconocimiento de voz integrado.

**Criterios de aceptación:**
- El sistema solicita permiso antes de usar el micrófono.
- Informa si el permiso fue denegado, el micrófono no está disponible o no se detecta voz.
- La transcripción se muestra para revisión antes de compartirla o utilizarla.
- Si el servicio falla, se informa el error y se permite reintentar.

### RF-08 — Conversión de texto a voz
**Prioridad:** Must  
El usuario debe poder convertir un texto escrito o recibido en salida de audio, utilizando el idioma y la voz disponibles en el dispositivo o servicio configurado.

**Criterios de aceptación:**
- El usuario puede iniciar y detener la reproducción.
- El sistema informa si el dispositivo o navegador no soporta la función.
- El texto se conserva visible mientras se reproduce el audio.

### RF-09 — Envío y visualización de texto
**Prioridad:** Must  
El sistema debe permitir escribir, visualizar y compartir mensajes de texto dentro del flujo de comunicación definido para el prototipo.

**Criterios de aceptación:**
- Se validan mensajes vacíos y límites de longitud definidos.
- El mensaje se muestra de forma legible y con identificación clara de su origen.
- Los errores de envío no se presentan como mensajes enviados correctamente.

### RF-10 — Texto a apoyo visual de señas
**Prioridad:** Should  
El sistema debe buscar términos o expresiones en el diccionario LSC aprobado y mostrar el recurso visual disponible (imagen, vídeo o animación) asociado. Si no existe una equivalencia validada, debe indicarlo y no inventar una seña.

**Criterios de aceptación:**
- Solo se presentan recursos aprobados y activos.
- Se diferencia una coincidencia exacta de una aproximación o de un término no disponible.
- La interfaz aclara que la secuencia de señas disponible es apoyo léxico y no garantiza traducción gramatical completa.

### RF-11 — Comunicación bidireccional asistida
**Prioridad:** Should  
El sistema debe permitir que los operadores utilicen los módulos de voz, texto y recursos visuales como canales complementarios para construir un intercambio básico de mensajes.

**Criterios de aceptación:**
- Se identifica el canal de entrada y el resultado producido.
- El usuario puede revisar el resultado antes de utilizarlo.
- Los fallos de un canal no deben bloquear innecesariamente el uso de los otros canales disponibles.

## Épica E03 — Captura e interpretación de señas

### RF-12 — Acceso controlado a la cámara
**Prioridad:** Must  
El operador debe poder activar y detener la cámara para realizar una captura destinada al reconocimiento de señas, previa autorización del navegador o dispositivo.

**Criterios de aceptación:**
- La cámara no se activa sin una acción del usuario y el permiso correspondiente.
- El usuario puede detener la captura en cualquier momento.
- Se informa si la cámara está bloqueada, no disponible o sin imagen.

### RF-13 — Verificación de condiciones de captura
**Prioridad:** Must  
Antes de procesar una captura, el sistema debe detectar o informar las condiciones de calidad que el modelo o la interfaz puedan comprobar: ausencia de imagen, iluminación baja, imagen borrosa, calidad insuficiente y manos fuera del área de captura.

**Criterios de aceptación:**
- Cada condición identificada produce una orientación concreta para corregirla.
- No se presenta una traducción como válida cuando la captura no cumple las condiciones mínimas configuradas.
- Cuando una condición no pueda detectarse automáticamente, se informa como limitación y no como detección confirmada.

### RF-14 — Reconocimiento de señas LSC
**Prioridad:** Must  
Cuando exista un modelo de reconocimiento integrado y validado, el sistema debe procesar la captura y obtener una seña o secuencia dentro del vocabulario LSC soportado por el proyecto.

**Criterios de aceptación:**
- El sistema utiliza una versión identificable del modelo y un vocabulario/dataset documentado.
- Solo se muestran resultados dentro del alcance del modelo.
- Si no reconoce la seña, debe comunicarlo y permitir repetir la captura.
- El sistema no debe afirmar que reconoce cualquier seña o conversación.

### RF-15 — Presentación del resultado y nivel de confianza
**Prioridad:** Must  
El sistema debe presentar el texto asociado al resultado del reconocimiento y, cuando el modelo entregue una medida calibrada, mostrar el nivel de confianza con una explicación comprensible.

**Criterios de aceptación:**
- Los resultados de confianza baja se marcan como inciertos y solicitan confirmación o nueva captura.
- La confianza no se presenta como porcentaje de exactitud global del sistema.
- El usuario puede corregir o reportar un resultado incorrecto.

### RF-16 — Reproducción de traducción de señas
**Prioridad:** Should  
El sistema debe permitir reproducir mediante audio el texto generado a partir de una seña reconocida, cuando el usuario lo solicite y el dispositivo lo soporte.

## Épica E04 — Diccionario y validación de LSC

### RF-17 — Consulta del diccionario
**Prioridad:** Must  
Los operadores deben poder buscar señas por palabra, categoría o término disponible y consultar su descripción y recurso multimedia aprobado.

**Criterios de aceptación:**
- La búsqueda admite coincidencias y presenta un estado vacío cuando no encuentra resultados.
- No se muestran como aprobados los registros pendientes o rechazados.
- Cada resultado presenta información suficiente para distinguir la seña.

### RF-18 — Registro de señas
**Prioridad:** Should  
El intérprete autorizado debe poder registrar una nueva seña con nombre, descripción, categoría y recurso multimedia, dejando el registro en estado pendiente de validación.

**Criterios de aceptación:**
- Se validan los datos obligatorios y el formato/tamaño de archivos permitido.
- El registro queda asociado a quien lo creó y a su fecha.
- Una seña pendiente no se utiliza como resultado oficial del diccionario.

### RF-19 — Validación, rechazo y corrección de señas
**Prioridad:** Must  
El intérprete autorizado debe poder revisar una seña pendiente, aprobarla o rechazarla con observaciones y corregir la información cuando corresponda.

**Criterios de aceptación:**
- Toda decisión queda asociada al intérprete, fecha y resultado.
- Un rechazo incluye el motivo u observación.
- Solo las señas aprobadas y activas quedan disponibles para consulta y apoyo visual.
- Los cambios relevantes conservan trazabilidad.

## Épica E05 — Historial, retroalimentación y soporte

### RF-20 — Historial de traducciones del operador
**Prioridad:** Should  
El operador debe poder consultar su historial de traducciones y operaciones disponibles, con fecha, canal, resultado y estado de procesamiento, respetando las reglas de privacidad.

**Criterios de aceptación:**
- Cada operador solo consulta sus propios registros.
- Se pueden aplicar filtros básicos por fecha o tipo de operación.
- Los registros fallidos se distinguen de los procesados correctamente.

### RF-21 — Revisión e historial del intérprete
**Prioridad:** Should  
El intérprete debe poder consultar las señas y traducciones que requieren revisión, junto con las observaciones y correcciones relacionadas con su trabajo.

### RF-22 — Retroalimentación sobre traducciones
**Prioridad:** Must  
El sistema debe permitir reportar una traducción incorrecta y, para los roles autorizados, registrar una corrección u observación asociada a la traducción.

**Criterios de aceptación:**
- La retroalimentación queda vinculada al registro correspondiente.
- Se identifica quién la registra y cuándo.
- Solo los roles autorizados pueden registrar correcciones oficiales.
- La corrección no sobrescribe silenciosamente el registro original.

### RF-23 — Reporte de fallas
**Prioridad:** Must  
Cualquier operador autenticado debe poder reportar problemas como cámara bloqueada, ausencia de imagen, manos fuera del encuadre, imagen borrosa, ruido elevado, micrófono no disponible o seña no reconocida.

**Criterios de aceptación:**
- El reporte exige tipo y descripción.
- Se asigna estado inicial pendiente y fecha de creación.
- El usuario puede consultar el estado de su reporte si esa vista está habilitada.

### RF-24 — Gestión de reportes
**Prioridad:** Should  
El administrador debe poder consultar, clasificar, actualizar y cerrar reportes de fallas, conservando su historial de atención.

## Épica E06 — Administración, trazabilidad y seguimiento

### RF-25 — Historial de auditoría
**Prioridad:** Must  
El sistema debe registrar las operaciones sensibles, como inicio/cierre de sesión, registro y cambio de estado de usuarios, modificación de permisos, validación de señas y acciones administrativas.

**Criterios de aceptación:**
- Cada evento registra actor, acción, fecha y contexto permitido.
- Los usuarios ordinarios no pueden alterar ni eliminar los registros de auditoría.
- No se guardan contraseñas, tokens ni secretos en los detalles de auditoría.

### RF-26 — Panel de administración
**Prioridad:** Should  
El administrador debe disponer de una vista resumida de usuarios, señas pendientes, traducciones, reportes y actividad relevante, con datos obtenidos de los registros reales.

**Criterios de aceptación:**
- Cada indicador tiene una definición y fuente de datos identificable.
- No se muestran cifras simuladas como si fueran métricas reales.
- El acceso está restringido al administrador.

### RF-27 — Consulta de modelos y datasets
**Prioridad:** Could  
El personal autorizado debe poder consultar los metadatos de los modelos y datasets registrados, como nombre, versión, estado, fecha y relaciones existentes, sin que ello implique entrenar o desplegar modelos desde la interfaz.

**Criterios de aceptación:**
- Se identifica qué modelo está activo para cada flujo de reconocimiento.
- Se conserva la relación entre modelo, versión y dataset.
- Los cambios de estado quedan auditados.

---

# 5. Requisitos no funcionales (RNF)

Los RNF definen atributos de calidad y restricciones. Los valores numéricos indicados son objetivos iniciales de aceptación para validar con el equipo; deben medirse en un entorno de pruebas representativo antes de convertirse en compromisos de producción.

## RNF-01 — Seguridad de autenticación
**Prioridad:** Must  
Las contraseñas deben almacenarse mediante un algoritmo de hash adaptativo reconocido (preferiblemente Argon2id o bcrypt con configuración vigente), nunca en texto plano ni reversible. La autenticación real y la validación de permisos deben ejecutarse en servidor o backend confiable.

**Verificación:** inspección de implementación y pruebas que confirmen que no se almacenan contraseñas legibles ni se confía únicamente en localStorage/sessionStorage para proteger recursos privados.

## RNF-02 — Autorización por roles
**Prioridad:** Must  
Cada operación y recurso privado debe validar en servidor la identidad, el estado de la cuenta y los permisos requeridos. La interfaz no será el único mecanismo de control.

**Verificación:** pruebas negativas por rol, incluyendo acceso directo a rutas y solicitudes sin autorización.

## RNF-03 — Protección de datos y privacidad
**Prioridad:** Must  
El sistema debe recolectar únicamente los datos necesarios para sus funciones, informar al usuario sobre el uso de cámara/micrófono y definir finalidad, acceso, conservación y eliminación de los datos personales.

**Verificación:** revisión de avisos, permisos, formularios y flujos de datos. El vídeo de cámara no se almacenará por defecto; cualquier almacenamiento requerirá finalidad justificada, autorización y política de retención.

## RNF-04 — Comunicación segura
**Prioridad:** Must  
Toda comunicación entre cliente y servidor debe utilizar HTTPS/TLS en entornos desplegados. Los secretos deben mantenerse en variables de entorno del servidor y nunca exponerse en variables públicas del cliente.

**Verificación:** revisión de configuración de despliegue y análisis de solicitudes de red.

## RNF-05 — Protección frente a vulnerabilidades comunes
**Prioridad:** Must  
La aplicación debe aplicar controles frente a inyección, XSS, CSRF cuando corresponda, carga de archivos maliciosos, fuerza bruta, enumeración de cuentas y exposición de información sensible.

**Verificación:** pruebas de seguridad y revisión de dependencias/configuración antes de una entrega candidata.

## RNF-06 — Accesibilidad
**Prioridad:** Must  
La interfaz debe orientarse a WCAG 2.2 nivel AA en los flujos principales: navegación por teclado, foco visible, etiquetas de formularios, contraste suficiente, textos alternativos, mensajes de estado accesibles y controles comprensibles.

**Verificación:** pruebas manuales con teclado y lector de pantalla, más revisión automatizada de accesibilidad. La evaluación automatizada no sustituye la revisión manual.

## RNF-07 — Usabilidad e inclusión
**Prioridad:** Must  
Los flujos principales deben utilizar lenguaje claro, instrucciones breves, iconografía acompañada de texto cuando sea necesario y mensajes que expliquen cómo recuperarse de un error. La interfaz debe evitar depender exclusivamente del audio o del color para transmitir información.

**Verificación:** pruebas de tareas con usuarios representativos y registro de dificultades observadas.

## RNF-08 — Diseño adaptable
**Prioridad:** Must  
La interfaz debe ser usable en móviles, tabletas y escritorio, sin pérdida de funciones principales ni desplazamiento horizontal innecesario en resoluciones habituales desde 360 px de ancho.

**Verificación:** pruebas responsive en tamaños representativos y navegadores soportados.

## RNF-09 — Compatibilidad de navegadores y dispositivos
**Prioridad:** Should  
La aplicación debe probarse en versiones vigentes de Chrome y Edge, y en versiones recientes de Firefox y Safari cuando el entorno esté disponible. Las funciones de cámara, micrófono y síntesis de voz deben informar las limitaciones del navegador/dispositivo.

**Verificación:** matriz de compatibilidad con resultados por navegador y dispositivo.

## RNF-10 — Rendimiento de interfaz
**Prioridad:** Should  
En el entorno de pruebas acordado, las páginas principales deben cargar en un tiempo objetivo de hasta 2,5 segundos en el percentil 75 bajo condiciones de red y dispositivo documentadas. Las operaciones comunes del backend deben aspirar a un percentil 95 inferior a 1 segundo, excluyendo procesamiento de IA y servicios externos.

**Verificación:** mediciones repetibles con herramientas de rendimiento y registro de las condiciones de prueba.

## RNF-11 — Latencia de voz e inteligencia artificial
**Prioridad:** Should  
El equipo debe medir por separado el tiempo de captura, envío, procesamiento externo/modelo y presentación del resultado. El objetivo de latencia para reconocimiento de señas y voz se establecerá después de obtener una línea base real con el modelo, dispositivo y red definidos.

**Verificación:** pruebas con muestras representativas; reportar mediana y percentil 95. No prometer tiempo real ni un umbral de latencia sin mediciones.

## RNF-12 — Calidad y transparencia del reconocimiento
**Prioridad:** Must  
El sistema debe documentar el vocabulario soportado, las condiciones de captura, las limitaciones conocidas y las métricas de evaluación del modelo. Debe distinguir confianza de una predicción y exactitud medida en un conjunto de prueba.

**Verificación:** ficha de modelo/dataset, conjunto de evaluación separado del entrenamiento y resultados reproducibles por clase o categoría.

## RNF-13 — Fiabilidad y manejo de errores
**Prioridad:** Must  
Ante fallos de cámara, micrófono, red, API o modelo, el sistema debe mostrar un mensaje comprensible, conservar los datos que no se hayan enviado cuando sea seguro y permitir reintentar sin duplicar operaciones.

**Verificación:** pruebas de desconexión, permisos denegados, timeout, respuesta inválida y errores del servicio.

## RNF-14 — Disponibilidad del prototipo
**Prioridad:** Should  
Durante las ventanas de demostración o pruebas acordadas, el entorno desplegado debe tener un objetivo inicial de disponibilidad del 99,5 %, excluyendo mantenimientos anunciados y fallas de proveedores externos fuera del control del equipo.

**Verificación:** registro de disponibilidad durante el periodo de medición; no declarar este porcentaje sin datos.

## RNF-15 — Integridad y consistencia de datos
**Prioridad:** Must  
La persistencia debe respetar claves primarias, foráneas, restricciones de unicidad, obligatoriedad y reglas de negocio. Las operaciones relacionadas que deban completarse juntas deben ejecutarse de forma transaccional.

**Verificación:** pruebas de integridad referencial, duplicados, estados inválidos y operaciones concurrentes.

## RNF-16 — Trazabilidad y auditoría
**Prioridad:** Must  
Los eventos sensibles deben permitir reconstruir quién realizó una acción y cuándo, sin almacenar secretos ni información innecesaria. Los registros deben tener acceso restringido y política de conservación.

**Verificación:** pruebas de generación, consulta y protección de eventos de auditoría.

## RNF-17 — Mantenibilidad y arquitectura
**Prioridad:** Should  
El código debe mantener separación razonable entre presentación, lógica de negocio, acceso a datos e integraciones externas; utilizar componentes reutilizables, nombres consistentes y manejo centralizado de errores.

**Verificación:** revisión de código, estructura del proyecto, ausencia de duplicación crítica y documentación de módulos.

## RNF-18 — Compatibilidad tecnológica
**Prioridad:** Must  
La aplicación web debe mantener compatibilidad con la arquitectura Next.js App Router definida para la rama de migración. Las integraciones de voz, cámara y modelo deben encapsularse para poder sustituirse sin rehacer las pantallas completas.

**Verificación:** revisión de dependencias, rutas, componentes y pruebas de integración.

## RNF-19 — Escalabilidad
**Prioridad:** Could  
La arquitectura debe permitir aumentar usuarios, registros del diccionario y solicitudes de traducción sin acoplar la interfaz a un único proveedor de IA. Los procesos intensivos podrán separarse en servicios cuando la carga medida lo justifique.

**Verificación:** prueba de carga básica y evaluación de cuellos de botella antes de ampliar infraestructura.

## RNF-20 — Copias de seguridad y recuperación
**Prioridad:** Should  
Los datos persistentes deben contar con una estrategia de respaldo y restauración acorde con el entorno. La frecuencia, retención y responsables deben quedar documentados antes de utilizar datos reales.

**Verificación:** ejecución documentada de una restauración de prueba.

## RNF-21 — Gestión de archivos multimedia
**Prioridad:** Must  
Los archivos de señas deben validar tipo, tamaño y contenido permitido; utilizar almacenamiento controlado y nombres no predecibles; y evitar servir archivos ejecutables o contenido no validado.

**Verificación:** pruebas de carga de archivos permitidos y rechazados, permisos y acceso.

## RNF-22 — Portabilidad y configuración
**Prioridad:** Should  
La aplicación debe poder configurarse en entornos de desarrollo y demostración sin editar código fuente para cambiar credenciales, endpoints o parámetros de servicios. Las variables sensibles deben permanecer fuera del repositorio.

**Verificación:** despliegue desde variables de entorno y revisión de que no existan secretos versionados.

## RNF-23 — Documentación y facilidad de transferencia
**Prioridad:** Should  
El proyecto debe mantener instrucciones actualizadas para instalación, configuración, ejecución, pruebas, estructura, variables de entorno y limitaciones conocidas, de modo que otro integrante pueda levantar el sistema.

**Verificación:** un integrante distinto del autor sigue la guía en un entorno limpio.

---

# 6. Reglas de negocio transversales

1. Solo el administrador puede crear o asignar roles internos privilegiados.
2. El autorregistro no puede conceder privilegios de administrador o intérprete.
3. Solo intérpretes autorizados pueden aprobar o rechazar señas.
4. Solo señas aprobadas y activas pueden aparecer como contenido validado del diccionario.
5. Una predicción de IA no reconocida o de confianza baja debe comunicarse como incierta.
6. La aplicación debe permitir continuar con canales alternativos cuando uno no esté disponible.
7. Los registros de auditoría no deben contener contraseñas, tokens ni secretos.
8. El usuario solo puede consultar su propio historial, salvo permisos administrativos expresos.
9. Las correcciones deben conservar trazabilidad; no deben borrar silenciosamente el resultado original.
10. Las métricas de precisión, disponibilidad y rendimiento solo se publican cuando existe una medición documentada.

# 7. Trazabilidad con la solución actual

Esta sección conecta los requisitos con lo que se observa en la documentación y estructura disponible. Es una orientación para inspección; no reemplaza pruebas de aceptación.

| Área | Evidencia de estructura/documentación | Brecha que debe validar el equipo |
|---|---|---|
| Navegación y módulos | La rama Next_Proyecto documenta rutas públicas, autenticación, administrador, intérprete y operador. | Probar navegación, rutas directas, permisos y formularios reales. |
| Autenticación | README de Next indica que la autenticación actual depende de lógica local y almacenamiento del navegador. | Backend seguro, hash, sesión, autorización en servidor y recuperación real. |
| Voz a texto | La documentación indica que la vista original muestra estados de captura. | Integrar y probar reconocimiento de voz real. |
| Texto a voz | La documentación indica uso de síntesis de voz del navegador. | Probar compatibilidad, controles y accesibilidad. |
| Cámara | La documentación indica solicitud de permiso y visualización del flujo de vídeo. | Conectar modelo LSC y validar condiciones de captura. |
| Reconocimiento LSC | El esquema SQL contempla modelos, datasets, capturas, traducciones y confianza. | Integración efectiva, dataset validado, evaluación y trazabilidad de versiones. |
| Diccionario e intérprete | Existen rutas/módulos y tablas de señas y validaciones en el esquema SQL. | Verificar persistencia, estados, permisos y flujo completo de aprobación. |
| Historial y auditoría | El esquema SQL contempla traducciones, reportes, retroalimentación y auditoría. | Comprobar que las operaciones reales registran y consultan los datos correctamente. |

## 7.1 Inconsistencias que deben resolverse antes de implementar

- **Nombres de roles:** alinear nombres funcionales del operador con los nombres usados en SQL y procedimientos.
- **Motor de base de datos:** esta línea base toma como referencia el script SQL del repositorio, que crea `SignaTechApp` con sintaxis MySQL. Cualquier documento anterior que mencione PostgreSQL/MongoDB debe reconciliarse antes de definir el despliegue.
- **Modelo de IA:** documentar cuál es el modelo realmente disponible, qué clases reconoce, qué dataset utiliza y cómo se evalúa.
- **Alcance de traducción:** definir el vocabulario inicial de LSC y evitar prometer traducción completa de frases o conversaciones.
- **Persistencia del historial:** determinar qué tipos de datos se guardan, por cuánto tiempo y qué puede borrar o consultar cada rol.
- **Backend:** identificar responsable, tecnología, endpoints y contrato de integración para autenticación, usuarios, diccionario, traducciones y reportes.

# 8. Priorización inicial para el Product Backlog

La siguiente secuencia propone dependencias funcionales. No asigna puntos de historia ni fechas porque deben estimarse con el equipo durante el refinamiento.

| Orden sugerido | Bloque de trabajo | Requisitos relacionados | Resultado esperado |
|---|---|---|---|
| 1 | Alineación de alcance y roles | RF-01 a RF-06, reglas 1–2 | Roles, permisos y flujos de acceso aprobados. |
| 2 | Persistencia y backend seguro | RF-01 a RF-06, RF-20, RF-25; RNF-01 a RNF-05, RNF-15 | Operaciones reales protegidas y persistentes. |
| 3 | Diccionario y validación | RF-17 a RF-19, RNF-12, RNF-21 | Diccionario con ciclo de revisión y contenido aprobado. |
| 4 | Comunicación voz/texto | RF-07 a RF-11, RNF-09 a RNF-13 | Flujos de voz y texto funcionales y probados. |
| 5 | Captura y reconocimiento LSC | RF-12 a RF-16, RNF-11 a RNF-13 | Captura conectada al modelo y resultados evaluables. |
| 6 | Historial, soporte y administración | RF-20 a RF-27, RNF-16, RNF-20 | Trazabilidad, soporte y consulta administrativa. |
| 7 | Calidad transversal | Todos los RNF aplicables | Accesibilidad, seguridad, rendimiento y documentación validados. |

**Recomendación Scrum:** dividir cada bloque en historias pequeñas que puedan terminarse y demostrarse dentro de un Sprint. Las historias deben tener valor observable, criterios de aceptación verificables y dependencias explícitas. No convertir un requisito grande en una única tarea técnica.

# 9. Plantilla para convertir requisitos en historias de usuario

**Como** [rol],  
**quiero** [acción o capacidad],  
**para** [beneficio o valor].

**Criterios de aceptación (Given / When / Then):**
- Dado [contexto], cuando [acción], entonces [resultado verificable].
- Dado [condición de error], cuando [acción], entonces [respuesta segura y comprensible].

Cada historia debe incluir:
- Identificador y requisito(s) relacionado(s).
- Épica y prioridad MoSCoW.
- Criterios de aceptación.
- Dependencias y reglas de negocio.
- Diseño o referencia cuando aplique.
- Casos de prueba.
- Estimación del equipo.
- Estado real y responsable.

# 10. Definition of Ready (DoR)

Una historia está lista para entrar a un Sprint cuando:
- Su objetivo y valor para el usuario son claros.
- El rol y las reglas de autorización están identificados.
- Los criterios de aceptación son verificables.
- Se conocen las dependencias de diseño, backend, base de datos o servicios externos.
- Los datos de entrada, salida y errores están definidos.
- El equipo puede estimarla y entiende qué significa terminarla.

# 11. Definition of Done (DoD)

Una historia se considera terminada cuando:
- Cumple todos sus criterios de aceptación.
- La funcionalidad está integrada en la rama de trabajo acordada.
- Se ejecutaron pruebas funcionales y de regresión pertinentes.
- Se probaron permisos y escenarios de error cuando aplique.
- No se exponen secretos ni datos sensibles.
- La documentación técnica y funcional quedó actualizada.
- El Product Owner revisó el incremento y aceptó el resultado.
- El estado del Product Backlog refleja la realidad; una interfaz sin integración no se marca como funcionalidad completa.

# 12. Riesgos y dependencias principales

| Riesgo/dependencia | Impacto | Tratamiento recomendado |
|---|---|---|
| Modelo LSC no integrado o sin evaluación | El flujo principal de señas no puede demostrarse de extremo a extremo. | Definir modelo, dataset, vocabulario y prueba de referencia antes de comprometer el Sprint. |
| Autenticación local | Exposición de rutas y datos privados. | Implementar autenticación y autorización en servidor antes de usar datos reales. |
| Permisos de cámara/micrófono | Flujos de voz y señas pueden fallar por navegador o dispositivo. | Diseñar estados de permiso, fallback y pruebas en dispositivos objetivo. |
| Ambigüedad de roles | Errores en registro, permisos, base de datos y pruebas. | Aprobar una matriz única de roles y permisos. |
| Alcance excesivo de traducción | Expectativas no alcanzables para el prototipo. | Limitar el vocabulario inicial y comunicar las limitaciones. |
| Privacidad de audio/vídeo | Riesgo de tratamiento innecesario de datos personales. | Minimización, consentimiento, retención definida y no almacenamiento por defecto. |

# 13. Criterios para validar esta línea base

Antes de tratar este documento como especificación aprobada, el Product Owner y el equipo deben:
1. Confirmar los nombres definitivos de roles y su matriz de permisos.
2. Aprobar el alcance de vocabulario y expresiones LSC del prototipo.
3. Confirmar qué servicios reales de reconocimiento de voz y señas están disponibles.
4. Acordar qué datos se guardan en el historial y sus tiempos de retención.
5. Validar los objetivos de rendimiento con un entorno de pruebas.
6. Revisar la prioridad MoSCoW y convertir los requisitos en historias de usuario.
7. Registrar cambios y decisiones en el Product Backlog y en el historial del proyecto.

---

**Nota de control:** esta versión organiza y propone requisitos a partir del alcance conocido, la documentación de migración Next.js y el esquema SQL disponible. No reemplaza la aprobación del Product Owner ni afirma que las funcionalidades descritas estén implementadas o probadas.
