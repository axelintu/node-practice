import mongoose from "mongoose";
import User from "./User.js";

const paymentMethodSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		type: {
			type: String,
			required: true,
			enum: [
				"credit_card",
				"debit_card",
				"paypal",
				"bank_transfer",
				"cash_on_delivery",
			],
		},
		cardNumber: {
			type: String,
			max: 16
		},
		cardHolderName: {
			type: String,
			trim: true
		},
		expiryDate: {
			type:String
		},
		paypalEmail: {
			type: String
		},
		bankName: {
			type: String
		},
		accountNumber: {
			type: String
		},
		isDefault: {
			type: Boolean,
			default: false
		},
		isActive: {
			type: Boolean,
			default: true
		}
	},
	{ timestamps: true },
);

const PaymentMethod = new mongoose.Schema("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;