SELECT * FROM usuario;
select * from libro;

select l.nombre as libro, a.nombre as autor from 
	libro as l left join 
    autor as a 
    on l.autorId = a.autorId;
