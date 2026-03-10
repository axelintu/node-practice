import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define("Book", {
	id: { 
		type: DataTypes.INTEGER, 
		autoIncrement: true,
		primaryKey: true 
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	authorId: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
},
{
	tableName: "book",
	timestamps: false
}
);

export default Book;