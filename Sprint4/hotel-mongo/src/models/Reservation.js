import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true,
	},
	room: {
		type: mongoose.Types.ObjectId,
		ref: "Room",
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	occupants: {
		type: Number,
		required: true,
	},
});

const test = mongoose.Schema();

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
