import { Router } from 'express';
import reservationRoutes from './reservationRoutes.js';
import userRoutes from './userRoutes.js';
import roomRoutes from './roomRoutes.js';

const router = Router();

router.use("/users", userRoutes);
router.use("/rooms", roomRoutes);
router.use("/reservations", reservationRoutes);

export default router;