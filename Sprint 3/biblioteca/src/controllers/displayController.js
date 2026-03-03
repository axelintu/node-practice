import pool from "../config/db.js";

const getFull = async (req, res) => {
	const getQuery = "SELECT b.libroId AS _id, b.nombre AS bookTitle, b.autorId AS authorId, a.nombre AS authorName FROM libro b INNER JOIN autor a on b.autorId = a.autorId ORDER BY _id ASC;";
	try {
		const [result] = await pool.query(getQuery);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error consulting books"});
	}
};

export { getFull };
