-- Funciones almacenadas de SIGNA-TECH-APP.
-- Compatibles con SignaTech_.sql (18 tablas).
-- Ejecutar despues del esquema: mysql -u usuario -p SignaTechApp < funciones.sql

DROP FUNCTION IF EXISTS FN_ObtenerNombreUsuario;
DROP FUNCTION IF EXISTS FN_ObtenerRolUsuario;
DROP FUNCTION IF EXISTS FN_PorcentajeTraduccionesExitosas;
DROP FUNCTION IF EXISTS FN_ClasificarConfianza;

DELIMITER $$

CREATE FUNCTION FN_ObtenerNombreUsuario(
    p_UsuIdUsuario INT UNSIGNED
)
RETURNS VARCHAR(150)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_Nombre VARCHAR(150) DEFAULT NULL;

    SELECT UsuNombreCompleto
      INTO v_Nombre
      FROM TblUsuario
     WHERE UsuIdUsuario = p_UsuIdUsuario
     LIMIT 1;

    RETURN v_Nombre;
END$$

CREATE FUNCTION FN_ObtenerRolUsuario(
    p_UsuIdUsuario INT UNSIGNED
)
RETURNS VARCHAR(50)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_Rol VARCHAR(50) DEFAULT NULL;

    SELECT R.RolNombre
      INTO v_Rol
      FROM TblUsuario AS U
      INNER JOIN TblRol AS R ON R.RolIdRol = U.RolIdRol
     WHERE U.UsuIdUsuario = p_UsuIdUsuario
     LIMIT 1;

    RETURN v_Rol;
END$$

CREATE FUNCTION FN_PorcentajeTraduccionesExitosas(
    p_UsuIdUsuario INT UNSIGNED
)
RETURNS DECIMAL(5,2)
NOT DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_Total INT DEFAULT 0;
    DECLARE v_Procesadas INT DEFAULT 0;

    SELECT COUNT(*),
           COALESCE(SUM(TraEstadoProcesamiento = 'PROCESADA'), 0)
      INTO v_Total, v_Procesadas
      FROM TblTraduccionSenas
     WHERE UsuIdUsuario = p_UsuIdUsuario;

    IF v_Total = 0 THEN
        RETURN 0.00;
    END IF;

    -- Mide traducciones procesadas, no la exactitud de la traduccion.
    RETURN ROUND((v_Procesadas * 100.0) / v_Total, 2);
END$$

CREATE FUNCTION FN_ClasificarConfianza(
    p_Confianza DECIMAL(5,2)
)
RETURNS VARCHAR(20)
DETERMINISTIC
NO SQL
BEGIN
    IF p_Confianza IS NULL THEN
        RETURN 'SIN DATOS';
    ELSEIF p_Confianza < 0 OR p_Confianza > 100 THEN
        RETURN 'FUERA DE RANGO';
    ELSEIF p_Confianza >= 90 THEN
        RETURN 'ALTA';
    ELSEIF p_Confianza >= 70 THEN
        RETURN 'MEDIA';
    ELSE
        RETURN 'BAJA';
    END IF;
END$$

DELIMITER ;