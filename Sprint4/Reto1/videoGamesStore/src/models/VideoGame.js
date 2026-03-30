// models/Videojuego.js
import mongoose from "mongoose";

// 1. DEFINIMOS EL ESQUEMA
const videoGameSchema = new mongoose.Schema(
	{
		// El título es String, obligatorio y limpiamos los espacios en blanco
		title: { type: String, required: true, trim: true },
		// 🚨 TU TURNO: Agrega el campo 'precio'.
		// Debe ser de tipo Number y ser obligatorio (required: true)
		price: { type: Number, required: true },
		// 🚨 TU TURNO: Agrega el campo 'consola'.
		// Debe ser String, obligatorio, y usar un 'enum' para que SOLO acepte
		// estos valores exactos: ["Nintendo Switch", "PlayStation 5", "PC"]
		console: {
			type: String,
			required: true,
			enum: ["Nintendo Switch", "PlayStation 5", "PC"]
		}
	},
	{ timestamps: true }, // Esto agregará automáticamente createdAt y updatedAt
);

// 2. CREAMOS Y EXPORTAMOS EL MODELO
const VideoGame = mongoose.model("VideoGame", videoGameSchema);

export default VideoGame;
