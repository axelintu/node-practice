import express from "express";
import notesRouter from "./src/routes/notesRoutes.js";

const app = express();
app.use(express.json());

app.use(notesRouter);

app.listen(3000, () => {
	console.log("Servidor corriendo en http://localhost:3000");
});