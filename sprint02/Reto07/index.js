import express from "express";

const app = express();
// Importante: Esto permite leer el JSON que nos envían en el Body
app.use(express.json());

// SIMULACIÓN DE BASE DE DATOS
let notes = [];
let currentId = 1;

// --- RUTAS ---

// 1. GET /notes (Lista todas las notas)
app.get("/notes", (req, res) => {
    // RESPONDE CON EL ARREGLO DE NOTAS Y STATUS 200
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

    // --- FIN DE VALIDACIÓN ---

    // D. SI PASÓ LAS VALIDACIONES, CREA LA NOTA
    const newNote = { 
        id: currentId++, 
        title, 
        content 
    };
    
    // E. AGREGA LA NOTA AL ARREGLO
    
    // F. RESPONDE CON STATUS 201 Y LA NOTA CREADA
});

// 3. PUT /notes/:id (Actualizar nota)
app.put("/notes/:id", (req, res) => {
    const id = +req.params.id;
    const { title, content } = req.body;
    
    // A. BUSCA LA NOTA EN EL ARREGLO (find)
    const note = notes.find(n => n.id === id);

    // B. SI NO EXISTE LA NOTA (!note):
         // Retorna 404 con mensaje "Nota no encontrada"

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
});

// 4. DELETE /notes/:id (Borrar nota)
app.delete("/notes/:id", (req, res) => {
    const id = +req.params.id;

    // A. BUSCA EL ÍNDICE DE LA NOTA (findIndex)
    const index = notes.findIndex(n => n.id === id);
    
    // B. SI EL ÍNDICE ES -1 (No existe):
         // Retorna 404
    
    // C. ELIMINA LA NOTA USANDO .splice(index, 1)
    
    // D. RESPONDE CON STATUS 200 (O 204) Y UN MENSAJE DE ÉXITO
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});