import Loan from "../model/Loan.js";
import User from "../model/User.js";
import Book from "../model/Book.js";

export const getLoans = async (req, res) => {
	const loans = await Loan.findAll({
		include: [
			{ model: User, as: "user" },
			{ model: Book, as: "book" }
		]
	});
	res.json(loans);
}

export const getLoanById = async (req, res) => {
	const loan = await Loan.findByPk(req.params.id, {
		include: [
			{ model: User, as: "user" },
			{ model: Book, as: "book" }
		]
	});
	if(!loan) return res.status(404).json({ error: "Loan not found"});
	res.json(loan);
}

export const createLoan = async (req, res) => {
	const {userId, bookId, dateStart, dateEnd } = req.body;
	if (!userId) return 
		res
		.status(404)
		.json({ error: "No user for loan provided and is required"});
	if (!bookId) return 
		res
		.status(404)
		.json({ error: "No book for loan  provided and is required"});
	if (!dateStart) return 
		res
		.status(404)
		.json({ error: "No start date for loan  provided and is required"});
	if (!dateEnd) return 
		res
		.status(404)
		.json({ error: "No end date for loan  provided and is required"});

	const loan = await Loan.create({ name, authorId });
		res.status(201).json({ message: "Loan created", loan });
}

export const updateLoan = async (req, res) => {
	const {userId, bookId, dateStart, dateEnd } = req.body;
	const review = await Reviewook.findByPk(req.params.id);
	if(!loan) return res.status(404).json({ error: "Loan not found"});
	loan.userId = userId || loan.userId;
	loan.bookId = bookId || loan.bookId;
	loan.dateStart = dateStart || loan.dateStart;
	loan.dateEnd = dateEnd || loan.dateEnd;
	await loan.save();
	res.json({ message: "Updated loan", loan });
}

export const deleteLoan = async (req, res) => {
	const loan = await Loan.findByPk(req.params.id);

	if (!loan)
		return res.status(404).json({ error: "Loan not found" });

	await loan.destroy();
	res.json({ message: "Loan deleted" });
}