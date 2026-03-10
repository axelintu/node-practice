import sequelize from "../config/db.js";

import Author from "./Author.js";
import Book from "./Book.js";

Author.hasMany(Book, {
	foreignKey: id,
	as: "books"
});

Book.belongsTo(Author,{
	foreignKey: authorId,
	as: "author"
});