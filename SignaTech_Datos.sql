-- =====================================================================
-- SignaTechApp - Datos de prueba (20+ registros por tabla)
-- Ejecutar DESPUÉS de SignaTech_.sql
-- Las contraseñas son SOLO de prueba (hash SHA2-256 de ejemplo).
-- =====================================================================
USE SignaTechApp;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------------
-- 1. TblRol (20)
-- ---------------------------------------------------------------------
INSERT INTO TblRol (RolIdRol, RolNombre, RolDescripcion, RolEstado) VALUES
(1,  'Administrador',        'Control total del sistema',                         'ACTIVO'),
(2,  'Usuario Sordo',        'Persona sorda que usa la app para comunicarse',     'ACTIVO'),
(3,  'Intérprete',           'Intérprete de lengua de señas colombiana',          'ACTIVO'),
(4,  'Validador',            'Valida y aprueba señas del diccionario',            'ACTIVO'),
(5,  'Docente',              'Docente que usa la app en el aula',                 'ACTIVO'),
(6,  'Estudiante',           'Estudiante que aprende lengua de señas',            'ACTIVO'),
(7,  'Familiar',             'Familiar de una persona sorda',                     'ACTIVO'),
(8,  'Moderador',            'Modera contenido y retroalimentaciones',            'ACTIVO'),
(9,  'Auditor',              'Consulta el historial de auditoría',                'ACTIVO'),
(10, 'Soporte Técnico',      'Atiende reportes de fallas',                        'ACTIVO'),
(11, 'Analista de Datos',    'Analiza métricas y datasets',                       'ACTIVO'),
(12, 'Ingeniero IA',         'Entrena y despliega modelos de IA',                 'ACTIVO'),
(13, 'Invitado',             'Acceso limitado de solo lectura',                   'ACTIVO'),
(14, 'Coordinador',          'Coordina equipos de validación',                    'ACTIVO'),
(15, 'Supervisor',           'Supervisa la calidad de las traducciones',          'ACTIVO'),
(16, 'Desarrollador',        'Acceso a entornos de desarrollo',                   'INACTIVO'),
(17, 'Tester QA',            'Realiza pruebas de calidad',                        'ACTIVO'),
(18, 'Gestor de Contenido',  'Gestiona material multimedia',                      'ACTIVO'),
(19, 'Investigador',         'Investigador académico con acceso a estadísticas',  'ACTIVO'),
(20, 'Padre de Familia',     'Acompaña a menores usuarios de la app',             'INACTIVO');

-- ---------------------------------------------------------------------
-- 2. TblUsuario (20)
-- ---------------------------------------------------------------------
INSERT INTO TblUsuario (UsuIdUsuario, UsuNombreCompleto, UsuCorreo, UsuContrasenaHash, UsuEstado, UsuFechaRegistro, RolIdRol) VALUES
(1,  'Carlos Andrés Muñoz Rojas',      'carlos.munoz@signatech.co',      SHA2('Admin#2026',256),  'ACTIVO',    '2026-01-05 08:15:00', 1),
(2,  'María Fernanda Ortiz Paz',       'maria.ortiz@correo.com',         SHA2('Maria#2026',256),  'ACTIVO',    '2026-01-12 09:30:00', 2),
(3,  'Juan Sebastián Pérez Gómez',     'juan.perez@correo.com',          SHA2('Juan#2026',256),   'ACTIVO',    '2026-01-15 10:00:00', 2),
(4,  'Laura Valentina Cruz Díaz',      'laura.cruz@signatech.co',        SHA2('Laura#2026',256),  'ACTIVO',    '2026-01-20 11:45:00', 4),
(5,  'Andrés Felipe Ramírez Soto',     'andres.ramirez@signatech.co',    SHA2('Andres#2026',256), 'ACTIVO',    '2026-02-02 14:20:00', 3),
(6,  'Camila Andrea Torres León',      'camila.torres@correo.com',       SHA2('Camila#2026',256), 'ACTIVO',    '2026-02-08 08:50:00', 2),
(7,  'Diego Alejandro Vargas Mora',    'diego.vargas@colegio.edu.co',    SHA2('Diego#2026',256),  'ACTIVO',    '2026-02-14 13:10:00', 5),
(8,  'Sofía Isabel Herrera Cano',      'sofia.herrera@universidad.edu.co', SHA2('Sofia#2026',256), 'ACTIVO',   '2026-02-20 15:35:00', 6),
(9,  'Santiago José Castillo Ruiz',    'santiago.castillo@correo.com',   SHA2('Santi#2026',256),  'BLOQUEADO', '2026-03-01 09:05:00', 2),
(10, 'Paula Natalia Mejía Arias',      'paula.mejia@signatech.co',       SHA2('Paula#2026',256),  'ACTIVO',    '2026-03-05 10:25:00', 4),
(11, 'Julián David Rincón Páez',       'julian.rincon@correo.com',       SHA2('Julian#2026',256), 'ACTIVO',    '2026-03-11 16:40:00', 2),
(12, 'Valeria Lucía Gutiérrez Peña',   'valeria.gutierrez@correo.com',   SHA2('Valeria#2026',256),'ACTIVO',    '2026-03-18 07:55:00', 7),
(13, 'Mateo Esteban Navarro Silva',    'mateo.navarro@signatech.co',     SHA2('Mateo#2026',256),  'ACTIVO',    '2026-03-25 12:00:00', 3),
(14, 'Daniela Carolina Salazar Vega',  'daniela.salazar@correo.com',     SHA2('Dani#2026',256),   'INACTIVO',  '2026-04-02 09:15:00', 2),
(15, 'Sebastián Camilo Ríos Bernal',   'sebastian.rios@signatech.co',    SHA2('Sebas#2026',256),  'ACTIVO',    '2026-04-09 11:30:00', 8),
(16, 'Isabella María Cárdenas Ponce',  'isabella.cardenas@correo.com',   SHA2('Isabella#2026',256),'ACTIVO',   '2026-04-16 14:50:00', 2),
(17, 'Nicolás Andrés Zapata Lozano',   'nicolas.zapata@signatech.co',    SHA2('Nico#2026',256),   'ACTIVO',    '2026-04-23 08:20:00', 9),
(18, 'Gabriela Alejandra Pinto Ochoa', 'gabriela.pinto@correo.com',      SHA2('Gaby#2026',256),   'ACTIVO',    '2026-05-04 10:10:00', 2),
(19, 'Tomás Ricardo Acosta Franco',    'tomas.acosta@signatech.co',      SHA2('Tomas#2026',256),  'ACTIVO',    '2026-05-12 13:45:00', 10),
(20, 'Natalia Patricia Quintero Mesa', 'natalia.quintero@signatech.co',  SHA2('Nati#2026',256),   'ACTIVO',    '2026-05-20 16:05:00', 12);

-- ---------------------------------------------------------------------
-- 3. TblPermiso (20)
-- ---------------------------------------------------------------------
INSERT INTO TblPermiso (PerIdPermiso, PerNombre, PerDescripcion, PerEstado) VALUES
(1,  'USUARIO_CREAR',        'Crear usuarios',                              'ACTIVO'),
(2,  'USUARIO_EDITAR',       'Editar datos de usuarios',                    'ACTIVO'),
(3,  'USUARIO_ELIMINAR',     'Desactivar o eliminar usuarios',              'ACTIVO'),
(4,  'USUARIO_VER',          'Consultar listado de usuarios',               'ACTIVO'),
(5,  'ROL_GESTIONAR',        'Crear y modificar roles',                     'ACTIVO'),
(6,  'PERMISO_ASIGNAR',      'Asignar permisos a roles',                    'ACTIVO'),
(7,  'SENA_CREAR',           'Registrar nuevas señas',                      'ACTIVO'),
(8,  'SENA_EDITAR',          'Modificar señas existentes',                  'ACTIVO'),
(9,  'SENA_VALIDAR',         'Aprobar o rechazar señas',                    'ACTIVO'),
(10, 'SENA_CONSULTAR',       'Consultar el diccionario de señas',           'ACTIVO'),
(11, 'TRADUCIR_SENAS',       'Usar el traductor de señas a texto',          'ACTIVO'),
(12, 'TRADUCIR_VOZ',         'Usar el traductor de voz a texto',            'ACTIVO'),
(13, 'RETRO_ENVIAR',         'Enviar retroalimentación',                    'ACTIVO'),
(14, 'RETRO_MODERAR',        'Moderar retroalimentaciones',                 'ACTIVO'),
(15, 'MODELO_ENTRENAR',      'Entrenar modelos de IA',                      'ACTIVO'),
(16, 'MODELO_DESPLEGAR',     'Activar modelos en producción',               'ACTIVO'),
(17, 'DATASET_GESTIONAR',    'Gestionar datasets de entrenamiento',         'ACTIVO'),
(18, 'AUDITORIA_VER',        'Consultar historial de auditoría',            'ACTIVO'),
(19, 'REPORTE_GESTIONAR',    'Atender reportes de fallas',                  'ACTIVO'),
(20, 'REPORTE_EXPORTAR',     'Exportar reportes y estadísticas',            'INACTIVO');

-- ---------------------------------------------------------------------
-- 4. TblRelRolPermiso (35)  (sin pares repetidos)
-- ---------------------------------------------------------------------
INSERT INTO TblRelRolPermiso (RolIdRol, PerIdPermiso) VALUES
-- Administrador
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,18),
-- Usuario Sordo
(2,10),(2,11),(2,12),(2,13),
-- Intérprete
(3,7),(3,10),(3,11),
-- Validador
(4,9),(4,10),(4,8),
-- Docente / Estudiante
(5,10),(5,11),(6,10),(6,11),
-- Moderador
(8,14),(8,13),
-- Auditor
(9,18),(9,4),
-- Soporte
(10,19),(10,4),
-- Analista de datos
(11,17),(11,20),
-- Ingeniero IA
(12,15),(12,16),(12,17),
-- Invitado
(13,10);

-- ---------------------------------------------------------------------
-- 5. TblSesion (20)
-- ---------------------------------------------------------------------
INSERT INTO TblSesion (SesIdSesion, SesFechaInicio, SesFechaFin, SesDireccionIP, SesTokenJWT, SesEstado, UsuIdUsuario) VALUES
(1,  '2026-09-01 08:00:00', '2026-09-01 09:10:00', '181.49.10.21',  'eyJhbGciOiJIUzI1NiJ9.sesion01.k3f9a', 'CERRADA',  1),
(2,  '2026-09-01 09:30:00', '2026-09-01 10:05:00', '190.85.44.102', 'eyJhbGciOiJIUzI1NiJ9.sesion02.p8d2c', 'CERRADA',  2),
(3,  '2026-09-02 10:15:00', '2026-09-02 10:45:00', '186.30.12.77',  'eyJhbGciOiJIUzI1NiJ9.sesion03.m1x7b', 'CERRADA',  3),
(4,  '2026-09-02 14:00:00', '2026-09-02 15:30:00', '181.49.10.35',  'eyJhbGciOiJIUzI1NiJ9.sesion04.q5z0e', 'CERRADA',  4),
(5,  '2026-09-03 08:45:00', '2026-09-03 12:45:00', '200.116.5.18',  'eyJhbGciOiJIUzI1NiJ9.sesion05.t6w4h', 'EXPIRADA', 5),
(6,  '2026-09-03 16:20:00', '2026-09-03 16:55:00', '190.85.44.130', 'eyJhbGciOiJIUzI1NiJ9.sesion06.v2n8j', 'CERRADA',  6),
(7,  '2026-09-04 07:50:00', '2026-09-04 08:40:00', '186.30.99.14',  'eyJhbGciOiJIUzI1NiJ9.sesion07.c9r1k', 'CERRADA',  7),
(8,  '2026-09-04 11:10:00', '2026-09-04 11:50:00', '201.184.77.9',  'eyJhbGciOiJIUzI1NiJ9.sesion08.y4l3s', 'CERRADA',  8),
(9,  '2026-09-05 09:00:00', '2026-09-05 13:00:00', '181.49.10.88',  'eyJhbGciOiJIUzI1NiJ9.sesion09.u7g5d', 'EXPIRADA', 9),
(10, '2026-09-05 13:30:00', '2026-09-05 14:40:00', '190.24.61.200', 'eyJhbGciOiJIUzI1NiJ9.sesion10.a0b6f', 'CERRADA',  10),
(11, '2026-09-08 08:10:00', '2026-09-08 09:00:00', '186.30.12.91',  'eyJhbGciOiJIUzI1NiJ9.sesion11.h3j9m', 'CERRADA',  11),
(12, '2026-09-08 15:00:00', '2026-09-08 15:25:00', '200.116.5.44',  'eyJhbGciOiJIUzI1NiJ9.sesion12.e8k2n', 'CERRADA',  12),
(13, '2026-09-09 10:40:00', '2026-09-09 11:30:00', '181.49.10.120', 'eyJhbGciOiJIUzI1NiJ9.sesion13.w1p7q', 'CERRADA',  13),
(14, '2026-09-10 12:00:00', '2026-09-10 16:00:00', '190.85.44.15',  'eyJhbGciOiJIUzI1NiJ9.sesion14.z5t4r', 'EXPIRADA', 14),
(15, '2026-09-11 09:20:00', '2026-09-11 10:10:00', '201.184.77.52', 'eyJhbGciOiJIUzI1NiJ9.sesion15.d2v8x', 'CERRADA',  15),
(16, '2026-09-12 17:00:00', '2026-09-12 17:40:00', '186.30.99.63',  'eyJhbGciOiJIUzI1NiJ9.sesion16.f6c1y', 'CERRADA',  16),
(17, '2026-10-20 08:30:00', NULL,                  '181.49.10.14',  'eyJhbGciOiJIUzI1NiJ9.sesion17.g9m3a', 'ACTIVA',   17),
(18, '2026-10-22 10:05:00', NULL,                  '190.24.61.77',  'eyJhbGciOiJIUzI1NiJ9.sesion18.i4o5b', 'ACTIVA',   18),
(19, '2026-10-25 14:15:00', NULL,                  '200.116.5.130', 'eyJhbGciOiJIUzI1NiJ9.sesion19.j7s0c', 'ACTIVA',   19),
(20, '2026-10-26 07:45:00', NULL,                  '181.49.10.200', 'eyJhbGciOiJIUzI1NiJ9.sesion20.l2u6d', 'ACTIVA',   20);

-- ---------------------------------------------------------------------
-- 6. TblHistorialAuditoria (20)
-- ---------------------------------------------------------------------
INSERT INTO TblHistorialAuditoria (AudIdAuditoria, AudAccion, AudDescripcion, AudFecha, AudDireccionIP, UsuIdUsuario) VALUES
(1,  'LOGIN',               'Inicio de sesión exitoso',                          '2026-09-01 08:00:00', '181.49.10.21',  1),
(2,  'USUARIO_CREAR',       'Se creó el usuario Juan Sebastián Pérez Gómez',     '2026-09-01 08:20:00', '181.49.10.21',  1),
(3,  'LOGIN',               'Inicio de sesión exitoso',                          '2026-09-01 09:30:00', '190.85.44.102', 2),
(4,  'TRADUCCION_SENAS',    'Traducción de señas realizada correctamente',       '2026-09-01 09:42:00', '190.85.44.102', 2),
(5,  'SENA_VALIDAR',        'Se aprobó la seña "Hola"',                          '2026-09-02 14:10:00', '181.49.10.35',  4),
(6,  'SENA_VALIDAR',        'Se rechazó la seña "Escuela" por baja calidad',     '2026-09-02 14:35:00', '181.49.10.35',  4),
(7,  'LOGIN_FALLIDO',       'Contraseña incorrecta (intento 3)',                 '2026-09-05 08:55:00', '181.49.10.88',  9),
(8,  'USUARIO_BLOQUEAR',    'Cuenta bloqueada por intentos fallidos',            '2026-09-05 09:00:00', '181.49.10.88',  9),
(9,  'MODELO_ENTRENAR',     'Inicio de entrenamiento SignaTransformer 2.0',      '2026-09-06 10:00:00', '190.24.61.200', 20),
(10, 'DATASET_CREAR',       'Se registró el dataset LSC-Saludos-v1',             '2026-09-06 11:30:00', '190.24.61.200', 20),
(11, 'MODELO_DESPLEGAR',    'Se activó el modelo SignaCOL-LSC 1.0',              '2026-09-07 16:00:00', '190.24.61.200', 20),
(12, 'ROL_EDITAR',          'Se modificó la descripción del rol Moderador',      '2026-09-08 09:15:00', '181.49.10.21',  1),
(13, 'PERMISO_ASIGNAR',     'Se asignó SENA_VALIDAR al rol Validador',           '2026-09-08 09:40:00', '181.49.10.21',  1),
(14, 'RETRO_ENVIAR',        'Retroalimentación sobre traducción #5',             '2026-09-09 10:50:00', '186.30.12.77',  3),
(15, 'RETRO_MODERAR',       'Se revisó retroalimentación #7',                    '2026-09-10 11:00:00', '201.184.77.52', 15),
(16, 'REPORTE_CREAR',       'Reporte de falla: cámara no responde',              '2026-09-11 08:30:00', '186.30.99.14',  7),
(17, 'REPORTE_RESOLVER',    'Se resolvió el reporte #1',                         '2026-09-12 15:20:00', '200.116.5.130', 19),
(18, 'AUDITORIA_CONSULTAR', 'Consulta del historial del mes de septiembre',      '2026-10-01 09:00:00', '181.49.10.14',  17),
(19, 'LOGOUT',              'Cierre de sesión',                                  '2026-10-01 09:45:00', '181.49.10.14',  17),
(20, 'USUARIO_EDITAR',      'Se cambió el estado de Daniela Salazar a INACTIVO', '2026-10-10 12:00:00', '181.49.10.21',  1);

-- ---------------------------------------------------------------------
-- 7. TblDiccionarioSena (20)
--    1-15 APROBADA | 16-17 RECHAZADA | 18-20 PENDIENTE
-- ---------------------------------------------------------------------
INSERT INTO TblDiccionarioSena (SenIdSena, SenNombre, SenDescripcion, SenCategoria, SenArchivoMultimedia, SenEstadoValidacion, SenFechaRegistro) VALUES
(1,  'Hola',           'Mano abierta junto a la sien que se mueve hacia afuera',        'Saludos',     '/media/senas/hola.mp4',           'APROBADA',  '2026-02-01 09:00:00'),
(2,  'Gracias',        'Mano plana desde la barbilla hacia adelante',                   'Cortesía',    '/media/senas/gracias.mp4',        'APROBADA',  '2026-02-01 09:10:00'),
(3,  'Por favor',      'Mano plana en círculos sobre el pecho',                         'Cortesía',    '/media/senas/por_favor.mp4',      'APROBADA',  '2026-02-01 09:20:00'),
(4,  'Adiós',          'Mano abierta que se agita de lado a lado',                      'Saludos',     '/media/senas/adios.mp4',          'APROBADA',  '2026-02-02 10:00:00'),
(5,  'Buenos días',    'Seña de "bueno" seguida de la seña de "día"',                   'Saludos',     '/media/senas/buenos_dias.mp4',    'APROBADA',  '2026-02-02 10:15:00'),
(6,  'Buenas tardes',  'Seña de "bueno" seguida de la seña de "tarde"',                 'Saludos',     '/media/senas/buenas_tardes.mp4',  'APROBADA',  '2026-02-02 10:30:00'),
(7,  'Buenas noches',  'Seña de "bueno" seguida de la seña de "noche"',                 'Saludos',     '/media/senas/buenas_noches.mp4',  'APROBADA',  '2026-02-02 10:45:00'),
(8,  'Sí',             'Puño cerrado que asiente de arriba hacia abajo',                'Respuestas',  '/media/senas/si.mp4',             'APROBADA',  '2026-02-03 08:30:00'),
(9,  'No',             'Dedos índice y medio que se juntan con el pulgar',              'Respuestas',  '/media/senas/no.mp4',             'APROBADA',  '2026-02-03 08:45:00'),
(10, 'Ayuda',          'Puño sobre la palma de la otra mano que se eleva',              'Emergencia',  '/media/senas/ayuda.mp4',          'APROBADA',  '2026-02-03 09:00:00'),
(11, 'Agua',           'Letra W junto a la boca con un leve toque',                     'Alimentos',   '/media/senas/agua.mp4',           'APROBADA',  '2026-02-04 11:00:00'),
(12, 'Comida',         'Dedos juntos que tocan la boca repetidamente',                  'Alimentos',   '/media/senas/comida.mp4',         'APROBADA',  '2026-02-04 11:15:00'),
(13, 'Familia',        'Letra F que dibuja un círculo frente al cuerpo',                'Personas',    '/media/senas/familia.mp4',        'APROBADA',  '2026-02-04 11:30:00'),
(14, 'Amigo',          'Índices enganchados que se alternan',                           'Personas',    '/media/senas/amigo.mp4',          'APROBADA',  '2026-02-05 14:00:00'),
(15, 'Casa',           'Manos formando un techo triangular',                            'Lugares',     '/media/senas/casa.mp4',           'APROBADA',  '2026-02-05 14:15:00'),
(16, 'Escuela',        'Palmas que se golpean suavemente dos veces',                    'Lugares',     '/media/senas/escuela.mp4',        'RECHAZADA', '2026-02-06 09:00:00'),
(17, 'Trabajo',        'Puños que golpean uno sobre otro',                              'Lugares',     '/media/senas/trabajo.mp4',        'RECHAZADA', '2026-02-06 09:20:00'),
(18, 'Médico',         'Dedos sobre la muñeca simulando tomar el pulso',                'Salud',       '/media/senas/medico.mp4',         'PENDIENTE', '2026-10-15 10:00:00'),
(19, 'Baño',           'Letra T agitada de lado a lado',                                'Lugares',     '/media/senas/bano.mp4',           'PENDIENTE', '2026-10-16 10:30:00'),
(20, 'Perdón',         'Puño circular sobre el pecho',                                  'Cortesía',    '/media/senas/perdon.mp4',         'PENDIENTE', '2026-10-17 11:00:00');

-- ---------------------------------------------------------------------
-- 8. TblValidacionSena (20)  (validadores: usuarios 4 y 10, rol Validador)
--    Señas 3, 8 y 12 fueron rechazadas primero y luego aprobadas.
-- ---------------------------------------------------------------------
INSERT INTO TblValidacionSena (ValIdValidacion, ValObservaciones, ValResultado, ValFecha, SenIdSena, UsuIdUsuario) VALUES
(1,  'Video claro y movimiento correcto',                         'APROBADA',  '2026-02-10 09:00:00', 1,  4),
(2,  'Coincide con el diccionario oficial',                       'APROBADA',  '2026-02-10 09:15:00', 2,  4),
(3,  'El movimiento circular es muy corto',                       'RECHAZADA', '2026-02-10 09:30:00', 3,  4),
(4,  'Se corrigió el video; ahora es correcto',                   'APROBADA',  '2026-02-17 10:00:00', 3,  10),
(5,  'Correcta',                                                  'APROBADA',  '2026-02-10 10:00:00', 4,  10),
(6,  'Correcta, buena iluminación',                               'APROBADA',  '2026-02-11 08:30:00', 5,  4),
(7,  'Correcta',                                                  'APROBADA',  '2026-02-11 08:45:00', 6,  4),
(8,  'Correcta',                                                  'APROBADA',  '2026-02-11 09:00:00', 7,  10),
(9,  'Falta mostrar el movimiento completo de la cabeza',         'RECHAZADA', '2026-02-12 09:00:00', 8,  10),
(10, 'Nuevo video con el movimiento completo',                    'APROBADA',  '2026-02-19 09:30:00', 8,  4),
(11, 'Correcta',                                                  'APROBADA',  '2026-02-12 09:20:00', 9,  4),
(12, 'Seña de emergencia verificada con intérprete',              'APROBADA',  '2026-02-12 10:00:00', 10, 10),
(13, 'Correcta',                                                  'APROBADA',  '2026-02-13 11:00:00', 11, 4),
(14, 'La mano se sale del encuadre',                              'RECHAZADA', '2026-02-13 11:20:00', 12, 10),
(15, 'Video repetido con buen encuadre',                          'APROBADA',  '2026-02-20 11:00:00', 12, 10),
(16, 'Correcta',                                                  'APROBADA',  '2026-02-14 14:00:00', 13, 4),
(17, 'Correcta',                                                  'APROBADA',  '2026-02-14 14:20:00', 14, 10),
(18, 'Correcta',                                                  'APROBADA',  '2026-02-15 09:10:00', 15, 4),
(19, 'La configuración de manos no corresponde a la LSC',         'RECHAZADA', '2026-02-16 09:00:00', 16, 10),
(20, 'No es la seña usada en Colombia para trabajo',              'RECHAZADA', '2026-02-16 09:30:00', 17, 4);

-- ---------------------------------------------------------------------
-- 9. TblModeloIA (20)
-- ---------------------------------------------------------------------
INSERT INTO TblModeloIA (ModIdModelo, ModNombre, ModVersion, ModDescripcion, ModPrecision, ModEstado, ModFechaEntrenamiento) VALUES
(1,  'SignaNet CNN',               '0.1', 'Primer prototipo con CNN 2D',                    78.40, 'DEPRECADO',     '2026-01-10 18:00:00'),
(2,  'SignaNet CNN',               '0.2', 'CNN con aumento de datos',                       82.10, 'DEPRECADO',     '2026-01-25 18:00:00'),
(3,  'SignaNet CNN',               '1.0', 'CNN optimizada para móviles',                    86.75, 'INACTIVO',      '2026-02-15 17:30:00'),
(4,  'SignaLSTM',                  '1.0', 'LSTM para secuencias de señas',                  88.30, 'INACTIVO',      '2026-03-01 16:00:00'),
(5,  'SignaLSTM',                  '1.1', 'LSTM con mejor manejo de ruido',                 90.55, 'ACTIVO',        '2026-03-20 16:00:00'),
(6,  'SignaTransformer',           '1.0', 'Transformer sobre puntos de referencia',         92.10, 'ACTIVO',        '2026-04-05 20:00:00'),
(7,  'SignaTransformer',           '1.1', 'Transformer con atención temporal',              93.45, 'ACTIVO',        '2026-04-28 20:00:00'),
(8,  'MediaPipe-Hands Clasificador','1.0', 'Clasificador sobre landmarks de MediaPipe',     91.20, 'ACTIVO',        '2026-05-06 15:00:00'),
(9,  'MediaPipe-Hands Clasificador','1.1', 'Mejora en manos parcialmente ocultas',          92.80, 'ACTIVO',        '2026-05-22 15:00:00'),
(10, 'SignaGRU',                   '1.0', 'GRU ligera para dispositivos de gama baja',      89.90, 'ACTIVO',        '2026-06-03 14:00:00'),
(11, 'SignaGRU',                   '1.1', 'GRU con cuantización',                           90.40, 'INACTIVO',      '2026-06-18 14:00:00'),
(12, 'SignaVoz Whisper-ES',        '1.0', 'Reconocimiento de voz en español colombiano',    94.60, 'ACTIVO',        '2026-06-30 19:00:00'),
(13, 'SignaCNN-3D',                '1.0', 'CNN 3D sobre clips de video',                    87.20, 'INACTIVO',      '2026-07-08 17:00:00'),
(14, 'SignaCNN-3D',                '2.0', 'CNN 3D con preentrenamiento',                    93.05, 'ACTIVO',        '2026-07-25 17:00:00'),
(15, 'SignaTransformer',           '2.0', 'Transformer de mayor tamaño (en entrenamiento)', NULL,  'ENTRENAMIENTO', NULL),
(16, 'SignaLSTM',                  '2.0', 'LSTM bidireccional (en entrenamiento)',          NULL,  'ENTRENAMIENTO', NULL),
(17, 'SignaHybrid',                '0.9', 'CNN + Transformer, versión beta',                85.00, 'ENTRENAMIENTO', '2026-08-10 21:00:00'),
(18, 'SignaHybrid',                '1.0', 'CNN + Transformer, versión estable',             94.10, 'ACTIVO',        '2026-08-30 21:00:00'),
(19, 'SignaCOL-LSC',               '1.0', 'Modelo especializado en Lengua de Señas Colombiana', 95.20, 'ACTIVO',    '2026-09-15 20:00:00'),
(20, 'SignaCOL-LSC',               '1.1', 'Ampliación de vocabulario (en entrenamiento)',   NULL,  'ENTRENAMIENTO', NULL);

-- ---------------------------------------------------------------------
-- 10. TblDatasetIA (20)
-- ---------------------------------------------------------------------
INSERT INTO TblDatasetIA (DatIdDataset, DatNombre, DatDescripcion, DatRuta, DatCantidadRegistros, DatEstado, DatFechaRegistro) VALUES
(1,  'LSC-Saludos-v1',        'Videos de saludos básicos',                    '/datasets/lsc/saludos_v1',       1200,  'ACTIVO',   '2026-01-08 10:00:00'),
(2,  'LSC-Saludos-v2',        'Saludos con más variedad de personas',         '/datasets/lsc/saludos_v2',       2400,  'ACTIVO',   '2026-02-10 10:00:00'),
(3,  'LSC-Cortesia',          'Gracias, por favor, perdón',                   '/datasets/lsc/cortesia',          950,  'ACTIVO',   '2026-02-12 10:00:00'),
(4,  'LSC-Respuestas',        'Sí, no y respuestas cortas',                   '/datasets/lsc/respuestas',        800,  'ACTIVO',   '2026-02-14 10:00:00'),
(5,  'LSC-Emergencia',        'Señas de ayuda y emergencia',                  '/datasets/lsc/emergencia',        600,  'ACTIVO',   '2026-02-20 10:00:00'),
(6,  'LSC-Alimentos',         'Agua, comida y bebidas',                       '/datasets/lsc/alimentos',        1100,  'ACTIVO',   '2026-03-01 10:00:00'),
(7,  'LSC-Personas',          'Familia, amigo y relaciones',                  '/datasets/lsc/personas',         1350,  'ACTIVO',   '2026-03-05 10:00:00'),
(8,  'LSC-Lugares',           'Casa, escuela, trabajo, baño',                 '/datasets/lsc/lugares',          1000,  'ACTIVO',   '2026-03-10 10:00:00'),
(9,  'LSC-Salud',             'Vocabulario médico básico',                    '/datasets/lsc/salud',             700,  'ACTIVO',   '2026-03-18 10:00:00'),
(10, 'LSC-Numeros',           'Números del 0 al 100',                         '/datasets/lsc/numeros',          3000,  'ACTIVO',   '2026-03-25 10:00:00'),
(11, 'LSC-Alfabeto',          'Alfabeto dactilológico',                       '/datasets/lsc/alfabeto',         2600,  'ACTIVO',   '2026-04-02 10:00:00'),
(12, 'LSC-Dias-Semana',       'Días de la semana',                            '/datasets/lsc/dias',              840,  'ACTIVO',   '2026-04-10 10:00:00'),
(13, 'LSC-Colores',           'Colores básicos',                              '/datasets/lsc/colores',           720,  'ACTIVO',   '2026-04-18 10:00:00'),
(14, 'LSC-Animales',          'Animales comunes',                             '/datasets/lsc/animales',          980,  'INACTIVO', '2026-04-25 10:00:00'),
(15, 'LSC-Verbos',            'Verbos de uso frecuente',                      '/datasets/lsc/verbos',           2200,  'ACTIVO',   '2026-05-05 10:00:00'),
(16, 'LSC-Frases-Cortas',     'Frases de 2 a 4 señas',                        '/datasets/lsc/frases',           1800,  'ACTIVO',   '2026-05-15 10:00:00'),
(17, 'LSC-Poca-Luz',          'Señas grabadas con iluminación baja',          '/datasets/lsc/poca_luz',          650,  'ACTIVO',   '2026-06-01 10:00:00'),
(18, 'LSC-Fondos-Variados',   'Señas con fondos complejos',                   '/datasets/lsc/fondos',            900,  'ACTIVO',   '2026-06-12 10:00:00'),
(19, 'Voz-Español-Col',       'Audios en español colombiano',                 '/datasets/voz/es_col',           5000,  'ACTIVO',   '2026-07-01 10:00:00'),
(20, 'LSC-Prueba-Antiguo',    'Dataset de prueba obsoleto',                   '/datasets/lsc/prueba_antiguo',     50,  'INACTIVO', '2026-01-02 10:00:00');

-- ---------------------------------------------------------------------
-- 11. TblRelDatasetModelo (24)
-- ---------------------------------------------------------------------
INSERT INTO TblRelDatasetModelo (DatIdDataset, ModIdModelo, RdmFechaUso) VALUES
(20, 1,  '2026-01-10 12:00:00'),
(1,  1,  '2026-01-10 12:30:00'),
(1,  2,  '2026-01-25 12:00:00'),
(2,  3,  '2026-02-15 12:00:00'),
(3,  3,  '2026-02-15 12:30:00'),
(2,  4,  '2026-03-01 12:00:00'),
(4,  4,  '2026-03-01 12:30:00'),
(5,  5,  '2026-03-20 12:00:00'),
(6,  5,  '2026-03-20 12:30:00'),
(7,  6,  '2026-04-05 12:00:00'),
(8,  6,  '2026-04-05 12:30:00'),
(9,  7,  '2026-04-28 12:00:00'),
(10, 7,  '2026-04-28 12:30:00'),
(11, 8,  '2026-05-06 12:00:00'),
(11, 9,  '2026-05-22 12:00:00'),
(17, 9,  '2026-05-22 12:30:00'),
(15, 10, '2026-06-03 12:00:00'),
(16, 11, '2026-06-18 12:00:00'),
(19, 12, '2026-06-30 12:00:00'),
(18, 14, '2026-07-25 12:00:00'),
(16, 18, '2026-08-30 12:00:00'),
(17, 18, '2026-08-30 12:30:00'),
(2,  19, '2026-09-15 12:00:00'),
(16, 19, '2026-09-15 12:30:00');

-- ---------------------------------------------------------------------
-- 12. TblRelDatasetSena (30)
-- ---------------------------------------------------------------------
INSERT INTO TblRelDatasetSena (DatIdDataset, SenIdSena) VALUES
(1,1),(1,4),(1,5),(1,6),(1,7),
(2,1),(2,4),(2,5),(2,6),(2,7),
(3,2),(3,3),(3,20),
(4,8),(4,9),
(5,10),
(6,11),(6,12),
(7,13),(7,14),
(8,15),(8,16),(8,17),(8,19),
(9,18),
(16,1),(16,2),(16,3),(16,10);

-- ---------------------------------------------------------------------
-- 13. TblTraduccionVoz (20)
-- ---------------------------------------------------------------------
INSERT INTO TblTraduccionVoz (VozIdTraduccion, VozAudioOriginal, VozTextoGenerado, VozTiempoRespuesta, VozEstadoProcesamiento, VozFecha, UsuIdUsuario) VALUES
(1,  '/audios/voz_001.wav', 'Hola, buenos días',                    1.25, 'PROCESADA', '2026-10-01 08:10:00', 2),
(2,  '/audios/voz_002.wav', 'Gracias por su ayuda',                 1.40, 'PROCESADA', '2026-10-01 08:25:00', 3),
(3,  '/audios/voz_003.wav', 'Necesito un vaso de agua',             1.80, 'PROCESADA', '2026-10-01 09:00:00', 6),
(4,  '/audios/voz_004.wav', '¿Cómo se encuentra usted?',            1.55, 'PROCESADA', '2026-10-02 10:15:00', 8),
(5,  '/audios/voz_005.wav', 'Voy para mi casa',                     1.10, 'PROCESADA', '2026-10-02 11:30:00', 11),
(6,  '/audios/voz_006.wav', 'Por favor llame al médico',            2.05, 'PROCESADA', '2026-10-02 14:00:00', 12),
(7,  NULL,                  NULL,                                   NULL, 'ERROR',     '2026-10-03 08:00:00', 14),
(8,  '/audios/voz_008.wav', 'Buenas tardes a todos',                1.30, 'PROCESADA', '2026-10-03 15:45:00', 16),
(9,  '/audios/voz_009.wav', 'Mi familia está aquí',                 1.65, 'PROCESADA', '2026-10-04 09:20:00', 18),
(10, '/audios/voz_010.wav', 'Quiero comer algo',                    1.20, 'PROCESADA', '2026-10-04 12:00:00', 2),
(11, '/audios/voz_011.wav', 'No entiendo, repita por favor',        2.20, 'PROCESADA', '2026-10-05 10:05:00', 3),
(12, '/audios/voz_012.wav', 'Hasta luego amigo',                    1.15, 'PROCESADA', '2026-10-05 16:30:00', 6),
(13, '/audios/voz_013.wav', 'El baño está al fondo',                1.70, 'PROCESADA', '2026-10-06 08:40:00', 9),
(14, '/audios/voz_014.wav', NULL,                                   NULL, 'ERROR',     '2026-10-06 09:10:00', 11),
(15, '/audios/voz_015.wav', 'Buenas noches, que descanse',          1.95, 'PROCESADA', '2026-10-07 19:00:00', 16),
(16, '/audios/voz_016.wav', 'Necesito ayuda con esto',              1.35, 'PROCESADA', '2026-10-08 13:25:00', 18),
(17, '/audios/voz_017.wav', 'Perdón, llegué tarde',                 1.50, 'PROCESADA', '2026-10-09 07:50:00', 8),
(18, '/audios/voz_018.wav', 'Mañana tenemos escuela',               1.85, 'PROCESADA', '2026-10-10 17:15:00', 12),
(19, '/audios/voz_019.wav', NULL,                                   NULL, 'PENDIENTE', '2026-10-26 07:55:00', 2),
(20, '/audios/voz_020.wav', NULL,                                   NULL, 'PENDIENTE', '2026-10-26 08:02:00', 3);

-- ---------------------------------------------------------------------
-- 14. TblTraduccionSenas (20)
--     Modelos usados: solo ACTIVOS (5,6,7,8,9,10,12,14,18,19)
--     Mapeo traducción -> usuario: 1->2, 2->3, 3->5, 4->6, 5->7, 6->8, 7->10,
--       8->11, 9->12, 10->13, 11->14, 12->15, 13->16, 14->17, 15->18, 16->19,
--       17->20, 18->1, 19->4, 20->9
-- ---------------------------------------------------------------------
INSERT INTO TblTraduccionSenas (TraIdTraduccion, TraTextoGenerado, TraConfianzaModelo, TraTiempoRespuesta, TraEstadoProcesamiento, TraFecha, UsuIdUsuario, ModIdModelo) VALUES
(1,  'Hola',                   96.50, 0.85, 'PROCESADA', '2026-10-01 08:00:00', 2,  19),
(2,  'Gracias',                94.20, 0.90, 'PROCESADA', '2026-10-01 08:15:00', 3,  19),
(3,  'Por favor, ayuda',       91.75, 1.10, 'PROCESADA', '2026-10-01 09:10:00', 5,  18),
(4,  'Adiós, amigo',           93.40, 1.05, 'PROCESADA', '2026-10-02 10:00:00', 6,  18),
(5,  'Buenos días, familia',   90.10, 1.30, 'PROCESADA', '2026-10-02 11:20:00', 7,  14),
(6,  'Buenas tardes',          95.80, 0.80, 'PROCESADA', '2026-10-02 14:10:00', 8,  19),
(7,  'Buenas noches',          94.90, 0.88, 'PROCESADA', '2026-10-03 08:30:00', 10, 7),
(8,  NULL,                     NULL,  NULL, 'ERROR',     '2026-10-03 09:00:00', 11, 6),
(9,  'No, gracias',            89.60, 1.25, 'PROCESADA', '2026-10-03 15:00:00', 12, 9),
(10, 'Agua, por favor',        92.30, 1.00, 'PROCESADA', '2026-10-04 09:40:00', 13, 8),
(11, 'Quiero comida',          88.45, 1.45, 'PROCESADA', '2026-10-04 12:10:00', 14, 5),
(12, 'Familia en casa',        91.00, 1.15, 'PROCESADA', '2026-10-05 10:30:00', 15, 10),
(13, 'Hola, amigo',            97.10, 0.78, 'PROCESADA', '2026-10-05 16:00:00', 16, 19),
(14, NULL,                     NULL,  NULL, 'ERROR',     '2026-10-06 08:55:00', 17, 12),
(15, 'Gracias, familia',       93.85, 0.95, 'PROCESADA', '2026-10-06 17:20:00', 18, 18),
(16, 'Buenos días',            96.00, 0.82, 'PROCESADA', '2026-10-07 07:45:00', 19, 19),
(17, 'Por favor, comida',      87.90, 1.50, 'PROCESADA', '2026-10-08 13:00:00', 20, 7),
(18, 'Adiós',                  95.20, 0.84, 'PROCESADA', '2026-10-09 18:10:00', 1,  14),
(19, 'Hola, buenas tardes',    92.70, 1.12, 'PROCESADA', '2026-10-10 11:45:00', 4,  18),
(20, 'Gracias, amigo',         94.60, 0.93, 'PROCESADA', '2026-10-12 09:05:00', 9,  19);

-- ---------------------------------------------------------------------
-- 15. TblRelTraduccionSena (29)  (traducciones 8 y 14 con ERROR no tienen señas)
-- ---------------------------------------------------------------------
INSERT INTO TblRelTraduccionSena (TraIdTraduccion, SenIdSena, RtsOrden, RtsConfianza) VALUES
(1,  1,  1, 96.50),
(2,  2,  1, 94.20),
(3,  3,  1, 92.00),
(3,  10, 2, 91.50),
(4,  4,  1, 93.80),
(4,  14, 2, 93.00),
(5,  5,  1, 90.50),
(5,  13, 2, 89.70),
(6,  6,  1, 95.80),
(7,  7,  1, 94.90),
(9,  9,  1, 90.00),
(9,  2,  2, 89.20),
(10, 11, 1, 92.80),
(10, 3,  2, 91.80),
(11, 12, 1, 88.45),
(12, 13, 1, 91.50),
(12, 15, 2, 90.50),
(13, 1,  1, 97.40),
(13, 14, 2, 96.80),
(15, 2,  1, 94.10),
(15, 13, 2, 93.60),
(16, 5,  1, 96.00),
(17, 3,  1, 88.30),
(17, 12, 2, 87.50),
(18, 4,  1, 95.20),
(19, 1,  1, 93.00),
(19, 6,  2, 92.40),
(20, 2,  1, 95.00),
(20, 14, 2, 94.20);

-- ---------------------------------------------------------------------
-- 16. TblCapturaCamara (20)
--     (TraIdTraduccion, UsuIdUsuario) DEBEN coincidir con TblTraduccionSenas
-- ---------------------------------------------------------------------
INSERT INTO TblCapturaCamara (CapIdCaptura, CapCalidadImagen, CapIluminacionDetectada, CapEstadoCaptura, CapFecha, UsuIdUsuario, TraIdTraduccion) VALUES
(1,  'BUENA',   'BUENA',   'CORRECTA',         '2026-10-01 07:59:50', 2,  1),
(2,  'BUENA',   'BUENA',   'CORRECTA',         '2026-10-01 08:14:50', 3,  2),
(3,  'REGULAR', 'REGULAR', 'CORRECTA',         '2026-10-01 09:09:50', 5,  3),
(4,  'BUENA',   'BUENA',   'CORRECTA',         '2026-10-02 09:59:50', 6,  4),
(5,  'REGULAR', 'BAJA',    'CORRECTA',         '2026-10-02 11:19:50', 7,  5),
(6,  'BUENA',   'BUENA',   'CORRECTA',         '2026-10-02 14:09:50', 8,  6),
(7,  'BUENA',   'REGULAR', 'CORRECTA',         '2026-10-03 08:29:50', 10, 7),
(8,  'MALA',    'BAJA',    'IMAGEN_BORROSA',   '2026-10-03 08:59:50', 11, 8),
(9,  'REGULAR', 'REGULAR', 'CORRECTA',         '2026-10-03 14:59:50', 12, 9),
(10, 'BUENA',   'BUENA',   'CORRECTA',         '2026-10-04 09:39:50', 13, 10),
(11, 'REGULAR', 'BAJA',    'CORRECTA',         '2026-10-04 12:09:50', 14, 11),
(12, 'BUENA',   'REGULAR', 'CORRECTA',         '2026-10-05 10:29:50', 15, 12),
(13, 'BUENA',   'BUENA',   'CORRECTA',         '2026-10-05 15:59:50', 16, 13),
(14, 'MALA',    'BAJA',    'MANOS_FUERA',      '2026-10-06 08:54:50', 17, 14),
(15, 'BUENA',   'BUENA',   'CORRECTA',         '2026-10-06 17:19:50', 18, 15),
(16, 'BUENA',   'BUENA',   'CORRECTA',         '2026-10-07 07:44:50', 19, 16),
(17, 'REGULAR', 'REGULAR', 'CORRECTA',         '2026-10-08 12:59:50', 20, 17),
(18, 'BUENA',   'BUENA',   'CORRECTA',         '2026-10-09 18:09:50', 1,  18),
(19, 'BUENA',   'REGULAR', 'CORRECTA',         '2026-10-10 11:44:50', 4,  19),
(20, NULL,      NULL,      'CAMARA_BLOQUEADA', '2026-10-12 09:04:50', 9,  20);

-- ---------------------------------------------------------------------
-- 17. TblRetroalimentacion (20)
-- ---------------------------------------------------------------------
INSERT INTO TblRetroalimentacion (RetIdRetroalimentacion, RetCorreccion, RetObservacion, RetFecha, UsuIdUsuario, TraIdTraduccion) VALUES
(1,  NULL,                    'La traducción fue exacta, excelente',                  '2026-10-01 08:05:00', 2,  1),
(2,  NULL,                    'Muy rápida la respuesta',                              '2026-10-01 08:20:00', 3,  2),
(3,  'Por favor, ayúdame',    'Faltó el pronombre en la frase',                       '2026-10-01 09:15:00', 5,  3),
(4,  NULL,                    'Correcta',                                             '2026-10-02 10:05:00', 6,  4),
(5,  'Buenos días, mi familia','Debería incluir el posesivo',                         '2026-10-02 11:25:00', 7,  5),
(6,  NULL,                    'Perfecta',                                             '2026-10-02 14:15:00', 8,  6),
(7,  NULL,                    'Funciona bien con poca luz',                           '2026-10-03 08:35:00', 10, 7),
(8,  'Buenos días',           'Hubo un error y no tradujo nada, la imagen salió borrosa', '2026-10-03 09:05:00', 11, 8),
(9,  'No, gracias',           'La coma estaba mal ubicada',                           '2026-10-03 15:05:00', 12, 9),
(10, NULL,                    'Entendió bien la seña de agua',                        '2026-10-04 09:45:00', 13, 10),
(11, 'Quiero comer',          'Prefiero el verbo en lugar del sustantivo',            '2026-10-04 12:15:00', 14, 11),
(12, NULL,                    'Correcta',                                             '2026-10-05 10:35:00', 15, 12),
(13, NULL,                    'La mejor traducción hasta ahora',                      '2026-10-05 16:05:00', 16, 13),
(14, NULL,                    'Mis manos salían del encuadre, no detectó la seña',    '2026-10-06 09:00:00', 17, 14),
(15, NULL,                    'Muy buena precisión',                                  '2026-10-06 17:25:00', 18, 15),
(16, NULL,                    'Correcta y rápida',                                    '2026-10-07 07:50:00', 19, 16),
(17, 'Por favor, quiero comida','Falta el verbo "quiero"',                            '2026-10-08 13:05:00', 20, 17),
(18, NULL,                    'Correcta',                                             '2026-10-09 18:15:00', 1,  18),
(19, NULL,                    'Reconoció bien las dos señas',                         '2026-10-10 11:50:00', 4,  19),
(20, NULL,                    'La cámara se bloqueó pero la traducción llegó bien',   '2026-10-12 09:10:00', 9,  20);

-- ---------------------------------------------------------------------
-- 18. TblReporteFalla (20)
-- ---------------------------------------------------------------------
INSERT INTO TblReporteFalla (RepIdReporte, RepTipoError, RepDescripcion, RepEstado, RepFecha, RepFechaSolucion, UsuIdUsuario) VALUES
(1,  'Cámara',             'La cámara no responde al abrir el traductor',                'RESUELTO',    '2026-09-11 08:30:00', '2026-09-12 15:20:00', 7),
(2,  'Rendimiento',        'La aplicación se vuelve lenta tras 10 minutos de uso',       'RESUELTO',    '2026-09-12 10:00:00', '2026-09-15 11:00:00', 2),
(3,  'Traducción',         'La seña "Gracias" se traduce como "Por favor"',              'RESUELTO',    '2026-09-13 09:15:00', '2026-09-20 16:00:00', 3),
(4,  'Inicio de sesión',   'No me deja entrar con mi correo',                            'RESUELTO',    '2026-09-14 14:00:00', '2026-09-14 16:30:00', 6),
(5,  'Audio',              'El micrófono no captura mi voz',                             'RESUELTO',    '2026-09-15 08:45:00', '2026-09-16 09:00:00', 8),
(6,  'Interfaz',           'El botón de traducir queda oculto en pantallas pequeñas',    'RESUELTO',    '2026-09-17 12:30:00', '2026-09-24 10:00:00', 11),
(7,  'Traducción',         'No reconoce señas con la mano izquierda',                    'EN_REVISION', '2026-09-20 10:20:00', NULL,                  12),
(8,  'Cámara',             'La imagen sale borrosa en mi celular',                       'EN_REVISION', '2026-09-22 16:00:00', NULL,                  13),
(9,  'Conexión',           'Error de red al enviar la traducción',                       'RESUELTO',    '2026-09-25 09:00:00', '2026-09-25 12:00:00', 14),
(10, 'Diccionario',        'La seña de "Escuela" no aparece en el diccionario',          'DESCARTADO',  '2026-09-27 11:10:00', '2026-09-28 09:00:00', 15),
(11, 'Rendimiento',        'Consumo excesivo de batería',                                'EN_REVISION', '2026-10-01 07:30:00', NULL,                  16),
(12, 'Traducción',         'Confunde "Casa" con "Familia"',                              'PENDIENTE',   '2026-10-03 13:45:00', NULL,                  17),
(13, 'Interfaz',           'El modo oscuro deja el texto ilegible',                      'PENDIENTE',   '2026-10-05 18:00:00', NULL,                  18),
(14, 'Inicio de sesión',   'La sesión se cierra sola cada pocos minutos',                'EN_REVISION', '2026-10-07 08:20:00', NULL,                  19),
(15, 'Audio',              'La voz se traduce con retraso de varios segundos',           'PENDIENTE',   '2026-10-08 15:10:00', NULL,                  20),
(16, 'Cámara',             'No detecta las manos con poca luz',                          'PENDIENTE',   '2026-10-10 19:30:00', NULL,                  1),
(17, 'Diccionario',        'El video de "Agua" no carga',                                'RESUELTO',    '2026-10-12 10:00:00', '2026-10-13 14:00:00', 4),
(18, 'Traducción',         'La frase completa sale en desorden',                         'PENDIENTE',   '2026-10-15 09:50:00', NULL,                  9),
(19, 'Otro',               'Solicitud: agregar más señas de saludos',                    'DESCARTADO',  '2026-10-18 12:00:00', '2026-10-19 10:00:00', 10),
(20, 'Conexión',           'No funciona sin internet',                                   'PENDIENTE',   '2026-10-24 16:40:00', NULL,                  2);

-- =====================================================================
-- VERIFICACIÓN
-- =====================================================================
SELECT 'TblRol' AS Tabla, COUNT(*) AS Registros FROM TblRol
UNION ALL SELECT 'TblUsuario', COUNT(*) FROM TblUsuario
UNION ALL SELECT 'TblPermiso', COUNT(*) FROM TblPermiso
UNION ALL SELECT 'TblRelRolPermiso', COUNT(*) FROM TblRelRolPermiso
UNION ALL SELECT 'TblSesion', COUNT(*) FROM TblSesion
UNION ALL SELECT 'TblHistorialAuditoria', COUNT(*) FROM TblHistorialAuditoria
UNION ALL SELECT 'TblDiccionarioSena', COUNT(*) FROM TblDiccionarioSena
UNION ALL SELECT 'TblValidacionSena', COUNT(*) FROM TblValidacionSena
UNION ALL SELECT 'TblModeloIA', COUNT(*) FROM TblModeloIA
UNION ALL SELECT 'TblDatasetIA', COUNT(*) FROM TblDatasetIA
UNION ALL SELECT 'TblRelDatasetModelo', COUNT(*) FROM TblRelDatasetModelo
UNION ALL SELECT 'TblRelDatasetSena', COUNT(*) FROM TblRelDatasetSena
UNION ALL SELECT 'TblTraduccionVoz', COUNT(*) FROM TblTraduccionVoz
UNION ALL SELECT 'TblTraduccionSenas', COUNT(*) FROM TblTraduccionSenas
UNION ALL SELECT 'TblRelTraduccionSena', COUNT(*) FROM TblRelTraduccionSena
UNION ALL SELECT 'TblCapturaCamara', COUNT(*) FROM TblCapturaCamara
UNION ALL SELECT 'TblRetroalimentacion', COUNT(*) FROM TblRetroalimentacion
UNION ALL SELECT 'TblReporteFalla', COUNT(*) FROM TblReporteFalla;

-- Consulta de prueba: traducción completa con usuario, modelo y señas en orden
SELECT t.TraIdTraduccion,
       u.UsuNombreCompleto,
       m.ModNombre, m.ModVersion,
       t.TraTextoGenerado,
       GROUP_CONCAT(d.SenNombre ORDER BY r.RtsOrden SEPARATOR ' + ') AS SenasReconocidas,
       c.CapEstadoCaptura
FROM TblTraduccionSenas t
JOIN TblUsuario u            ON u.UsuIdUsuario = t.UsuIdUsuario
JOIN TblModeloIA m           ON m.ModIdModelo  = t.ModIdModelo
LEFT JOIN TblRelTraduccionSena r ON r.TraIdTraduccion = t.TraIdTraduccion
LEFT JOIN TblDiccionarioSena d   ON d.SenIdSena = r.SenIdSena
LEFT JOIN TblCapturaCamara c     ON c.TraIdTraduccion = t.TraIdTraduccion
GROUP BY t.TraIdTraduccion, u.UsuNombreCompleto, m.ModNombre, m.ModVersion,
         t.TraTextoGenerado, c.CapEstadoCaptura
ORDER BY t.TraIdTraduccion;
