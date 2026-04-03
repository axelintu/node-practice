import e, { Router } from "express";
import {
	register,
	login
} from "../controllers/authController.js";

const router = e.Router();

router.post("/register", register);
router.post("/login", login);

export default router;

// Hacer validaciones para registro y para login
