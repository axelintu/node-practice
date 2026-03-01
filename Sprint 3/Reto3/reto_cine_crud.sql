-- ==========================================
-- RETO PARTE 2: CRUD DE BOLETOS
-- ==========================================
-- INSERT INTO user (nombre) VALUES ('Ana López'), ('Carlos Pérez'), ('Alejandro Flores');
-- INSERT INTO movie (title) VALUES ('Inception'), ('Matrix'), ('Paprika'), ('Kill Bill Vol. 1');
-- INSERT INTO showtime (movie_id, showtime) VALUES (1, '18:00'), (2, '20:30'), (3, '16:00'), (4, '11:40');

-- 1. CREATE (Insertar / Vender)
-- Escribe una sentencia INSERT INTO para la tabla 'boleto'.
-- VENDE 2 BOLETOS usando los espectador_id (1 o 2) y los funcion_id (1 o 2).
-- Invéntate los números de asiento (ej. 'A1', 'B4').

	INSERT INTO ticket (user_id, showtime_id, seat) 
    VALUES 
		(1, 1, 'B1'), 
        (2,2, 'F3'),
        (3,4,'I10');

-- 2. READ (Consultar con JOIN)
-- Escribe una sentencia SELECT para ver todos los boletos vendidos.
-- RETO: Usa INNER JOIN para conectar la tabla 'boleto' con la tabla 'espectador'.
-- Queremos ver columnas combinadas: boleto.id, boleto.asiento, y espectador.nombre.

SELECT ticket.ticketID, ticket.seat, user.full_name
FROM user
INNER JOIN ticket
  ON user.userID = ticket.user_id;
  
USE cinema;  
SELECT 
    ticket.ticketID, 
    ticket.seat, 
    movie.title, 
    user.full_name AS customer_name
FROM ticket
JOIN user ON ticket.user_id = user.userID
JOIN showtime ON ticket.showtime_id = showtime.showtimeID
JOIN movie ON showtime.movie_id = movie.movieID;

-- 3. UPDATE (Actualizar / Cambio de asiento)
-- Un cliente se quejó de su asiento y quiere que lo cambies.
-- Escribe un UPDATE para cambiar el campo 'asiento' de uno de tus boletos.
-- 🚨 OJO: NUNCA olvides la cláusula WHERE con el ID del boleto.

	UPDATE ticket
	SET seat='C6'
	WHERE ticketID=3;

SELECT ticket.ticketID, ticket.seat, user.full_name
FROM user
INNER JOIN ticket
  ON user.userID = ticket.user_id; 

-- 4. DELETE (Eliminar / Cancelar compra)
-- Un cliente canceló su compra.
-- Escribe un DELETE FROM para borrar un boleto específico.
-- 🚨 OJO: Si olvidas el WHERE aquí, ¡borrarás todos los boletos del cine!

DELETE FROM ticket where ticketID = 3;

