import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	"biblioteca",
	"user",
	"password",
	{
		host: "localhost",
		dialect: "mysql"
	});

	export default sequelize;