# Construyendo el Cine: Creación de Tablas en SQL

En el reto anterior diseñaste el plano arquitectónico de tu base de datos (Modelo ER). Ahora vamos a tomar ese plano y construir los cimientos reales en MySQL.

Históricamente, los datos se guardaban en archivos de texto plano, lo que hacía imposible relacionar la información de forma segura.
Hoy en día, usamos comandos de **Definición de Datos (DDL)** para decirle a la base de datos exactamente qué forma tendrán nuestras tablas, qué tipo de datos aceptarán y cómo se conectarán entre sí usando las famosas **Llaves Foráneas (Foreign Keys)**.

## Tu Misión

Tu misión es traducir el diagrama ER de tu Cine a código SQL real. Vas a crear las 4 tablas principales y a "poblar" tu cine con los primeros clientes y películas.

### Criterios de Aceptación (Checklist)
* [ ] Crear las tablas `espectador` y `pelicula` con su respectivo `id` (Llave Primaria).
* [ ] Crear las tablas `funcion` y `boleto` configurando correctamente las Llaves Foráneas.
* [ ] Insertar al menos 2 espectadores y 2 películas de prueba.

---

## Instrucciones

Abre tu gestor de base de datos (como MySQL Workbench, DBeaver o la consola). Crea un nuevo script llamado `reto_cine_tablas.sql`.

Copia el siguiente esqueleto y **sustituye los comentarios** con código SQL real. (Te hemos dejado la primera tabla como ejemplo).

```sql
-- ==========================================
-- RETO PARTE 1: CREACIÓN DE ESTRUCTURA
-- ==========================================

-- 1. CREAR TABLA ESPECTADOR (EJEMPLO)
CREATE TABLE espectador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

-- 2. CREAR TABLA PELÍCULA
-- Crea una tabla llamada 'pelicula'.
-- Debe tener un 'id' (INT AUTO_INCREMENT PRIMARY KEY) y un 'titulo' (VARCHAR).



-- 3. CREAR TABLA FUNCIÓN
-- Crea una tabla llamada 'funcion'.
-- Debe tener un 'id', un 'horario' (VARCHAR) y un 'pelicula_id' (INT).
-- 🚨 RETO: Agrega la FOREIGN KEY para conectar pelicula_id con el id de la tabla pelicula.



-- 4. CREAR TABLA BOLETO
-- Crea la tabla 'boleto'.
-- Debe tener 'id', 'asiento' (VARCHAR), 'espectador_id' (INT) y 'funcion_id' (INT).
-- 🚨 RETO: Agrega las DOS FOREIGN KEYS correspondientes.



-- ==========================================
-- POBLANDO LA BASE DE DATOS (SETUP INICIAL)
-- ==========================================
-- Ejecuta estos INSERTS para tener datos con los cuales trabajar después:

INSERT INTO espectador (nombre) VALUES ('Ana López'), ('Carlos Pérez');
INSERT INTO pelicula (titulo) VALUES ('Inception'), ('Matrix');
-- Pista: Asumimos que Inception es el id 1 y Matrix el id 2.
INSERT INTO funcion (pelicula_id, horario) VALUES (1, '18:00'), (2, '20:30');