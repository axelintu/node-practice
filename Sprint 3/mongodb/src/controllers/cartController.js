import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
	try {
		const carts = await Cart.find()
			.populate("user")
			.populate("products.product");
		res.json(carts);
	} catch (error) {
		console.error(error);
	}
}

export const getCartById = async (req,res) => {
	try {
		const id = req.params.id;
		const cart = await Cart.findById(id)
			.populate("user")
			.populate("products.product");
		if(!cart){
			return res.status(404).json({ message: "Cart not found" });
		}
		res.json(cart);
	} catch (error) {
		console.error(error);
	}
};

export const getCartByUser = async (req,res) => {
	try {
		const userId = req.params.id;
		const cart = await Cart.findOne({user: userId})
			.populate("products.product");
		if(!cart) {
			return res.status(404)
				.json({message: "No cart found for this user"});
		}
		res.json(cart);
	} catch (error) {
		console.error(error);
	}
}
