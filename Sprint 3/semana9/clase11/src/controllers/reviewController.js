import Review from "../model/Review.js";
import User from "../model/User.js";
import Book from "../model/Book.js";
import Author from "../model/Author.js";

export const getReviews = async (req, res) => {
	const reviews = await Review.findAll({
		include: [
			{ model: User, as: "user" },
			{ model: Book, as: "book" }
		]
	});
	res.json(reviews);
}

export const getReviewById = async (req, res) => {
	const review = await Review.findByPk(req.params.id, {
		include: [
			{ model: User, as: "user" },
			{ model: Book, as: "book",
				include: {
					model: Author,
					as: "author"
				}
			}
		]
	});
	if(!review) return res.status(404).json({ error: "Review not found"});
	res.json(review);
}

export const createReview = async (req, res) => {
	const {userId, bookId, comment } = req.body;
	if (!userId) return 
		res
		.status(404)
		.json({ error: "No user for review provided and is required"});
	if (!bookId) return 
		res
		.status(404)
		.json({ error: "No book for review  provided and is required"});
	if (!comment) return 
		res
		.status(404)
		.json({ error: "No start date for review  provided and is required"});

	const review = await Review.create({ name, authorId });
		res.status(201).json({ message: "Review created", review });
}

export const updateReview = async (req, res) => {
	const review = await Review.findByPk(req.params.id);
	const {userId, bookId, comment } = req.body;
	if(!review) return res.status(404).json({ error: "Review not found"});
	review.userId = userId || review.userId;
	review.bookId = bookId || review.bookId;
	review.comment = comment || review.comment;

	await review.save();
	res.json({ message: "Updated review", review });
}

export const deleteReview = async (req, res) => {
	const review = await Review.findByPk(req.params.id);

	if (!review)
		return res.status(404).json({ error: "Review not found" });

	await review.destroy();
	res.json({ message: "Review deleted" });
}