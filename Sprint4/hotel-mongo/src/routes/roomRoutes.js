import { Router } from "express";
import {
	getRooms,
	getRoomById,
	updateRoom,
} from "../controllers/roomController.js";

const router = Router();

router.get("/", getRooms);
router.get("/:id", getRoomById);
router.put("/:id", updateRoom);

export default router;
