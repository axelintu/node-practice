import e from "express";
import routes from "./src/routes/index.js";
import sequelize from "./src/config/db.js";

const app = e();

const PORT = 3000;

app.use(e.json());
app.use("/api", routes);

sequelize
	.sync()
	.authenticate()
	.then(()=> console.log("MySql Connection is succesfull")) 
	.catch((err)=> console.error(err));

app.listen(PORT, ()=> {
	console.log("Server running");
});