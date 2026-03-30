import e from "express";

import videoGamesRoutes from "./videoGame.js";

const router = e.Router();
router.use(videoGamesRoutes);

export default router;
