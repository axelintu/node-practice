import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.conf";

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get("/", ()=> {
	res.send("API Ecommerce con MongoDB");
});

app.listen(port, ()=>{
	console.log(`Server running on http://localhost:${port}`);
})