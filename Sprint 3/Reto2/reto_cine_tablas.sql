-- ==========================================
-- RETO PARTE 1: CREACIÓN DE ESTRUCTURA
-- ==========================================

CREATE DATABASE cinema;

USE cinema;

-- 1. CREAR TABLA ESPECTADOR (EJEMPLO)
CREATE TABLE user (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100),
    gender VARCHAR(100),
    created_at DATETIME
);

-- 2. CREAR TABLA PELÍCULA
-- Crea una tabla llamada 'pelicula'.
-- Debe tener un 'id' (INT AUTO_INCREMENT PRIMARY KEY) y un 'titulo' (VARCHAR).

CREATE TABLE movie (
	movieID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    duration_minutes int,
    created_at VARCHAR(100)
);

-- 3. CREAR TABLA FUNCIÓN
-- Crea una tabla llamada 'funcion'.
-- Debe tener un 'id', un 'horario' (VARCHAR) y un 'pelicula_id' (INT).
-- 🚨 RETO: Agrega la FOREIGN KEY para conectar pelicula_id con el id de la tabla pelicula.

CREATE TABLE showtime (
	showtimeID INT AUTO_INCREMENT PRIMARY KEY,
    showtime VARCHAR(100),
    price INT,
    movie_id INT,
    foreign key (movie_id) REFERENCES movie(movieID)
);

-- 4. CREAR TABLA BOLETO
-- Crea la tabla 'boleto'.
-- Debe tener 'id', 'asiento' (VARCHAR), 'espectador_id' (INT) y 'funcion_id' (INT).
-- 🚨 RETO: Agrega las DOS FOREIGN KEYS correspondientes.

CREATE TABLE ticket (
	ticketID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    showtime_id INT,
    seat VARCHAR(10),
    ticket_status VARCHAR(30),
    created_at VARCHAR(100)
);

-- ==========================================
-- POBLANDO LA BASE DE DATOS (SETUP INICIAL)
-- ==========================================
-- Ejecuta estos INSERTS para tener datos con los cuales trabajar después:

INSERT INTO user (full_name) VALUES ('Ana López'), ('Carlos Pérez'), ('Alejandro Flores');
INSERT INTO movie (title) VALUES ('Inception'), ('Matrix'), ('Paprika'), ('Kill Bill Vol. 1');
-- Pista: Asumimos que Inception es el id 1 y Matrix el id 2.
INSERT INTO showtime (movie_id, showtime) VALUES (1, '18:00'), (2, '20:30'), (3, '16:00'), (4, '11:40');