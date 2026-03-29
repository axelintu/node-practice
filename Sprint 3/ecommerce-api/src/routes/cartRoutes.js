import e from "express";
import {
	getCart,
	getCartById,
	getCartByUser,
	createCart,
	updateCart,
	deleteCart,
} from "../controllers/cartController.js";

const router = e.Router();

router.get   ("/cart",          getCart);
router.get   ("/cart/:id",      getCartById);
router.get   ("/cart/user/:id", getCartByUser);
router.post  ("/cart",          createCart);
router.put   ("/cart/:id",      updateCart);
router.delete("/cart/:id",      deleteCart);

export default router;