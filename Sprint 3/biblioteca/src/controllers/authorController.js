import pool from "../config/db.js";

const getAuthors = async (req, res) => {
	const getQuery = "SELECT autorId, nombre FROM autor;";
	try {
		const [rows] = await pool.query(getQuery);
		res.json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
};
const postAuthor = async (req, res) => {
	const postQuery = "SELECT libroId, nombre, autorId FROM libro;";
	try {
		const [rows] = await pool.query(getQuery);
		res.json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
};

export { getAuthors, postAuthor };
