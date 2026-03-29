import mongoose from "mongoose";

const WishListSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
				required: true,
			},
		],
	},
	{ timestamps: true },
);

const WishList = mongoose.model("WishList", WishListSchema);

export default WishList;
