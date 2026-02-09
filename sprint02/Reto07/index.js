import express from "express";

const app = express();
app.use(express.json());

let notes = [
	{ id: 1, title: "Nota 1" ,content: "Comprar leche" },
	{ id: 2, title: "Nota 2" ,content: "Comprar café y azucar" },
	{ id: 3, title: "Nota 3", content: "Estudiar" },
];
let currentId = notes.length ? Math.max(...notes.map(n=>n.id)) + 1 : 1;

const parseId = (req, res) => {
	const id = Number(req.params.id);
	if (!Number.isInteger(id) || id < 1) {
		res
			.status(404)
			.json({mensaje: "El id debe ser un entero mayor o igual a 1"});
		return null;
	}
	return id;
}

const findNoteIndexById = (id) => notes.findIndex(n => n.id === id);
const findNoteById = (id) => notes.find((n)=> n.id === id);
const validatePostContent = (req, res) => {
	const content = req.body.content;
	if (!content || content.length < 10) {
		res.status(400).json(
			{ error: "El contenido debe tener al menos 10 caractéres"}
		);
		return null;
	}
	return content;
}
// if content exists but empty, or is not passed
// return "noContentUpdate"
// exists and is longer than 10 char is valid
// return content
// -----
// if content exists and is between 1 and 10 not valid
// return null
const validatePutContent = (req, res) => {
	const {content} = req.body;
	if (content === undefined || content === null) {
		return "noContentUpdate";
	}
	const trimmed = content.trim();
	if (trimmed.length === 0) {
		return "noContentUpdate";
	}
	if (trimmed.length > 0 && trimmed.length < 10) {
		return "invalidContent";
	} 
	return trimmed;
}
// value if exists and not empty
const validatePutTitle = (req, res) => {
	const { title } = req.body;
	if (title === undefined || title === null) {
		return null;
	}
	const trimmed = title.trim();
	if (trimmed.length === 0) {
		return null;
	}
	return trimmed;
}

// 1. GET /notes (Lista todas las notas)
app.get("/notes", (req, res) => {
	res.status(200).json(notes);
});

// 1.1 GET /notes/:id (Nota individual)
app.get("/notes/:id", (req, res) => {
	const id = parseId(req, res);
	if (id === null) return;

	const index = findNoteIndexById(id);
	if (index === -1) {
		res.status(404).json({ error: "Index doesn't exist"});
		return;
	}
	const note = findNoteById(id);
	res.status(200).json(note);
});

// 2. POST /notes (Crear nota con validación)
app.post("/notes", (req, res) => {
	const title = validatePutTitle(req, res);
	if (!title) {
		res.status(400).json(
			{error: "El título es obligatorio"}
		);
		return;
	}

	const content = validatePostContent(req, res);
	if (!content) return;

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
	const resJSON = {};
	const id = parseId(req, res);
	if (id === null) return;
	
	const note = notes.find(n => n.id === id);
	if (!note) {
		return res.status(404).json({ message: "Nota no encontrada"});
	}

	const title = validatePutTitle(req, res);
	if (!title) {
		resJSON.titleMessage = "El título estaba vacío. No se actualizó.";
	} else {
		note.title = title;
	}

	const content = validatePutContent(req, res);
	switch (content) {
		case "noContentUpdate":
			resJSON.contentMessage = 
				`Content estaba vacío o era más corto que 10 caracteres. `
				+ `No se actualizó`;
		break;
		case "invalidContent":
			resJSON.contentMessage = "Content debe ser mayor a 10 caracteres";
			break;
		default:
			note.content = content;
			break;
	}
	res.status(201).json({... resJSON, notes });
});

// 4. DELETE /notes/:id (Borrar nota)
app.delete("/notes/:id", (req, res) => {
	const id = parseId(req, res);
	if (id === null) return;

	const index = findNoteIndexById(id);

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