import express from "express";

const app = express();
app.use(express.json());

let notes = [
	{ id: 1, title: "Nota 1" ,content: "Comprar leche" },
	{ id: 2, title: "Nota 2" ,content: "Comprar café y azucar" },
	{ id: 3, title: "Nota 3", content: "Estudiar" },
];
let currentId = notes.length ? Math.max(...notes.map(n=>n.id)) + 1 : 1;

app.get("/notes", (req, res) => {
	res.status(200).json(notes);
});

// 2. POST /notes (Crear nota con validación)
app.post("/notes", (req, res) => {
	const { title, content } = req.body;
	if (!title) {
		res.status(400).json(
			{error: "El título es obligatorio"}
		);
		return;
	}
	if (!content || content.length < 10) {
		res.status(400).json(
			{ error: "El contenido debe tener al menos 10 caractéres"}
		);
		return;
	}
	const newNote = { 
		id: currentId++, 
		title, 
		content 
	};
	notes.push(newNote);
	res.status(201).json(newNote)
});

// 3. PUT /notes/:id (Actualizar nota)
app.put("/notes/:id", (req, res) => {
	const id = +req.params.id;
	const { title, content } = req.body;
	
	const note = notes.find(n => n.id === id);

	if (!note) {
		res.status(404).json(
			{ error: "Nota no encontrada"}
		);
		return;
	}

	if (title) {
		note.title = title;
	}
	if (content) {
		note.content = content;
	}

	res.status(201).json(note);
	console.log(notes);
});

// 4. DELETE /notes/:id (Borrar nota)
app.delete("/notes/:id", (req, res) => {
	const id = +req.params.id;

	const index = notes.findIndex(n => n.id === id);

	if (index === -1) {
		res.status(404).json({ error: "Index doesn't exist"});
		return;
	}
	notes.splice(index,1);
	res.status(200).json(
		{ 
			message: "Nota eliminada",
			notes: notes
		}
	);
});

app.listen(3000, () => {
	console.log("Servidor corriendo en http://localhost:3000");
});