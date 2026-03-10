import { Router } from "express"
import bookRoutes from "./bookRoutes.js";
import authorRoutes from "./authorRoutes.js";
import userRoutes from "./userRoutes.js";
import loanRoutes from "./loanRoutes.js";
import reviewRoutes from "./reviewRoutes.js";

const router = Router(); 

router.use("/books", bookRoutes);
router.use("/authors", authorRoutes);
router.use("/users", userRoutes);
router.use("/loans", loanRoutes);
router.use("/reviews", reviewRoutes);

export default router;