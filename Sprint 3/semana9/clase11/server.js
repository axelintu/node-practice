import e from "express";
import routes from "./src/routes/index.js";
import { sequelize } from "./src/model/index.js";

const app = e();

const PORT = 3000;

app.use(e.json());
app.use("/api", routes);

sequelize
	.sync()
	// .authenticate()
	.then(()=> console.log("MySql connected and tables synced")) 
	.catch((err)=> console.error(err));

app.listen(PORT, ()=> {
	console.log("Server running");
});