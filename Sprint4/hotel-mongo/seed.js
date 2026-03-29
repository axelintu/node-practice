import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./src/conf/db.config.js";
import User from "./src/models/User.js";
import Room from "./src/models/Room.js";
import Reservation from "./src/models/Reservation.js";

dotenv.config();

const seedDatabase = async () => {
	try {
		// Connect to database
		await connectDB();

		// Clear existing data
		await User.deleteMany({});
		await Room.deleteMany({});
		await Reservation.deleteMany({});

		console.log("🧹 Cleared existing data");

		// Create 10 users
		const users = [];
		for (let i = 1; i <= 10; i++) {
			const user = new User({
				name: `User ${i}`,
			});
			await user.save();
			users.push(user);
		}
		console.log("✅ Created 10 users");

		// Create 10 rooms (mix of simple and family)
		const rooms = [];
		const roomTypes = ["simple", "family"];
		for (let i = 1; i <= 10; i++) {
			const type = roomTypes[Math.floor(Math.random() * roomTypes.length)];
			const capacity =
				type === "simple"
					? Math.floor(Math.random() * 2) + 1
					: Math.floor(Math.random() * 4) + 2; // 1-2 for simple, 2-5 for family

			const room = new Room({
				type,
				number: `10${i}`,
				maxCapacity: capacity,
			});
			await room.save();
			rooms.push(room);
		}
		console.log("✅ Created 10 rooms");

		// Create 10 reservations
		for (let i = 1; i <= 10; i++) {
			const user = users[Math.floor(Math.random() * users.length)];
			const room = rooms[Math.floor(Math.random() * rooms.length)];

			// Generate random dates (next 30 days)
			const startDate = new Date();
			startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 30));

			const endDate = new Date(startDate);
			endDate.setDate(startDate.getDate() + Math.floor(Math.random() * 7) + 1); // 1-7 days

			// Occupants should not exceed room capacity
			const occupants = Math.floor(Math.random() * room.maxCapacity) + 1;

			const reservation = new Reservation({
				user: user._id,
				room: room._id,
				startDate,
				endDate,
				occupants,
			});
			await reservation.save();
		}
		console.log("✅ Created 10 reservations");

		console.log("🎉 Database seeded successfully!");
		process.exit(0);
	} catch (error) {
		console.error("❌ Error seeding database:", error);
		process.exit(1);
	}
};

seedDatabase();
