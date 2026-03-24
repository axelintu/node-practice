import e from "express";

import cartRoutes from "./cartRoutes.js";

const router = e.Router();
router.use(cartRoutes);

export default router;