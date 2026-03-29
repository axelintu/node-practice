import Room from "../models/Room.js";

const isPositiveIntegerString = (str) => {
	return /^[1-9]\d*$/.test(str) && Number.isInteger(Number(str));
};

export const getRooms = async (req, res) => {
	try {
		const rooms = await Room.find();
		res.status(200).json(rooms);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};

export const getRoomById = async (req, res) => {
	try {
		const id = req.params.id;
		if (!id) {
			res.status(400).json({ message: "El id es requerido" });
		}
		const room = await Room.findById(id);

		if (!room) {
			return res.status(404).json({ message: "Cuarto no encontrado" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};

export const updateRoom = async (req, res) => {
	try {
		const id = req.params.id;
		const { type, number, capacity } = req.body;
		if (!id) {
			res.status(400).json({ message: "El id es requerido" });
		}
		const room = await Room.findById(id);
		if (!room) {
			return res.status(404).json({ message: "Cuarto no encontrado" });
		}
		if (!type || !number || !capacity) {
			return res
				.status(400)
				.json({ message: "Todos los campos son requeridos" });
		}
		if (type !== "simple" && type !== "family") {
			return res.status(400).json({ message: "Tipo de habitación no válida" });
		}
		if (!isPositiveIntegerString(number)) {
			return res
				.status(400)
				.json({ message: "Número de habitacion no válida" });
		}

		room.type = type;
		room.number = number;
		room.capacity = capacity;

		await room.save();
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};
