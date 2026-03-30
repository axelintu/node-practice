import e from "express";
import connectDB from "./src/config/db.conf.js";
import routes from "./src/routes/index.js";

const app = e();
const port = 3000;

app.use(e.json());

connectDB();

app.get("/", () => {
	res.send("API VideoGameStore");
})

app.use("/api", routes);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
});
