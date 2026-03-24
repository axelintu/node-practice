import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: [ 'simple', 'family']
		},
		number: {
			type: String,
			required: true,
		},
		maxCapacity: {
			type: Number,
			required: true
		}
	}
);

const Room = mongoose.model('Room', roomSchema);

export default Room;