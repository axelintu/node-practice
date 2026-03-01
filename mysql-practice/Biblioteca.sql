CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE autor (
	autorId INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (100) NOT NULL
);

CREATE TABLE libro (
	libroId INT AUTO_INCREMENT PRIMARY KEY,

    autorId INT,
    foreign key (autorId) REFERENCES autor(autorId)
);

create TABLE usuario (
	usuarioId INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(150) NOT NULL,
    autorId INT,
    direccion VARCHAR(200)
);

CREATE TABLE reseña (
	reseñaId INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT,
    libroId INT,
    comentario VARCHAR(250),
    FOREIGN KEY (usuarioId) REFERENCES usuario(usuarioId),
    FOREIGN KEY (libroId) REFERENCES libro(libroId)
);

CREATE TABLE prestamo (
	prestamoId INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT,
    libroId INT,
    fecha_inicio DATE,
    fecha_final DATE,
    FOREIGN KEY (usuarioId) REFERENCES usuario(usuarioId),
    FOREIGN KEY (libroId) REFERENCES libro(libroId)
)
Use biblioteca;
ALTER TABLE usuario 
MODIFY COLUMN autorId SET DEFAULT 0;


ALTER TABLE usuario 
change COLUMN autorId edad INT;

ALTER TABLE libro
ADD nombre VARCHAR (150) NOT NULL;
