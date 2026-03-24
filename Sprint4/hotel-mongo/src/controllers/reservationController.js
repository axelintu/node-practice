import Reservation from "../models/Reservation.js";
import User from "../models/User.js";
import Room from "../models/Room.js";

export const getReservationss = async (req, res) => {
	try {
		const reservations = await Reservations.find();
		res.status(200).json(reservations);
	} catch (error) {
		console.log(error);
		res.status(500).json({message: 'Error en el servidor'});
	}
}

export const createReservation = async (req, res) => {
	try {
		const { userId, roomId, startDate, endDate, occupants } = req.body;
		if (!userId || !roomId) {
			return res
				.status(400)
				.json({ message: "Todos los campos son requeridos" });
		}
		const user = await User.findById(userId);
		const room = await Room.findById(roomId);

		if (!room) {
			return res.status(404).json({ message: "Cuarto no encontrado" });
		}
		if (!user) {
			return res.status(404).json({ message: 'Usuario no encontrado'});
		}
		if (room.maxCapacity > occupants) {
			return res.status(400).json(
				{ message: `El número de ocupantes no puede ser mayor a la
					capacidad máxima del cuarto`}
			);
		}

		const conflict = await Reservation.findOne({
			room: roomId,
			startDate: {$lte: endDate},
			endDate: {$gte: startDate}
		});

		if(conflict) {
			res.status(409).json({ message: 'Ya existe una reservación'});
		}
		const reservation = new Rservation();
		reservation.room = roomId;
		reservation.user = userId;
		reservation.startDate = startDate;
		reservation.endDate = endDate;
		reservation.occupants = occupants;

		await reservation.save();
		res.status(201).json({message: 'Reservación creada', ...reservation});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};
