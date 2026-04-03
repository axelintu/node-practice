import e from "express";

import cartRoutes from "./cartRoutes.js";
import authRoutes from "./authRoutes.js";

const router = e.Router();

router.use(cartRoutes);
router.use("/auth", authRoutes);

export default router;
