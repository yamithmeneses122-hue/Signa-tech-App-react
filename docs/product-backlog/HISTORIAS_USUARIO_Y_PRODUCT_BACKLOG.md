# Historias de usuario y Product Backlog — SIGNA-TECH-APP

**Versión:** 1.0 — propuesta para refinamiento Scrum  
**Fecha:** 11 de noviembre de 2026  
**Base:** `docs/requisitos/REQUERIMIENTOS_FUNCIONALES_Y_NO_FUNCIONALES.md` (27 RF, 23 RNF)  
**Rama:** `docs/requisitos-funcionales-no-funcionales`  
**Estado:** Propuesta; pendiente de validación del Product Owner y estimación del equipo.

---

## 1. Objetivo y reglas de trabajo

Este documento convierte los 27 requisitos funcionales (RF-01 a RF-27) en 27 historias de usuario trazables, agrupadas en las seis épicas de la especificación. Cada historia incluye rol, valor, prioridad MoSCoW, criterios Given/When/Then, dependencias, reglas de negocio, RNF aplicables y pruebas sugeridas.

**No equivale a una declaración de implementación.** La rama Next.js contiene pantallas y rutas, pero el README declara que la autenticación usa lógica local, voz a texto no tiene integración de reconocimiento demostrada y la cámara no está conectada a un modelo LSC demostrado. Por eso las historias describen el resultado que debe construirse y probarse, no funciones ya terminadas.

### Convenciones
- **Must:** núcleo seguro y necesario del producto.
- **Should:** importante, pero puede entregarse después del flujo principal.
- **Could:** mejora de valor condicionada por capacidad y disponibilidad técnica.
- Estimación, responsable, Sprint y fecha: **por definir durante el refinamiento**.
- Las historias deben cumplir Definition of Ready (DoR) y Definition of Done (DoD) del documento de requisitos.
- Los RNF se consideran criterios transversales y se incluyen en la Definition of Done cuando correspondan.

### Visión que limita el alcance
SIGNA-TECH-APP es un prototipo web/móvil de comunicación básica y educativa asistida por IA entre personas con dificultad de comunicación auditiva y del habla y personas oyentes. Incluye LSC, texto y voz. No es traductor certificado de conversaciones complejas, no reemplaza intérpretes y no debe prometer reconocimiento universal ni precisión no medida.

---

## 2. Épicas y mapa de historias

| Épica | Nombre | Historias | Requisitos |
|---|---|---:|---|
| E01 | Identidad, acceso y permisos | US-01 a US-06 | RF-01 a RF-06 |
| E02 | Comunicación por voz y texto | US-07 a US-11 | RF-07 a RF-11 |
| E03 | Captura e interpretación de señas | US-12 a US-16 | RF-12 a RF-16 |
| E04 | Diccionario y validación de LSC | US-17 a US-19 | RF-17 a RF-19 |
| E05 | Historial, retroalimentación y soporte | US-20 a US-24 | RF-20 a RF-24 |
| E06 | Administración, trazabilidad y seguimiento | US-25 a US-27 | RF-25 a RF-27 |

---

# 3. Historias de usuario

## E01 — Identidad, acceso y permisos

### US-01 — Crear cuenta de operador
- **RF:** RF-01
- **Rol:** Persona visitante / operador.
- **Prioridad:** Must
- **Historia:** Como persona que desea utilizar Signa Tech, quiero crear una cuenta de operador con mis datos básicos, para acceder a las herramientas de comunicación.
- **Criterios de aceptación:**
  - **Dado** que estoy en el formulario de registro y completo los campos obligatorios con datos válidos, **cuando** envío el formulario, **entonces** se crea una única cuenta con un rol de operador permitido y se informa el resultado.
  - **Dado** que omito un campo obligatorio o ingreso un correo ya registrado, **cuando** intento registrarme, **entonces** el sistema identifica el error y no crea la cuenta.
  - **Dado** que manipulo la solicitud para solicitar un rol de administrador o intérprete, **cuando** el servidor procesa el registro, **entonces** rechaza la asignación privilegiada.
- **Dependencias:** matriz de roles aprobada; backend y persistencia; política de validación de correo.
- **Reglas:** autorregistro solo para perfiles de operador; no asignar privilegios internos.
- **RNF:** RNF-01, RNF-02, RNF-03, RNF-04, RNF-05, RNF-15.
- **Pruebas sugeridas:** registro válido; correo duplicado; campos vacíos; correo mal formado; intento de autoasignación privilegiada; reintento de solicitud.

### US-02 — Iniciar y cerrar sesión
- **RF:** RF-02
- **Rol:** Usuario registrado.
- **Prioridad:** Must
- **Historia:** Como usuario registrado, quiero iniciar y cerrar sesión de forma segura, para acceder a las funciones permitidas de mi perfil y proteger mi cuenta.
- **Criterios de aceptación:**
  - **Dado** que ingreso credenciales válidas y mi cuenta está activa, **cuando** inicio sesión, **entonces** el servidor valida mi identidad y habilita únicamente los permisos de mi rol.
  - **Dado** que ingreso credenciales incorrectas o mi cuenta está bloqueada, **cuando** intento iniciar sesión, **entonces** se deniega el acceso con un mensaje que no expone información sensible.
  - **Dado** que tengo una sesión activa, **cuando** cierro sesión, **entonces** la sesión queda invalidada y las operaciones privadas posteriores requieren autenticación.
- **Dependencias:** US-01; backend de autenticación; matriz de permisos.
- **Reglas:** autorización en servidor; no confiar en almacenamiento local como control de seguridad.
- **RNF:** RNF-01, RNF-02, RNF-03, RNF-04, RNF-05, RNF-13, RNF-16.
- **Pruebas sugeridas:** acceso correcto por cada rol; contraseña incorrecta; cuenta inactiva/bloqueada; acceso a URL privada tras cerrar sesión; reutilización de sesión invalidada.

### US-03 — Recuperar contraseña
- **RF:** RF-03
- **Rol:** Usuario registrado.
- **Prioridad:** Should
- **Historia:** Como usuario que olvidó su contraseña, quiero solicitar su recuperación mediante un mecanismo verificable, para volver a ingresar sin ayuda administrativa.
- **Criterios de aceptación:**
  - **Dado** que envío una solicitud con un correo, **cuando** el sistema responde, **entonces** utiliza un mensaje genérico que no revela si la cuenta existe.
  - **Dado** que recibo un enlace o código válido, **cuando** lo utilizo dentro de su vigencia y una sola vez, **entonces** puedo definir una nueva contraseña.
  - **Dado** que el enlace venció o ya fue utilizado, **cuando** intento reutilizarlo, **entonces** el sistema lo rechaza y permite solicitar otro.
- **Dependencias:** US-02; servicio de correo o mecanismo de verificación aprobado; almacenamiento seguro de tokens temporales.
- **Reglas:** token de un solo uso, vencimiento y respuesta anti-enumeración.
- **RNF:** RNF-01, RNF-03, RNF-04, RNF-05, RNF-13.
- **Pruebas sugeridas:** correo existente/no existente; token válido; token vencido; token reutilizado; cambio de contraseña y acceso posterior.

### US-04 — Administrar usuarios
- **RF:** RF-04
- **Rol:** Administrador.
- **Prioridad:** Must
- **Historia:** Como administrador, quiero consultar, buscar, actualizar, activar, desactivar o bloquear cuentas, para mantener controlado el acceso de los usuarios.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso administrativo, **cuando** consulto o filtro usuarios, **entonces** veo únicamente los datos autorizados y los resultados coinciden con los filtros.
  - **Dado** que selecciono una acción permitida sobre una cuenta, **cuando** confirmo el cambio, **entonces** se actualiza el estado y queda registrado el evento.
  - **Dado** que intento ejecutar la operación sin permiso, **cuando** el servidor recibe la solicitud, **entonces** la rechaza aunque la interfaz haya sido manipulada.
  - **Dado** que la acción dejaría el sistema sin ningún administrador operativo, **cuando** intento desactivar la última cuenta administrativa, **entonces** se bloquea o exige el procedimiento controlado definido.
- **Dependencias:** US-02; matriz de roles; backend y modelo de usuarios.
- **Reglas:** solo administrador; proteger la última cuenta administrativa.
- **RNF:** RNF-02, RNF-03, RNF-04, RNF-05, RNF-15, RNF-16.
- **Pruebas sugeridas:** búsqueda; edición; activar/desactivar/bloquear; intento por operador; último administrador; auditoría de cambios.

### US-05 — Gestionar roles y permisos
- **RF:** RF-05
- **Rol:** Administrador.
- **Prioridad:** Must
- **Historia:** Como administrador, quiero consultar y asignar roles y permisos definidos, para controlar qué operaciones puede realizar cada tipo de usuario.
- **Criterios de aceptación:**
  - **Dado** que consulto la matriz de permisos, **cuando** selecciono un rol, **entonces** puedo identificar sus permisos vigentes.
  - **Dado** que tengo autorización y asigno un permiso permitido, **cuando** guardo el cambio, **entonces** el servidor aplica el nuevo permiso y registra la modificación.
  - **Dado** que un usuario intenta concederse privilegios o modificar permisos sin autorización, **cuando** realiza la solicitud, **entonces** el servidor la rechaza.
- **Dependencias:** decisión de nombres de roles; US-02; matriz RBAC; tablas de roles/permisos.
- **Reglas:** no autoelevación; mínimo privilegio; roles internos solo por administración.
- **RNF:** RNF-01, RNF-02, RNF-04, RNF-05, RNF-15, RNF-16.
- **Pruebas sugeridas:** asignación permitida; permiso inexistente; acceso sin permiso; autoelevación; revocación y auditoría.

### US-06 — Consultar y actualizar perfil
- **RF:** RF-06
- **Rol:** Usuario autenticado.
- **Prioridad:** Should
- **Historia:** Como usuario autenticado, quiero consultar y actualizar mis datos personales permitidos, para mantener mi perfil vigente.
- **Criterios de aceptación:**
  - **Dado** que tengo una sesión válida, **cuando** abro mi perfil, **entonces** veo únicamente mis datos autorizados.
  - **Dado** que modifico campos editables con valores válidos, **cuando** guardo, **entonces** se actualizan y se confirma el resultado.
  - **Dado** que intento cambiar mi rol, estado o identificador protegido, **cuando** envío la solicitud, **entonces** el servidor ignora o rechaza esos campos.
- **Dependencias:** US-02; modelo de usuario; política de campos editables.
- **Reglas:** el usuario no modifica rol ni estado de seguridad.
- **RNF:** RNF-02, RNF-03, RNF-04, RNF-07, RNF-15.
- **Pruebas sugeridas:** lectura de perfil propio; modificación válida; correo duplicado; cambio de rol mediante payload; acceso a perfil ajeno.

## E02 — Comunicación por voz y texto

### US-07 — Convertir voz a texto
- **RF:** RF-07
- **Rol:** Operador oyente.
- **Prioridad:** Must
- **Historia:** Como operador oyente, quiero hablar y obtener una transcripción de mi voz, para compartir el mensaje en formato textual con otra persona.
- **Criterios de aceptación:**
  - **Dado** que el navegador soporta captura y otorgo permiso al micrófono, **cuando** inicio la captura y hablo, **entonces** el servicio integrado presenta una transcripción revisable.
  - **Dado** que niego el permiso, no hay micrófono o falla el servicio, **cuando** inicio el proceso, **entonces** se informa la causa y se ofrece una alternativa o reintento.
  - **Dado** que se genera una transcripción, **cuando** todavía no la he confirmado, **entonces** no se presenta como mensaje enviado.
- **Dependencias:** integración real de reconocimiento de voz; contrato de servicio; permisos de navegador.
- **Reglas:** consentimiento de micrófono; revisión antes de compartir.
- **RNF:** RNF-03, RNF-04, RNF-07, RNF-09, RNF-11, RNF-13.
- **Pruebas sugeridas:** permiso aceptado/denegado; silencio; ruido; desconexión; transcripción editable; proveedor no disponible.

### US-08 — Convertir texto a voz
- **RF:** RF-08
- **Rol:** Usuario.
- **Prioridad:** Must
- **Historia:** Como usuario, quiero escuchar en audio un texto escrito o recibido, para comunicarlo sin tener que leerlo en voz alta.
- **Criterios de aceptación:**
  - **Dado** que tengo un texto válido y el dispositivo soporta síntesis de voz, **cuando** selecciono reproducir, **entonces** se escucha el contenido y el texto permanece visible.
  - **Dado** que la reproducción está activa, **cuando** selecciono detener, **entonces** el audio se interrumpe.
  - **Dado** que el navegador no soporta la función o no dispone de voz, **cuando** intento reproducir, **entonces** se informa la limitación.
- **Dependencias:** módulo de texto; API de síntesis del navegador o servicio aprobado.
- **Reglas:** no ocultar ni reemplazar el texto por audio.
- **RNF:** RNF-06, RNF-07, RNF-09, RNF-13.
- **Pruebas sugeridas:** reproducción; detener; texto vacío; caracteres especiales; idioma/voz no disponible; compatibilidad de navegador.

### US-09 — Enviar y visualizar mensajes de texto
- **RF:** RF-09
- **Rol:** Operador con discapacidad / operador oyente.
- **Prioridad:** Must
- **Historia:** Como operador, quiero escribir y compartir mensajes de texto dentro del flujo de comunicación, para intercambiar información de forma clara.
- **Criterios de aceptación:**
  - **Dado** que escribo un mensaje dentro de los límites establecidos, **cuando** lo envío, **entonces** el sistema lo registra y muestra con su origen.
  - **Dado** que el mensaje está vacío o supera el límite permitido, **cuando** intento enviarlo, **entonces** el sistema lo valida y explica el error.
  - **Dado** que ocurre un fallo de red o persistencia, **cuando** intento enviar, **entonces** el mensaje no se marca falsamente como enviado.
- **Dependencias:** definir si el prototipo usa conversación entre dos usuarios, sesión compartida o envío de texto local; backend/mecanismo de intercambio.
- **Reglas:** identificar emisor; distinguir pendiente, enviado y fallido.
- **RNF:** RNF-03, RNF-06, RNF-07, RNF-08, RNF-13, RNF-15.
- **Pruebas sugeridas:** envío correcto; mensaje vacío; longitud máxima; pérdida de conexión; duplicación por reintento; identificación del emisor.

### US-10 — Buscar texto en el diccionario y mostrar señas
- **RF:** RF-10
- **Rol:** Operador.
- **Prioridad:** Should
- **Historia:** Como operador, quiero buscar una palabra o expresión y ver el recurso visual LSC aprobado asociado, para apoyar la comprensión y el aprendizaje.
- **Criterios de aceptación:**
  - **Dado** que busco un término existente y aprobado, **cuando** se consulta el diccionario, **entonces** se muestra el recurso visual y su descripción.
  - **Dado** que solo existe un registro pendiente o rechazado, **cuando** busco el término, **entonces** no se presenta como seña oficial aprobada.
  - **Dado** que no existe equivalencia validada, **cuando** busco, **entonces** se informa que no está disponible sin inventar una seña.
  - **Dado** que se muestra una secuencia de recursos léxicos, **cuando** se presenta el resultado, **entonces** se aclara que no equivale necesariamente a una traducción gramatical completa.
- **Dependencias:** US-17; diccionario poblado y aprobado; almacenamiento multimedia.
- **Reglas:** solo señas aprobadas/activas; comunicar ausencia de equivalencia.
- **RNF:** RNF-06, RNF-07, RNF-08, RNF-12, RNF-21.
- **Pruebas sugeridas:** coincidencia exacta; coincidencia parcial; sin resultados; seña pendiente; seña rechazada; archivo no disponible.

### US-11 — Usar canales complementarios de comunicación
- **RF:** RF-11
- **Rol:** Operador con discapacidad / operador oyente.
- **Prioridad:** Should
- **Historia:** Como operador, quiero combinar texto, voz y recursos visuales disponibles, para mantener un intercambio básico aunque uno de los canales no esté disponible.
- **Criterios de aceptación:**
  - **Dado** que inicio una interacción, **cuando** utilizo un canal habilitado, **entonces** se identifica el canal de entrada y el resultado generado.
  - **Dado** que un canal falla, **cuando** continúo la interacción, **entonces** puedo utilizar otro canal disponible sin perder innecesariamente el contexto.
  - **Dado** que una conversión genera un resultado, **cuando** se presenta, **entonces** puedo revisarlo antes de compartirlo.
- **Dependencias:** US-07, US-08, US-09 y US-10; definición de flujo conversacional.
- **Reglas:** no afirmar traducción completa; conservar trazabilidad del canal.
- **RNF:** RNF-06, RNF-07, RNF-09, RNF-11, RNF-13.
- **Pruebas sugeridas:** flujo texto-voz; voz-texto; fallo de micrófono con uso de texto; cambio de canal; revisión antes de compartir.

## E03 — Captura e interpretación de señas

### US-12 — Activar y detener cámara
- **RF:** RF-12
- **Rol:** Operador con discapacidad.
- **Prioridad:** Must
- **Historia:** Como operador, quiero activar y detener la cámara con mi autorización, para capturar una seña cuando decida utilizar el reconocimiento.
- **Criterios de aceptación:**
  - **Dado** que estoy en el módulo de cámara, **cuando** solicito iniciar la captura, **entonces** el navegador pide permiso y solo muestra vídeo si fue concedido.
  - **Dado** que deniego el permiso o no hay cámara disponible, **cuando** intento capturar, **entonces** se informa el problema y no se simula una captura válida.
  - **Dado** que la cámara está activa, **cuando** la detengo o abandono el flujo, **entonces** se liberan los recursos de captura.
- **Dependencias:** módulo cámara Next.js; APIs de medios; HTTPS en despliegue.
- **Reglas:** acción explícita y permiso previo; no guardar vídeo continuo por defecto.
- **RNF:** RNF-03, RNF-04, RNF-07, RNF-08, RNF-09, RNF-13.
- **Pruebas sugeridas:** permiso concedido/denegado; cámara ausente; cámara ocupada; detener; navegar fuera; comprobar liberación de tracks.

### US-13 — Comprobar calidad de captura
- **RF:** RF-13
- **Rol:** Operador con discapacidad.
- **Prioridad:** Must
- **Historia:** Como operador, quiero recibir indicaciones sobre la calidad y encuadre de la captura, para corregir las condiciones antes de interpretar una seña.
- **Criterios de aceptación:**
  - **Dado** que no existe imagen o la captura no cumple las condiciones configuradas, **cuando** el sistema la evalúa, **entonces** indica la condición detectada y cómo corregirla.
  - **Dado** que la detección automática de una condición no está disponible, **cuando** se muestra el estado, **entonces** se comunica como limitación y no como detección confirmada.
  - **Dado** que la calidad está por debajo del mínimo definido, **cuando** se intenta procesar, **entonces** no se presenta una traducción como válida.
- **Dependencias:** US-12; definición técnica de métricas y umbrales; capacidades del modelo/visión.
- **Reglas:** no inferir detecciones no implementadas; umbrales documentados.
- **RNF:** RNF-07, RNF-11, RNF-12, RNF-13.
- **Pruebas sugeridas:** ausencia de imagen; baja iluminación; desenfoque; manos fuera del encuadre; captura adecuada; condición no soportada.

### US-14 — Reconocer señas dentro del vocabulario soportado
- **RF:** RF-14
- **Rol:** Operador con discapacidad.
- **Prioridad:** Must
- **Historia:** Como operador, quiero que una captura válida sea procesada por un modelo LSC integrado, para obtener el texto de una seña incluida en el vocabulario del prototipo.
- **Criterios de aceptación:**
  - **Dado** que la captura cumple condiciones y el modelo está disponible, **cuando** envío la captura, **entonces** se procesa con una versión identificable del modelo y un vocabulario documentado.
  - **Dado** que la seña no pertenece al vocabulario o el modelo no la reconoce, **cuando** finaliza el procesamiento, **entonces** se informa que no fue reconocida y se permite repetir.
  - **Dado** que el servicio/modelo falla, **cuando** se procesa, **entonces** se informa el error y no se inventa una traducción.
- **Dependencias:** US-12 y US-13; modelo IA disponible; dataset etiquetado; API de inferencia; ficha de versión.
- **Reglas:** limitarse al vocabulario evaluado; no prometer reconocimiento universal ni traducción profesional.
- **RNF:** RNF-04, RNF-11, RNF-12, RNF-13, RNF-17, RNF-18.
- **Pruebas sugeridas:** seña dentro del vocabulario; fuera del vocabulario; modelo no disponible; versión registrada; datos de captura inválidos; inferencia fallida.

### US-15 — Mostrar resultado y confianza de predicción
- **RF:** RF-15
- **Rol:** Operador con discapacidad.
- **Prioridad:** Must
- **Historia:** Como operador, quiero ver el texto reconocido y saber cuándo el resultado es incierto, para decidir si lo confirmo o repito la captura.
- **Criterios de aceptación:**
  - **Dado** que el modelo produce una predicción, **cuando** se muestra, **entonces** aparece el texto y, si existe una medida calibrada, su confianza explicada.
  - **Dado** que la confianza está bajo el umbral validado, **cuando** se presenta el resultado, **entonces** se marca como incierto y se recomienda confirmar o repetir.
  - **Dado** que el usuario detecta un error, **cuando** lo reporta, **entonces** se conserva el resultado original y se registra la retroalimentación asociada.
- **Dependencias:** US-14; umbral de confianza definido a partir de evaluación.
- **Reglas:** confianza no equivale a exactitud global; no mostrar porcentajes sin calibración.
- **RNF:** RNF-07, RNF-11, RNF-12, RNF-13, RNF-16.
- **Pruebas sugeridas:** confianza alta/media/baja; modelo sin score calibrado; predicción vacía; corrección reportada; trazabilidad.

### US-16 — Escuchar el texto reconocido
- **RF:** RF-16
- **Rol:** Operador con discapacidad / interlocutor oyente.
- **Prioridad:** Should
- **Historia:** Como usuario, quiero reproducir en audio el texto obtenido de una seña reconocida, para compartirlo con una persona oyente.
- **Criterios de aceptación:**
  - **Dado** que existe un texto reconocido, **cuando** selecciono reproducir, **entonces** se genera audio mediante la capacidad disponible.
  - **Dado** que el dispositivo no soporta síntesis o no hay voz disponible, **cuando** intento reproducir, **entonces** se informa la limitación y el texto sigue visible.
- **Dependencias:** US-08 y US-15.
- **Reglas:** el audio corresponde al texto presentado; no reemplaza la confirmación del resultado.
- **RNF:** RNF-06, RNF-07, RNF-09, RNF-13.
- **Pruebas sugeridas:** reproducir resultado; detener; texto vacío; voz no disponible; compatibilidad.

## E04 — Diccionario y validación de LSC

### US-17 — Consultar diccionario LSC
- **RF:** RF-17
- **Rol:** Operador / intérprete.
- **Prioridad:** Must
- **Historia:** Como usuario, quiero buscar señas por palabra o categoría, para consultar su descripción y recurso multimedia validado.
- **Criterios de aceptación:**
  - **Dado** que ingreso una palabra o categoría existente, **cuando** consulto, **entonces** se muestran los registros aprobados y activos que coinciden.
  - **Dado** que no hay coincidencias, **cuando** termina la búsqueda, **entonces** se muestra un estado vacío claro.
  - **Dado** que existen registros pendientes o rechazados, **cuando** consulto como operador, **entonces** no aparecen como contenido oficial aprobado.
- **Dependencias:** modelo de datos del diccionario; contenido multimedia aprobado; control de estados.
- **Reglas:** mostrar únicamente señas aprobadas/activas a usuarios de consulta.
- **RNF:** RNF-06, RNF-07, RNF-08, RNF-15, RNF-21.
- **Pruebas sugeridas:** búsqueda exacta; por categoría; sin resultados; estado pendiente; estado rechazado; recurso faltante.

### US-18 — Registrar una nueva seña para revisión
- **RF:** RF-18
- **Rol:** Intérprete.
- **Prioridad:** Should
- **Historia:** Como intérprete, quiero registrar una seña con su descripción, categoría y recurso multimedia, para proponer su incorporación al diccionario.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso de intérprete y completo los campos requeridos, **cuando** envío el registro, **entonces** se crea en estado pendiente y queda asociado a mi usuario y fecha.
  - **Dado** que falta información o el archivo no cumple formato/tamaño permitido, **cuando** envío, **entonces** se rechaza la carga y se explica el error.
  - **Dado** que la seña está pendiente, **cuando** un operador consulta el diccionario, **entonces** no la recibe como seña oficial.
- **Dependencias:** US-02; US-17; almacenamiento multimedia seguro; matriz de permisos.
- **Reglas:** solo intérprete autorizado; estado inicial pendiente; validar archivos.
- **RNF:** RNF-02, RNF-03, RNF-04, RNF-05, RNF-15, RNF-21.
- **Pruebas sugeridas:** registro válido; archivo excedido; extensión falsa; campos vacíos; rol operador; duplicidad de seña.

### US-19 — Validar, rechazar o corregir una seña
- **RF:** RF-19
- **Rol:** Intérprete autorizado.
- **Prioridad:** Must
- **Historia:** Como intérprete, quiero revisar una seña pendiente y aprobarla o rechazarla con observaciones, para mantener confiable el contenido del diccionario.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso y existe una seña pendiente, **cuando** la apruebo, **entonces** cambia a aprobada y se registra quién y cuándo tomó la decisión.
  - **Dado** que la rechazo, **cuando** guardo la decisión, **entonces** el sistema exige una observación o motivo.
  - **Dado** que corrijo una seña ya registrada, **cuando** guardo los cambios, **entonces** se conserva la trazabilidad de la versión/decisión anterior.
  - **Dado** que no soy intérprete autorizado, **cuando** intento validar, **entonces** el servidor deniega la acción.
- **Dependencias:** US-18; US-05; historial/auditoría; reglas de estado.
- **Reglas:** solo intérpretes autorizados; pendiente no es oficial; conservar trazabilidad.
- **RNF:** RNF-02, RNF-05, RNF-12, RNF-15, RNF-16, RNF-21.
- **Pruebas sugeridas:** aprobar; rechazar sin motivo; rechazar con motivo; editar; acceso no autorizado; consultar estado final.

## E05 — Historial, retroalimentación y soporte

### US-20 — Consultar historial personal
- **RF:** RF-20
- **Rol:** Operador.
- **Prioridad:** Should
- **Historia:** Como operador, quiero consultar mis traducciones y operaciones anteriores, para revisar sus resultados y reconocer cuándo hubo errores.
- **Criterios de aceptación:**
  - **Dado** que tengo sesión activa, **cuando** consulto mi historial, **entonces** veo únicamente mis registros autorizados con fecha, canal, resultado y estado.
  - **Dado** que aplico un filtro de fecha o tipo, **cuando** consulto, **entonces** se muestran los registros que cumplen el filtro.
  - **Dado** que un registro falló, **cuando** aparece en el historial, **entonces** se diferencia claramente de uno procesado correctamente.
- **Dependencias:** US-02; persistencia de traducciones; política de retención y privacidad.
- **Reglas:** aislamiento por propietario; historial según consentimiento/retención aprobados.
- **RNF:** RNF-02, RNF-03, RNF-06, RNF-15, RNF-16.
- **Pruebas sugeridas:** historial propio; intento de consultar historial ajeno; filtros; estados fallidos; retención/eliminación.

### US-21 — Consultar revisiones e historial del intérprete
- **RF:** RF-21
- **Rol:** Intérprete.
- **Prioridad:** Should
- **Historia:** Como intérprete, quiero consultar señas y traducciones que requieren revisión junto con mis observaciones anteriores, para dar continuidad y trazabilidad a la validación.
- **Criterios de aceptación:**
  - **Dado** que tengo rol de intérprete, **cuando** consulto pendientes, **entonces** veo los elementos asignados o disponibles según la regla de trabajo aprobada.
  - **Dado** que abro un elemento revisado previamente, **cuando** consulto su historial, **entonces** veo decisiones, observaciones, autor y fecha.
  - **Dado** que soy un operador sin permiso, **cuando** intento acceder a la revisión, **entonces** se deniega el acceso.
- **Dependencias:** US-18, US-19; definición de asignación de revisiones.
- **Reglas:** acceso por rol; conservar historial de decisiones.
- **RNF:** RNF-02, RNF-03, RNF-15, RNF-16.
- **Pruebas sugeridas:** lista de pendientes; detalle histórico; filtros; acceso no autorizado; revisión concurrente.

### US-22 — Reportar una traducción incorrecta
- **RF:** RF-22
- **Rol:** Operador / intérprete autorizado.
- **Prioridad:** Must
- **Historia:** Como usuario, quiero reportar una traducción incorrecta y aportar una observación, para contribuir a mejorar el contenido y la calidad del sistema.
- **Criterios de aceptación:**
  - **Dado** que tengo un resultado disponible, **cuando** lo reporto como incorrecto y describo el problema, **entonces** la retroalimentación queda vinculada al resultado.
  - **Dado** que un intérprete autorizado registra una corrección, **cuando** la guarda, **entonces** se identifica autor y fecha y se conserva el resultado original.
  - **Dado** que un operador intenta registrar una corrección oficial, **cuando** envía la operación, **entonces** se limita a reportar y no altera el contenido oficial.
- **Dependencias:** US-15; US-20; US-19 para correcciones de señas; persistencia.
- **Reglas:** separar reporte de corrección oficial; no sobrescribir el original.
- **RNF:** RNF-02, RNF-03, RNF-12, RNF-15, RNF-16.
- **Pruebas sugeridas:** reportar error; reporte incompleto; corrección autorizada; corrección por operador; comprobar historial original.

### US-23 — Reportar fallas de uso
- **RF:** RF-23
- **Rol:** Operador autenticado.
- **Prioridad:** Must
- **Historia:** Como operador, quiero reportar problemas de cámara, micrófono, calidad de imagen, ruido o señas no reconocidas, para que el equipo pueda identificar y atender las fallas.
- **Criterios de aceptación:**
  - **Dado** que estoy autenticado y selecciono un tipo de falla con descripción, **cuando** envío el reporte, **entonces** queda registrado con fecha y estado pendiente.
  - **Dado** que falta el tipo o descripción, **cuando** intento enviar, **entonces** el sistema indica qué debo completar.
  - **Dado** que se registra correctamente, **cuando** consulto el resultado, **entonces** recibo confirmación sin exponer datos técnicos sensibles.
- **Dependencias:** US-02; catálogo de fallas; persistencia de reportes.
- **Reglas:** reporte asociado al usuario; evitar adjuntar audio/vídeo sensible por defecto.
- **RNF:** RNF-03, RNF-04, RNF-07, RNF-13, RNF-15, RNF-16.
- **Pruebas sugeridas:** cada categoría; campos vacíos; duplicado por reintento; desconexión; usuario no autenticado.

### US-24 — Administrar reportes de fallas
- **RF:** RF-24
- **Rol:** Administrador.
- **Prioridad:** Should
- **Historia:** Como administrador, quiero consultar, clasificar, actualizar y cerrar reportes, para hacer seguimiento a los problemas reportados por los operadores.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso administrativo, **cuando** consulto reportes, **entonces** puedo filtrar por tipo, estado o fecha.
  - **Dado** que actualizo el estado o agrego una observación, **cuando** guardo, **entonces** se conserva el historial de atención.
  - **Dado** que no tengo permiso, **cuando** intento modificar un reporte, **entonces** el servidor rechaza la operación.
- **Dependencias:** US-23; US-02; matriz de permisos.
- **Reglas:** solo administrador; no borrar el historial de atención.
- **RNF:** RNF-02, RNF-03, RNF-15, RNF-16.
- **Pruebas sugeridas:** filtros; cambiar estado; cerrar; acceso operador; auditoría de cambios.

## E06 — Administración, trazabilidad y seguimiento

### US-25 — Consultar auditoría de acciones sensibles
- **RF:** RF-25
- **Rol:** Administrador autorizado.
- **Prioridad:** Must
- **Historia:** Como administrador autorizado, quiero consultar los eventos sensibles del sistema, para conocer quién realizó una acción y cuándo ocurrió.
- **Criterios de aceptación:**
  - **Dado** que ocurre una acción sensible definida, **cuando** se completa, **entonces** se registra actor, acción, fecha y contexto permitido.
  - **Dado** que consulto la auditoría, **cuando** aplico filtros, **entonces** puedo localizar eventos por usuario, acción o fecha según permisos.
  - **Dado** que un usuario ordinario intenta modificar o borrar eventos, **cuando** envía la solicitud, **entonces** el servidor la rechaza.
  - **Dado** que se registra un evento, **cuando** se inspecciona su contenido, **entonces** no contiene contraseñas, tokens ni secretos.
- **Dependencias:** eventos de auditoría en US-01, US-02, US-04, US-05 y US-19; política de retención.
- **Reglas:** auditoría protegida, no almacenar secretos.
- **RNF:** RNF-02, RNF-03, RNF-04, RNF-05, RNF-16.
- **Pruebas sugeridas:** generar eventos; filtrar; intentar modificar; inspeccionar ausencia de secretos; control de acceso.

### US-26 — Consultar panel administrativo con datos reales
- **RF:** RF-26
- **Rol:** Administrador.
- **Prioridad:** Should
- **Historia:** Como administrador, quiero visualizar indicadores de usuarios, señas pendientes, traducciones, reportes y actividad, para supervisar el estado del sistema.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso administrativo, **cuando** abro el panel, **entonces** veo indicadores calculados a partir de datos persistidos y con definición clara.
  - **Dado** que no existen registros para un indicador, **cuando** se carga el panel, **entonces** se muestra cero o un estado vacío y no una cifra ficticia.
  - **Dado** que un usuario no es administrador, **cuando** intenta consultar el panel, **entonces** el servidor deniega el acceso.
- **Dependencias:** persistencia y reportes; US-04, US-19, US-20, US-23, US-24, US-25.
- **Reglas:** indicadores reales, definiciones explícitas, acceso administrativo.
- **RNF:** RNF-02, RNF-06, RNF-10, RNF-13, RNF-15.
- **Pruebas sugeridas:** comparar indicadores con consultas fuente; base vacía; actualización tras crear registro; acceso no autorizado; rendimiento.

### US-27 — Consultar metadatos de modelos y datasets
- **RF:** RF-27
- **Rol:** Personal técnico autorizado / administrador autorizado.
- **Prioridad:** Could
- **Historia:** Como personal autorizado, quiero consultar los modelos y datasets registrados, sus versiones y estados, para conocer qué recursos respaldan el reconocimiento de señas.
- **Criterios de aceptación:**
  - **Dado** que tengo permiso, **cuando** consulto los modelos y datasets, **entonces** veo nombre, versión, estado, fecha y relaciones disponibles.
  - **Dado** que un flujo utiliza un modelo, **cuando** consulto sus metadatos, **entonces** puedo identificar la versión asociada.
  - **Dado** que no tengo autorización, **cuando** intento acceder, **entonces** se deniega la consulta.
  - **Dado** que se modifica un estado por una operación autorizada, **cuando** se guarda, **entonces** queda auditado.
- **Dependencias:** US-05 y US-25; tablas de modelos/datasets y relaciones; inventario técnico real.
- **Reglas:** consulta de metadatos no significa entrenar, desplegar o reentrenar modelos.
- **RNF:** RNF-02, RNF-12, RNF-15, RNF-16, RNF-17, RNF-19.
- **Pruebas sugeridas:** listado; versión activa; relación modelo-dataset; rol sin permiso; auditoría de cambios.

---

# 4. Matriz de trazabilidad RF → HU

| Requisito | Historia | Épica | Prioridad |
|---|---|---|---|
| RF-01 | US-01 | E01 | Must |
| RF-02 | US-02 | E01 | Must |
| RF-03 | US-03 | E01 | Should |
| RF-04 | US-04 | E01 | Must |
| RF-05 | US-05 | E01 | Must |
| RF-06 | US-06 | E01 | Should |
| RF-07 | US-07 | E02 | Must |
| RF-08 | US-08 | E02 | Must |
| RF-09 | US-09 | E02 | Must |
| RF-10 | US-10 | E02 | Should |
| RF-11 | US-11 | E02 | Should |
| RF-12 | US-12 | E03 | Must |
| RF-13 | US-13 | E03 | Must |
| RF-14 | US-14 | E03 | Must |
| RF-15 | US-15 | E03 | Must |
| RF-16 | US-16 | E03 | Should |
| RF-17 | US-17 | E04 | Must |
| RF-18 | US-18 | E04 | Should |
| RF-19 | US-19 | E04 | Must |
| RF-20 | US-20 | E05 | Should |
| RF-21 | US-21 | E05 | Should |
| RF-22 | US-22 | E05 | Must |
| RF-23 | US-23 | E05 | Must |
| RF-24 | US-24 | E05 | Should |
| RF-25 | US-25 | E06 | Must |
| RF-26 | US-26 | E06 | Should |
| RF-27 | US-27 | E06 | Could |

**Cobertura:** 27 de 27 RF tienen una historia vinculada (100 % de trazabilidad funcional inicial). Esta cobertura documental no equivale a cobertura de pruebas ni a implementación.

---

# 5. RNF transversales y Definition of Done

Los siguientes requisitos no funcionales deben asociarse a las historias aplicables y verificarse antes de aceptar el incremento:

| RNF | Aplicación principal |
|---|---|
| RNF-01 Seguridad de autenticación | US-01, US-02, US-03, US-05 |
| RNF-02 Autorización por roles | US-01 a US-06, US-18 a US-27 |
| RNF-03 Privacidad y protección de datos | Registro, voz, cámara, historial, reportes y auditoría |
| RNF-04 Comunicación segura | Operaciones de cliente-servidor y servicios externos |
| RNF-05 Vulnerabilidades comunes | Formularios, permisos, archivos y sesiones |
| RNF-06 Accesibilidad | Todas las interfaces; especialmente US-08 a US-11, US-16, US-17, US-26 |
| RNF-07 Usabilidad e inclusión | Todos los flujos principales |
| RNF-08 Diseño adaptable | Módulos de operador, cámara, diccionario y administración |
| RNF-09 Compatibilidad | US-07, US-08, US-12, US-16 |
| RNF-10 Rendimiento | Consultas, panel, historial y backend |
| RNF-11 Latencia | Voz y reconocimiento LSC |
| RNF-12 Calidad/transparencia IA | US-10, US-13, US-14, US-15, US-19, US-27 |
| RNF-13 Fiabilidad y errores | Todos los flujos integrados |
| RNF-14 Disponibilidad | Entorno de demostración/despliegue |
| RNF-15 Integridad de datos | Todas las historias con persistencia |
| RNF-16 Auditoría | US-01, US-02, US-04, US-05, US-19, US-22 a US-27 |
| RNF-17 Mantenibilidad | Integraciones, módulos y servicios |
| RNF-18 Compatibilidad Next.js | Todas las historias del frontend |
| RNF-19 Escalabilidad | Backend, diccionario, inferencia y datos |
| RNF-20 Copias de seguridad | Persistencia e historial |
| RNF-21 Archivos multimedia | US-10, US-18, US-19 |
| RNF-22 Configuración | Integraciones, secretos y despliegue |
| RNF-23 Documentación | Todos los incrementos y transferencia de conocimiento |

**Regla de aceptación:** una historia no se cierra si cumple su interfaz pero incumple un RNF aplicable de seguridad, privacidad, integridad o accesibilidad. Los objetivos de rendimiento/disponibilidad deben medirse y no declararse cumplidos sin evidencia.

---

# 6. Product Backlog priorizado

El orden es una propuesta inicial basada en valor, riesgo, dependencias y habilitación técnica. El Product Owner puede reordenarlo después de validar alcance y feedback.

| Orden | ID | Historia | Prioridad | Dependencia clave | Estado inicial |
|---:|---|---|---|---|---|
| 1 | US-05 | Gestionar roles y permisos | Must | Decisión de roles | Por refinar |
| 2 | US-01 | Crear cuenta de operador | Must | Matriz de roles, backend | Por refinar |
| 3 | US-02 | Iniciar y cerrar sesión | Must | Backend, US-01 | Por refinar |
| 4 | US-04 | Administrar usuarios | Must | US-02, RBAC | Por refinar |
| 5 | US-25 | Consultar auditoría | Must | Eventos y persistencia | Por refinar |
| 6 | US-17 | Consultar diccionario LSC | Must | Modelo de diccionario | Por refinar |
| 7 | US-18 | Registrar seña | Should | US-17, almacenamiento | Por refinar |
| 8 | US-19 | Validar/corregir seña | Must | US-18, US-05 | Por refinar |
| 9 | US-09 | Enviar y visualizar texto | Must | Definir canal de intercambio | Por refinar |
| 10 | US-08 | Texto a voz | Must | API de voz y compatibilidad | Por refinar |
| 11 | US-07 | Voz a texto | Must | Servicio real de reconocimiento | Por refinar |
| 12 | US-23 | Reportar fallas | Must | Backend, catálogo de fallas | Por refinar |
| 13 | US-22 | Retroalimentación | Must | Resultados persistidos | Por refinar |
| 14 | US-12 | Activar/detener cámara | Must | Permisos y HTTPS | Por refinar |
| 15 | US-13 | Calidad de captura | Must | US-12, definición técnica | Por refinar |
| 16 | US-14 | Reconocer señas LSC | Must | Modelo/dataset/API | Bloqueo técnico por validar |
| 17 | US-15 | Mostrar resultado/confianza | Must | US-14, calibración | Por refinar |
| 18 | US-10 | Texto a apoyo visual | Should | US-17, diccionario validado | Por refinar |
| 19 | US-11 | Comunicación bidireccional | Should | US-07 a US-10 | Por refinar |
| 20 | US-16 | Audio de seña reconocida | Should | US-08, US-15 | Por refinar |
| 21 | US-20 | Historial del operador | Should | Persistencia, privacidad | Por refinar |
| 22 | US-21 | Historial del intérprete | Should | US-18, US-19 | Por refinar |
| 23 | US-24 | Gestión de reportes | Should | US-23 | Por refinar |
| 24 | US-26 | Panel administrativo | Should | Datos reales de módulos | Por refinar |
| 25 | US-03 | Recuperar contraseña | Should | Servicio de verificación | Por refinar |
| 26 | US-06 | Perfil del usuario | Should | US-02 | Por refinar |
| 27 | US-27 | Consultar modelos/datasets | Could | Inventario IA, permisos | Por refinar |

**Nota:** aunque se muestra un orden lineal para facilitar la importación y discusión, algunas historias pueden desarrollarse en paralelo si se resuelven sus dependencias. US-14 no debe comprometerse a un Sprint hasta confirmar modelo, dataset, vocabulario y servicio de inferencia.

---

# 7. Dependencias principales

1. **Decisión de roles → US-01, US-04, US-05, US-18, US-19, US-24, US-25, US-27.** Resolver la diferencia entre «Usuario Sordo/Invitado» del SQL y «operador con discapacidad/operador oyente» de la definición funcional.
2. **Backend seguro → US-01 a US-06, US-17 a US-27.** No usar localStorage como autenticación real ni como autorización.
3. **Persistencia del diccionario → US-17 → US-18 → US-19 → US-10.** La consulta pública debe consumir contenido aprobado.
4. **Modelo/dataset LSC → US-13 → US-14 → US-15 → US-16.** Cámara operativa no significa reconocimiento LSC implementado.
5. **Servicio de voz → US-07; síntesis del navegador/servicio → US-08 y US-16.**
6. **Política de privacidad y retención → US-07, US-12, US-20, US-22, US-23, US-25.**
7. **Persistencia y eventos → US-20 a US-27 y panel US-26.** El panel depende de datos reales, no de cifras de demostración.

---

# 8. Propuesta de secuencia de Sprints

Esta secuencia representa objetivos de incremento, no compromisos de calendario. **Duración, capacidad, puntos de historia, responsables y fechas quedan pendientes** de la planificación con el equipo.

### Sprint de preparación / Refinamiento inicial
**Objetivo:** eliminar incertidumbres que bloquean estimación y desarrollo.
- Aprobar nombres de roles y matriz de permisos.
- Confirmar backend y contratos API.
- Confirmar MySQL como motor objetivo y alinear documentación divergente.
- Definir intercambio de mensajes y alcance de conversación.
- Identificar modelo, dataset, vocabulario y métricas LSC disponibles.
- Definir privacidad, consentimiento, retención y borrado.
- Revisar diseño y pruebas de aceptación.
**Salida:** decisiones registradas, historias Ready y dependencias identificadas.

### Sprint 1 — Acceso seguro y base de datos
**Objetivo:** permitir acceso seguro y administración mínima de cuentas.
- Candidatas: US-01, US-02, US-04, US-05 y eventos necesarios de US-25.
- RNF foco: RNF-01 a RNF-05, RNF-15, RNF-16, RNF-18.
**Salida:** registro/login/roles respaldados por backend y probados; no basta el almacenamiento local.

### Sprint 2 — Diccionario LSC confiable
**Objetivo:** disponer de contenido consultable y un proceso de validación.
- Candidatas: US-17, US-18, US-19.
- RNF foco: RNF-02, RNF-06, RNF-12, RNF-15, RNF-16, RNF-21.
**Salida:** una seña puede registrarse, revisarse, aprobarse y consultarse con trazabilidad.

### Sprint 3 — Comunicación textual y voz disponible
**Objetivo:** habilitar canales de comunicación básicos y sus estados de error.
- Candidatas: US-09, US-08, US-07.
- RNF foco: RNF-03, RNF-06 a RNF-13.
**Salida:** flujo texto, síntesis de voz y reconocimiento de voz probado en dispositivos acordados.

### Sprint 4 — Captura y prueba de concepto de reconocimiento LSC
**Objetivo:** validar técnicamente el flujo de captura y reconocimiento dentro de un vocabulario limitado.
- Candidatas: US-12, US-13, US-14, US-15.
- RNF foco: RNF-03, RNF-09, RNF-11, RNF-12, RNF-13, RNF-17, RNF-18.
**Salida:** captura conectada a modelo identificado y evaluado; si el modelo no está disponible, Sprint termina con evidencia de viabilidad, bloqueo documentado y alcance revisado, no con una falsa declaración de reconocimiento funcional.

### Sprint 5 — Experiencia bidireccional y mejora continua
**Objetivo:** integrar canales y recoger errores de forma útil.
- Candidatas: US-10, US-11, US-16, US-22, US-23.
- RNF foco: accesibilidad, privacidad, fiabilidad y trazabilidad.
**Salida:** interacción básica combinando canales, retroalimentación y reporte de fallas.

### Sprint 6 — Historial, operación y panel
**Objetivo:** permitir seguimiento de uso, revisión y administración.
- Candidatas: US-20, US-21, US-24, US-26, US-27.
- RNF foco: RNF-02, RNF-03, RNF-10, RNF-15, RNF-16, RNF-19, RNF-20.
**Salida:** vistas basadas en registros reales y procesos de seguimiento.

### Mejoras transversales continuas
- US-03 y US-06 se incorporan cuando autenticación y perfil estén estables.
- RNF-06, RNF-07, RNF-08, RNF-13 y RNF-23 se revisan en cada Sprint, no solo al final.
- RNF-10, RNF-11 y RNF-14 se validan mediante mediciones, no estimaciones subjetivas.

---

# 9. Decisiones pendientes del Product Owner

| ID | Decisión | Propuesta para discusión | Bloquea |
|---|---|---|---|
| DEC-01 | Nombres y semántica de roles | Unificar «operador con dificultad auditiva/del habla» y «operador oyente» con los roles ya usados por SQL, sin duplicados. | US-01, US-04, US-05 |
| DEC-02 | Backend y autenticación | Definir tecnología, responsable, sesión, API y despliegue; eliminar autenticación local como mecanismo real. | Acceso y persistencia |
| DEC-03 | Base de datos | Mantener MySQL 8+ como referencia por el script `SignaTechApp`; validar y corregir documentación contradictoria. | Integridad/persistencia |
| DEC-04 | Modelo IA y dataset | Confirmar si existe modelo ejecutable, clases, licencia, dataset, evaluación, endpoint y responsable. | US-14, US-15, US-27 |
| DEC-05 | Vocabulario LSC | Aprobar conjunto limitado de señas/frases y su fuente/validación por intérprete. | US-10, US-14 |
| DEC-06 | Privacidad de medios | Definir si se guarda algún audio/imagen; recomendación: no guardar vídeo continuo por defecto y retener solo datos mínimos justificados. | US-07, US-12, US-20, US-23 |
| DEC-07 | Intercambio de mensajes | Definir si los operadores conversan entre cuentas, dispositivo compartido o sesión temporal. | US-09, US-11 |
| DEC-08 | Estándares de rendimiento | Medir línea base y acordar dispositivos/red de prueba antes de fijar umbrales. | RNF-10, RNF-11, RNF-14 |

---

# 10. Riesgos y mitigaciones

| Riesgo | Consecuencia | Mitigación |
|---|---|---|
| La cámara existe pero no hay modelo integrado | No hay traducción real de señas. | Separar historia de captura y de inferencia; exigir prueba de extremo a extremo. |
| Autenticación local | Acceso privado no seguro. | Backend y autorización de servidor antes de usar datos reales. |
| Dataset insuficiente o no validado | Predicciones engañosas o sesgadas. | Limitar vocabulario, evaluación independiente y revisión de intérprete. |
| Roles divergentes entre SQL y UX | Permisos inconsistentes. | Aprobar matriz y migración controlada antes de crear usuarios. |
| Exceso de alcance | Historias demasiado grandes y Sprints no terminables. | Dividir historias, limitar vocabulario y usar DoR. |
| Retención no definida | Riesgo de privacidad. | Minimización y política de conservación antes de guardar audio/vídeo. |

---

# 11. Gestión Scrum: acuerdos operativos

### Definition of Ready
Una historia puede entrar a Sprint cuando:
- tiene objetivo/valor comprensible;
- rol, permiso y regla de negocio identificados;
- criterios Given/When/Then verificables;
- dependencias conocidas y disponibles o acordadas;
- datos, errores y comportamiento alternativo definidos;
- tamaño estimable por el equipo.

### Definition of Done
Una historia se completa cuando:
- criterios de aceptación aprobados;
- integración en la rama acordada;
- pruebas funcionales, negativas y de regresión ejecutadas;
- RNF aplicables revisados;
- seguridad y privacidad verificadas;
- documentación actualizada;
- Product Owner acepta el incremento;
- estado de backlog refleja implementación real.

### Refinamiento
En cada sesión:
1. Confirmar valor y prioridad.
2. Revisar dependencias y riesgos.
3. Dividir historias grandes si no caben en un Sprint.
4. Identificar tareas técnicas sin confundirlas con historias de usuario.
5. Estimar con el equipo usando la técnica que acuerden.
6. Actualizar estado, criterios y enlaces a commits/pruebas.

---

# 12. Estado de Jira y preparación para importación

Se intentó localizar el sitio/proyecto de Jira asociado a la cuenta conectada. La consulta de recursos Atlassian no devolvió ningún sitio accesible y la búsqueda de Rovo no devolvió resultados para SIGNA-TECH-APP. Por tanto:

- **No se pudo inspeccionar el Product Backlog existente.**
- **No se creó ni modificó ningún issue en Jira.**
- No se afirma que Jira esté vacío ni que no exista un proyecto; solo que no se obtuvo acceso a un sitio en esta ejecución.
- Las historias quedan listas para revisión e importación una vez se habilite el sitio/proyecto correcto y se verifique que no hay duplicados.

Para importar, usar el CSV complementario de este directorio y mapear los campos de acuerdo con la configuración del proyecto. Crear primero las seis épicas o asociar cada historia a las épicas existentes. Revisar prioridades, tipos de issue y campos obligatorios antes de ejecutar la importación.

---

## 13. Control de calidad de esta propuesta

- 27/27 RF tienen una historia vinculada.
- Cada historia tiene rol, formato Como/Quiero/Para, prioridad, criterios, dependencias, reglas y pruebas sugeridas.
- Las seis épicas se conservan sin crear épicas duplicadas.
- Los 23 RNF se mapean como condiciones transversales.
- No se asignan puntos, capacidad, duración, responsables ni fechas inventadas.
- Se diferencia prototipo visual de integración demostrada.
- No se promete traducción completa de LSC.
- Jira no se modifica porque el sitio/proyecto no pudo ser localizado.

**Aprobación requerida:** Product Owner + equipo Scrum. Esta propuesta no se convierte en línea base oficial hasta su revisión y aceptación.
