-- Procedimientos almacenados de SIGNA-TECH-APP.
-- Compatibles con SignaTech_.sql (18 tablas).
-- Ejecutar despues del esquema y de funciones.sql.
-- Importante: los nombres de roles se validan contra los datos reales:
-- "Administrador" e "Intérprete" (no ADMINISTRADOR/INTERPRETE como valores literales).

DROP PROCEDURE IF EXISTS SP_RegistrarUsuario;
DROP PROCEDURE IF EXISTS SP_CambiarEstadoUsuario;
DROP PROCEDURE IF EXISTS SP_RegistrarTraduccionVoz;
DROP PROCEDURE IF EXISTS SP_RegistrarTraduccionSena;
DROP PROCEDURE IF EXISTS SP_RegistrarCapturaCamara;
DROP PROCEDURE IF EXISTS SP_ValidarSena;
DROP PROCEDURE IF EXISTS SP_RegistrarRetroalimentacion;
DROP PROCEDURE IF EXISTS SP_RegistrarReporteFalla;
DROP PROCEDURE IF EXISTS SP_CerrarSesion;

DELIMITER $$

-- 1. Registrar usuario.
-- Si p_UsuIdSolicitante es NULL, solo permite autorregistro como Usuario Sordo o Invitado.
-- Para registrar roles internos se exige un administrador activo.
CREATE PROCEDURE SP_RegistrarUsuario(
    IN p_NombreCompleto VARCHAR(150),
    IN p_Correo VARCHAR(120),
    IN p_ContrasenaHash VARCHAR(255),
    IN p_RolIdRol INT UNSIGNED,
    IN p_UsuIdSolicitante INT UNSIGNED
)
BEGIN
    DECLARE v_RolNombre VARCHAR(50) DEFAULT NULL;
    DECLARE v_UsuIdAuditoria INT UNSIGNED;

    IF p_NombreCompleto IS NULL OR TRIM(p_NombreCompleto) = ''
       OR p_Correo IS NULL OR TRIM(p_Correo) = ''
       OR p_ContrasenaHash IS NULL OR TRIM(p_ContrasenaHash) = '' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Nombre, correo y hash de contrasena son obligatorios';
    END IF;

    IF EXISTS (
        SELECT 1 FROM TblUsuario
         WHERE LOWER(UsuCorreo) = LOWER(TRIM(p_Correo))
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El correo ya esta registrado';
    END IF;

    SELECT RolNombre
      INTO v_RolNombre
      FROM TblRol
     WHERE RolIdRol = p_RolIdRol
       AND RolEstado = 'ACTIVO'
     LIMIT 1;

    IF v_RolNombre IS NULL THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El rol no existe o esta inactivo';
    END IF;

    IF p_UsuIdSolicitante IS NULL THEN
        IF LOWER(TRIM(v_RolNombre)) NOT IN ('usuario sordo', 'invitado') THEN
            SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'El autorregistro solo permite Usuario Sordo o Invitado';
        END IF;
    ELSEIF NOT EXISTS (
        SELECT 1
          FROM TblUsuario AS U
          INNER JOIN TblRol AS R ON R.RolIdRol = U.RolIdRol
         WHERE U.UsuIdUsuario = p_UsuIdSolicitante
           AND U.UsuEstado = 'ACTIVO'
           AND LOWER(TRIM(R.RolNombre)) = 'administrador'
           AND R.RolEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Solo un administrador activo puede registrar usuarios internos';
    END IF;

    INSERT INTO TblUsuario
        (UsuNombreCompleto, UsuCorreo, UsuContrasenaHash, UsuEstado, RolIdRol)
    VALUES
        (TRIM(p_NombreCompleto), LOWER(TRIM(p_Correo)), p_ContrasenaHash, 'ACTIVO', p_RolIdRol);

    SET v_UsuIdAuditoria = COALESCE(p_UsuIdSolicitante, LAST_INSERT_ID());

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('REGISTRAR_USUARIO', CONCAT('Registro de usuario: ', LOWER(TRIM(p_Correo))), NULL, v_UsuIdAuditoria);
END$$

-- 2. Cambiar estado de usuario (solo administrador activo).
CREATE PROCEDURE SP_CambiarEstadoUsuario(
    IN p_UsuIdSolicitante INT UNSIGNED,
    IN p_UsuIdUsuario INT UNSIGNED,
    IN p_NuevoEstado VARCHAR(12)
)
BEGIN
    IF NOT EXISTS (
        SELECT 1
          FROM TblUsuario AS U
          INNER JOIN TblRol AS R ON R.RolIdRol = U.RolIdRol
         WHERE U.UsuIdUsuario = p_UsuIdSolicitante
           AND U.UsuEstado = 'ACTIVO'
           AND LOWER(TRIM(R.RolNombre)) = 'administrador'
           AND R.RolEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Solo un administrador activo puede cambiar estados';
    END IF;

    IF p_NuevoEstado IS NULL
       OR p_NuevoEstado NOT IN ('ACTIVO', 'INACTIVO', 'BLOQUEADO') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Estado de usuario no valido';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM TblUsuario WHERE UsuIdUsuario = p_UsuIdUsuario) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El usuario no existe';
    END IF;

    IF p_UsuIdUsuario = p_UsuIdSolicitante AND p_NuevoEstado <> 'ACTIVO' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El administrador no puede desactivar su propia cuenta';
    END IF;

    UPDATE TblUsuario
       SET UsuEstado = p_NuevoEstado
     WHERE UsuIdUsuario = p_UsuIdUsuario;

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('CAMBIAR_ESTADO_USUARIO',
         CONCAT('Usuario ', p_UsuIdUsuario, ' cambiado a estado ', p_NuevoEstado),
         NULL, p_UsuIdSolicitante);
END$$

-- 3. Registrar traduccion de voz.
CREATE PROCEDURE SP_RegistrarTraduccionVoz(
    IN p_AudioOriginal VARCHAR(255),
    IN p_TextoGenerado TEXT,
    IN p_TiempoRespuesta DECIMAL(8,2),
    IN p_UsuIdUsuario INT UNSIGNED
)
BEGIN
    DECLARE v_IdTraduccion INT UNSIGNED;

    IF NOT EXISTS (
        SELECT 1 FROM TblUsuario
         WHERE UsuIdUsuario = p_UsuIdUsuario AND UsuEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El usuario no existe o esta inactivo';
    END IF;

    IF p_TiempoRespuesta IS NULL OR p_TiempoRespuesta < 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El tiempo de respuesta no puede ser nulo ni negativo';
    END IF;

    INSERT INTO TblTraduccionVoz
        (VozAudioOriginal, VozTextoGenerado, VozTiempoRespuesta, VozEstadoProcesamiento, UsuIdUsuario)
    VALUES
        (p_AudioOriginal, p_TextoGenerado, p_TiempoRespuesta, 'PROCESADA', p_UsuIdUsuario);

    SET v_IdTraduccion = LAST_INSERT_ID();

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('TRADUCCION_VOZ', CONCAT('Traduccion de voz registrada. ID: ', v_IdTraduccion), NULL, p_UsuIdUsuario);
END$$

-- 4. Registrar traduccion de seña.
-- ModIdModelo es obligatorio en TblTraduccionSenas.
-- La seña reconocida se guarda en la tabla de relacion TblRelTraduccionSena.
CREATE PROCEDURE SP_RegistrarTraduccionSena(
    IN p_TextoGenerado TEXT,
    IN p_ConfianzaModelo DECIMAL(5,2),
    IN p_TiempoRespuesta DECIMAL(8,2),
    IN p_UsuIdUsuario INT UNSIGNED,
    IN p_ModIdModelo INT UNSIGNED,
    IN p_SenIdSena INT UNSIGNED,
    IN p_RtsOrden SMALLINT UNSIGNED,
    IN p_RtsConfianza DECIMAL(5,2)
)
BEGIN
    DECLARE v_IdTraduccion INT UNSIGNED;

    IF NOT EXISTS (
        SELECT 1 FROM TblUsuario
         WHERE UsuIdUsuario = p_UsuIdUsuario AND UsuEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El usuario no existe o esta inactivo';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM TblModeloIA
         WHERE ModIdModelo = p_ModIdModelo AND ModEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El modelo no existe o no esta activo';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM TblDiccionarioSena
         WHERE SenIdSena = p_SenIdSena AND SenEstadoValidacion = 'APROBADA'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La sena no existe o no esta aprobada';
    END IF;

    IF p_ConfianzaModelo IS NOT NULL
       AND (p_ConfianzaModelo < 0 OR p_ConfianzaModelo > 100) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La confianza del modelo debe estar entre 0 y 100';
    END IF;

    IF p_RtsConfianza IS NOT NULL
       AND (p_RtsConfianza < 0 OR p_RtsConfianza > 100) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La confianza de la seña debe estar entre 0 y 100';
    END IF;

    IF p_TiempoRespuesta IS NULL OR p_TiempoRespuesta < 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El tiempo de respuesta no puede ser nulo ni negativo';
    END IF;

    IF p_RtsOrden IS NULL OR p_RtsOrden < 1 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El orden de la seña debe ser mayor que cero';
    END IF;

    INSERT INTO TblTraduccionSenas
        (TraTextoGenerado, TraConfianzaModelo, TraTiempoRespuesta,
         TraEstadoProcesamiento, UsuIdUsuario, ModIdModelo)
    VALUES
        (p_TextoGenerado, p_ConfianzaModelo, p_TiempoRespuesta,
         'PROCESADA', p_UsuIdUsuario, p_ModIdModelo);

    SET v_IdTraduccion = LAST_INSERT_ID();

    INSERT INTO TblRelTraduccionSena
        (TraIdTraduccion, SenIdSena, RtsOrden, RtsConfianza)
    VALUES
        (v_IdTraduccion, p_SenIdSena, p_RtsOrden, p_RtsConfianza);

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('TRADUCCION_SENA',
         CONCAT('Traduccion de señas registrada. ID: ', v_IdTraduccion,
                ', modelo: ', p_ModIdModelo, ', seña: ', p_SenIdSena),
         NULL, p_UsuIdUsuario);
END$$

-- 5. Registrar captura de camara.
-- El usuario se obtiene de la traduccion para mantener la FK compuesta correcta.
CREATE PROCEDURE SP_RegistrarCapturaCamara(
    IN p_CalidadImagen VARCHAR(10),
    IN p_Iluminacion VARCHAR(10),
    IN p_EstadoCaptura VARCHAR(20),
    IN p_TraIdTraduccion INT UNSIGNED
)
BEGIN
    DECLARE v_UsuIdUsuario INT UNSIGNED DEFAULT NULL;

    SELECT UsuIdUsuario
      INTO v_UsuIdUsuario
      FROM TblTraduccionSenas
     WHERE TraIdTraduccion = p_TraIdTraduccion
     LIMIT 1;

    IF v_UsuIdUsuario IS NULL THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La traduccion no existe';
    END IF;

    IF p_CalidadImagen IS NOT NULL
       AND p_CalidadImagen NOT IN ('BUENA', 'REGULAR', 'MALA') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Calidad de imagen no valida';
    END IF;

    IF p_Iluminacion IS NOT NULL
       AND p_Iluminacion NOT IN ('BUENA', 'REGULAR', 'BAJA') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Nivel de iluminacion no valido';
    END IF;

    IF p_EstadoCaptura IS NULL
       OR p_EstadoCaptura NOT IN
          ('CORRECTA', 'CAMARA_BLOQUEADA', 'SIN_IMAGEN', 'MANOS_FUERA', 'IMAGEN_BORROSA') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Estado de captura no valido';
    END IF;

    INSERT INTO TblCapturaCamara
        (CapCalidadImagen, CapIluminacionDetectada, CapEstadoCaptura,
         UsuIdUsuario, TraIdTraduccion)
    VALUES
        (p_CalidadImagen, p_Iluminacion, p_EstadoCaptura,
         v_UsuIdUsuario, p_TraIdTraduccion);

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('CAPTURA_CAMARA',
         CONCAT('Captura registrada para traduccion ID: ', p_TraIdTraduccion),
         NULL, v_UsuIdUsuario);
END$$

-- 6. Validar una seña del diccionario (solo interprete activo).
CREATE PROCEDURE SP_ValidarSena(
    IN p_SenIdSena INT UNSIGNED,
    IN p_UsuIdUsuario INT UNSIGNED,
    IN p_Resultado VARCHAR(10),
    IN p_Observaciones TEXT
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM TblDiccionarioSena WHERE SenIdSena = p_SenIdSena) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La sena no existe';
    END IF;

    IF p_Resultado IS NULL OR p_Resultado NOT IN ('APROBADA', 'RECHAZADA') THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Resultado de validacion no valido';
    END IF;

    IF NOT EXISTS (
        SELECT 1
          FROM TblUsuario AS U
          INNER JOIN TblRol AS R ON R.RolIdRol = U.RolIdRol
         WHERE U.UsuIdUsuario = p_UsuIdUsuario
           AND U.UsuEstado = 'ACTIVO'
           AND R.RolEstado = 'ACTIVO'
           AND LOWER(TRIM(R.RolNombre)) IN ('interprete', 'intérprete')
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El usuario no es un interprete activo';
    END IF;

    INSERT INTO TblValidacionSena
        (ValObservaciones, ValResultado, SenIdSena, UsuIdUsuario)
    VALUES
        (p_Observaciones, p_Resultado, p_SenIdSena, p_UsuIdUsuario);

    UPDATE TblDiccionarioSena
       SET SenEstadoValidacion = p_Resultado
     WHERE SenIdSena = p_SenIdSena;

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('VALIDAR_SENA',
         CONCAT('Seña ID ', p_SenIdSena, ' validada como ', p_Resultado),
         NULL, p_UsuIdUsuario);
END$$

-- 7. Registrar retroalimentacion (interprete o administrador activo).
CREATE PROCEDURE SP_RegistrarRetroalimentacion(
    IN p_Correccion TEXT,
    IN p_Observacion TEXT,
    IN p_UsuIdUsuario INT UNSIGNED,
    IN p_TraIdTraduccion INT UNSIGNED
)
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM TblTraduccionSenas WHERE TraIdTraduccion = p_TraIdTraduccion
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La traduccion no existe';
    END IF;

    IF NOT EXISTS (
        SELECT 1
          FROM TblUsuario AS U
          INNER JOIN TblRol AS R ON R.RolIdRol = U.RolIdRol
         WHERE U.UsuIdUsuario = p_UsuIdUsuario
           AND U.UsuEstado = 'ACTIVO'
           AND R.RolEstado = 'ACTIVO'
           AND LOWER(TRIM(R.RolNombre)) IN ('interprete', 'administrador')
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Solo un interprete o administrador activo puede registrar retroalimentacion';
    END IF;

    INSERT INTO TblRetroalimentacion
        (RetCorreccion, RetObservacion, UsuIdUsuario, TraIdTraduccion)
    VALUES
        (p_Correccion, p_Observacion, p_UsuIdUsuario, p_TraIdTraduccion);

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('RETROALIMENTACION',
         CONCAT('Retroalimentacion registrada para traduccion ID: ', p_TraIdTraduccion),
         NULL, p_UsuIdUsuario);
END$$

-- 8. Registrar reporte de falla.
CREATE PROCEDURE SP_RegistrarReporteFalla(
    IN p_TipoError VARCHAR(100),
    IN p_Descripcion TEXT,
    IN p_UsuIdUsuario INT UNSIGNED
)
BEGIN
    IF p_TipoError IS NULL OR TRIM(p_TipoError) = ''
       OR p_Descripcion IS NULL OR TRIM(p_Descripcion) = '' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El tipo y la descripcion del reporte son obligatorios';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM TblUsuario
         WHERE UsuIdUsuario = p_UsuIdUsuario AND UsuEstado = 'ACTIVO'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El usuario no existe o esta inactivo';
    END IF;

    INSERT INTO TblReporteFalla
        (RepTipoError, RepDescripcion, RepEstado, UsuIdUsuario)
    VALUES
        (TRIM(p_TipoError), TRIM(p_Descripcion), 'PENDIENTE', p_UsuIdUsuario);

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('REPORTAR_FALLA', CONCAT('Reporte de falla registrado: ', TRIM(p_TipoError)),
         NULL, p_UsuIdUsuario);
END$$

-- 9. Cerrar sesion propia.
CREATE PROCEDURE SP_CerrarSesion(
    IN p_SesIdSesion INT UNSIGNED,
    IN p_UsuIdUsuario INT UNSIGNED
)
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM TblSesion
         WHERE SesIdSesion = p_SesIdSesion
           AND UsuIdUsuario = p_UsuIdUsuario
           AND SesEstado = 'ACTIVA'
    ) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'La sesion no existe, no pertenece al usuario o no esta activa';
    END IF;

    UPDATE TblSesion
       SET SesFechaFin = CURRENT_TIMESTAMP,
           SesEstado = 'CERRADA'
     WHERE SesIdSesion = p_SesIdSesion
       AND UsuIdUsuario = p_UsuIdUsuario
       AND SesEstado = 'ACTIVA';

    INSERT INTO TblHistorialAuditoria
        (AudAccion, AudDescripcion, AudDireccionIP, UsuIdUsuario)
    VALUES
        ('CERRAR_SESION', CONCAT('Sesion cerrada. ID: ', p_SesIdSesion), NULL, p_UsuIdUsuario);
END$$

DELIMITER ;