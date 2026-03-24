import { Router } from "express";
import {
	// getReservations,
	// getReservationById,
	createReservation,
} from "../controllers/reservationController.js";

const router = Router();

// router.get("/", getReservations);
// router.get("/:id", getReservationById);
router.post("/", createReservation);

export default router;