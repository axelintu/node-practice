import { Router } from "express";
import { getAuthors, postAuthor } from "../controllers/authorController.js";

const router = Router();

router.get("/", getAuthors);
router.post("/", postAuthor);

export default router;