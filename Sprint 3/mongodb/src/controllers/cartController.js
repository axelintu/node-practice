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

const validateCart = (req, res) => {
	const { user, products } = req.body;
	if (!user || !products || !Array.isArray(products)) {
		return res
			.status(404)
			.json({ error: "User and products array is required."});
	}

	for(let i = 0; i < products.length; i++) {
		if (
			!products[i].product || 
			!products[i].quantity || 
			products[i].quantity < 1
		) {
			return res
				.status(404)
				.json({ error: `Each product muyst have product ID and 
					quantity >= 1.`});
		}
	}
}

export const createCart = async (req, res) => {
	try {
		validateCart(req, res);

		const newCart = await Cart.create({
			user,
			products
		});

		await newCart.populate("user");
		await newCart.populate("products.product");

		res.status(201).json(newCart);
	} catch (error) {
		console.error(error);
		
	}
}

export const updateCart = async (req, res) => {
	try {
		validateCart(req, res);

		const updatedCart = await Cart.findByIdAndUpdate(
			id,
			{ user, products },
			{ new: true },
		)
			.populate("user")
			.populate("products.product");

		if (updatedCart) {
			return res.status(200).json(updateCart);
		} else {
			return res.status(404).json({ message: "Cart not found" });
		}
	} catch (error) {
		console.error(error);
		
	}
}

export const deleteCart = async (req, res) => {
	try {
		const {id}=req.params;
		const deletedCart = await Cart.findByIdAndDelete(id);
		if (deletedCart) {
			return res.status(204).send();
		} else {
			return res.status(400).json({ message: "Cart not found" });
		}
	} catch (error) {
		console.error(error);
	}
}