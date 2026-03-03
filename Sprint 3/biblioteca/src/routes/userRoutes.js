import { Router } from "express";
import { getUsers } from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
// router.post("/", postUser);

export default router;