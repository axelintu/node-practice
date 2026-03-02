/* Insert */
INSERT INTO autor (nombre) VALUES
    ('Jan Goldstein'),
    ('Caleb Carr'),
    ('Blair Bravermann'),
    ('PanchitoPistolas');

select * from autor;

INSERT INTO libro (nombre, autorId) VALUES
    ('Killing Timeeee', 5),
    ('All That Matters',4),
    ('The Prince of Nantucket',4),
    ('Welcome to the Ice Cube', 6),
    ('Nibro No existe', NULL);

select * from libro;

/* Update */
	UPDATE libro
	SET nombre='Killing Time'
	Where libroId=6;

	UPDATE libro
	SET nombre='Welcome to the Goddamn Ice Cube: Chasing Fear and Finding Home in the Great White North'
	Where libroId=9;
    
	UPDATE autor
	SET nombre='Blair Braverman'
	Where autorId=6;

/* Delete */
	DELETE from libro where libroId = 10;
	DELETE from autor where autorId = 7;
