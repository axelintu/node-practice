import pool from "../config/db.js";

export const getBooks = async (req, res) => {
	const getQuery = "SELECT libroId, nombre, autorId FROM libro;";
	try {
		const [rows] = await pool.query(getQuery);
		res.json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
};

export const getBookById = async (req, res) => {
	const { id } = req.params;
	const getBookByIdQuery = `SELECT * FROM libro WHERE libro.libroId = ?`;
	try {
		const [rows] = await pool.query(getBookByIdQuery, [id]);
		res.status(200).json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
}

export const updateBook = async (req, res) => {
	const { id } = req.params;
	const { nombre, autorId } = req.body;
	const updateBookQuery = `UDPATE nombre = ? , autorId = ? WHERE libroId =`;
	try {
		const [result] = 
			await pool.query(updateBookQuery, [nombre, autorId, id]);
		if (result.affectedRows === 0){
			return res.status(404).json({error: "Libro no encontrado"});
		}
		res.status(201).json({
			result
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
}
export const deleteBook = async (req, res) => {
	const { id } = req.params;
	const deleteBookQuery = `DELETE libro WHERE libroId = ?`;
	try {
		const [result] = 
			await pool.query(deleteBookQuery, [id]);
		if (result.affectedRows === 0){
			return res.status(404).json({error: "Libro no encontrado"});
		}
		res.status(204).json({
			"message": "Libro eliminado"
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
}

export const insertBook = async (req, res) => {
	const { nombre, autorId } = req.body;
	const insertBookQuery = `INSERT INTO libro (nombre, autorId) VALUES (?, ?)`;
	try {
		const [result] = await pool.query(insertBookQuery, [nombre, autorId]);
		res.status(201).json({
			message: "Libro actualizado",
			book: result.insertId, 
			nombre, 
			autorId
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ 
			error: error.message, 
			message: "Error trying to create a new book"});
	}
};