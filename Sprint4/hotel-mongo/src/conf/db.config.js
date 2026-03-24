// db.config.js (v2 improved)
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(
			process.env.MONGO_URI || "mongodb://localhost:27017/hotel-db",
		);
		console.log(`MongoDB connected: ${connection.connection.host}`);
	} catch (error) {
		console.error("MongoDB connection error:", error);
		process.exit(1);
	}
};

export default connectDB;