import { Router } from "express";
import { getFull } from "../controllers/displayController.js";

const router = Router();

router.get("/", getFull);

export default router;