import pool from "../config/db.js";

const getUsers = async (req, res) => {
	const getQuery = "SELECT usuarioId, nombre, edad, direccion FROM usuario;";
	try {
		const [rows] = await pool.query(getQuery);
		res.status(200).json(rows);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting users"});
	}
};
const postUser = async (req, res) => {
	const postQuery = `INSERT INTO libro (nombre, autorId) VALUES (?, ?)`;
	try {
		const [result] = await pool.query(postQuery);
		res.status(201).json({ 
			id: result.insertId, ...req.body }, 
			[req.body.title, req.body.author]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ 
			error: error.message, 
			message: "Error trying to create a new user"});
	}
};

export { getUsers };
