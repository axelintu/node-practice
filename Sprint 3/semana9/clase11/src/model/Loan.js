import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Loan = sequelize.define("Loan", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	bookId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	dateStart: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	dateEnd: {
		type: DataTypes.DATEONLY,
		allowNull: false
	}
}, {
	tableName: "loan",
	timestamps: false
});

export default Loan;