import express from "express";

const app = express();
// Importante: Esto permite leer el JSON que nos envían en el Body
app.use(express.json());

// SIMULACIÓN DE BASE DE DATOS
let notes = [
	{ id: 1, title: "Nota 1" ,content: "Comprar leche" },
	{ id: 2, title: "Nota 2" ,content: "Comprar café y azucar" },
	{ id: 3, title: "Nota 3", content: "Estudiar" },
];
let currentId = notes.length ? Math.max(...notes.map(n=>n.id)) + 1 : 1;

// --- RUTAS ---

// 1. GET /notes (Lista todas las notas)
app.get("/notes", (req, res) => {
	// RESPONDE CON EL ARREGLO DE NOTAS Y STATUS 200
	res.status(200).json(notes);
});

// 2. POST /notes (Crear nota con validación)
app.post("/notes", (req, res) => {
	// A. DESESTRUCTURA title Y content DEL BODY (req.body)
	const { title, content } = req.body;

	// --- ZONA DE VALIDACIÓN MANUAL ---

	// B. SI NO HAY TÍTULO (!title):
		 // Retorna status 400 y un JSON { error: "El título es obligatorio" }
		 // OJO: No olvides poner 'return' para detener la función.
	
	// C. SI NO HAY CONTENIDO O EL CONTENIDO TIENE MENOS DE 10 LETRAS:
		 // (Usa: !content || content.length < 10)
		 // Retorna status 400 y JSON { error: "El contenido debe tener al menos 10 caracteres" }
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
	// --- FIN DE VALIDACIÓN ---

	// D. SI PASÓ LAS VALIDACIONES, CREA LA NOTA
	const newNote = { 
		id: currentId++, 
		title, 
		content 
	};
	
	// E. AGREGA LA NOTA AL ARREGLO
	notes.push(newNote);
	// F. RESPONDE CON STATUS 201 Y LA NOTA CREADA
	res.status(201).json(newNote)
});

// 3. PUT /notes/:id (Actualizar nota)
app.put("/notes/:id", (req, res) => {
	const id = +req.params.id;
	const { title, content } = req.body;
	
	// A. BUSCA LA NOTA EN EL ARREGLO (find)
	const note = notes.find(n => n.id === id);

	// B. SI NO EXISTE LA NOTA (!note):
	// Retorna 404 con mensaje "Nota no encontrada"
	if (!note) {
		res.status(404).json(
			{ error: "Nota no encontrada"}
		);
		return;
	}

	// C. ACTUALIZAR DATOS (Solo si nos los enviaron)
	// Si enviaron un título nuevo, actualízalo:
	if (title) {
		note.title = title;
	}
	// Si enviaron contenido nuevo, actualízalo:
	if (content) {
		note.content = content;
	}

	// D. RESPONDE CON LA NOTA ACTUALIZADA
	res.status(201).json(note);
	console.log(notes);
});

// 4. DELETE /notes/:id (Borrar nota)
app.delete("/notes/:id", (req, res) => {
	const id = +req.params.id;

	// A. BUSCA EL ÍNDICE DE LA NOTA (findIndex)
	const index = notes.findIndex(n => n.id === id);
	
	// B. SI EL ÍNDICE ES -1 (No existe):
		 // Retorna 404
	if (index === -1) {
		res.status(404).json({ error: "Index doesn't exist"});
		return;
	}
	// C. ELIMINA LA NOTA USANDO .splice(index, 1)
	notes.splice(index,1);
	res.status(200).json(
		{ 
			message: "Nota eliminada",
			notes: notes
		}
	);
	// D. RESPONDE CON STATUS 200 (O 204) Y UN MENSAJE DE ÉXITO
});

app.listen(3000, () => {
	console.log("Servidor corriendo en http://localhost:3000");
});