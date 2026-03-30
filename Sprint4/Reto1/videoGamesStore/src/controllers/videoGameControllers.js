// controllers/videojuegoController.js
import VideoGame from "../models/VideoGame";

// CONTROLADOR: LEER CATÁLOGO
export const obtenerVideojuegos = async () => {
	try {
		// 🚨 TU TURNO: Usa el modelo Videojuego y su método de Mongoose para traer todo el catálogo
		// Pista: const juegos = await Videojuego...
		const games = await VideoGame.find();

		console.log("🎮 Catálogo obtenido:", games);
		return games; // Retornamos la información para cuando Express la necesite
	} catch (error) {
		console.error("❌ Error al consultar la base de datos:", error.message);
	}
};
