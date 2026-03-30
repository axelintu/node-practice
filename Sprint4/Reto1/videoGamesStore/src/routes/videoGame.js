import e from "express";
import { getVideoGames } from "./../controllers/videoGameControllers.js";

const router = e.Router();

router.get("/videogames/", getVideoGames);

export default router;
