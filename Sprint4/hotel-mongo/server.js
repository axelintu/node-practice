import express from "express";
import connectDB from "./src/conf/db.config.js";
import routes from './src/routes/index.js'

const PORT = 3000;
const app = express();
app.use(express.json());

await connectDB();

app.use("/api", routes)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});