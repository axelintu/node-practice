import Book from "../model/Book.js";

export const getBooks = async (req, res) => {
	const books = await Book.find.findAll();
	res.json(books);
}

export const getBookById = async (req, res) => {
	const book = await Book.findByPk(req.params.id);
	if(!book) return res.status(404).json({ error: "Book not found"});
	res.json(book);
}

export const createBook = async (req, res) => {
	const {name, authorId} = req.body;
	if (!name) return 
		res
		.status(404)
		.json({ error: "The name of the book is required"});

	const book = await Book.create({ name, authorId });
		res.status(201).json({ message: "Book created", book });
}

export const updateBook = async (req, res) => {
	const { name, authorId } = req.body;
	const book = await Book.findByPk(req.params.id);
	if(!book) return res.status(404).json({ error: "Book not found"});
	book.name = name || book.name;
	book.authorId = authorId || book.authorId;
	await book.save();
	res.json({ message: "Updated book", book });
}

export const deleteBook = async (req, res) => {
	const book = await Book.findByPk(req.params.id);

	if (!book)
		return res.status(404).json({ error: "Book not found" });

	await book.destroy();
	res.json({ message: "Book deleted" });
}