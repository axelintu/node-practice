// 1. IMPORTA LOS MÓDULOS EXPRESS Y COLORS
import express from "express";
import colors from "colors";

// 2. CREA LA INSTANCIA DE LA APLICACIÓN (app)
const app = express();

// 3. NUESTRA BASE DE DATOS FICTICIA
let tasks = [
  { id: 1, desc: "Estudiar Node.js", status: "done" },
  { id: 2, desc: "Hacer ejercicio", status: "pending" },
  { id: 3, desc: "Leer documentación", status: "done" },
];

// 4. MIDDLEWARE (Importante para que funcionen los POST)
// Esto permite que tu servidor entienda cuando le envían datos en formato JSON
app.use(express.json());


// --- RUTAS ---

// RUTA 1: GET (Obtener todas las tareas)
// URL: /api/tasks
app.get("/api/tasks", (req, res) => {
    // RESPONDE CON EL CÓDIGO 200 Y EL ARREGLO DE TAREAS (tasks)
    // Pista: usa res.status(200).json(...)
});

// RUTA 2: GET (Obtener una tarea por su ID)
// URL: /api/tasks/:id
app.get("/api/tasks/:id", (req, res) => {
    // A. OBTENER EL ID DE LOS PARÁMETROS (req.params.id) Y CONVERTIRLO A NÚMERO
    
    // B. BUSCAR LA TAREA EN EL ARREGLO (Usa un ciclo for o el método .find)
    let task = null;
    // ...tu lógica de búsqueda aquí...

    // C. VALIDAR: SI NO EXISTE LA TAREA
    if (!task) {
         // Retorna un status 404 con un json que diga { error: "tarea no encontrada" }
    }

    // D. SI EXISTE, RESPONDE CON STATUS 200 Y LA TAREA ENCONTRADA
});

// RUTA 3: POST (Crear una nueva tarea)
// URL: /api/tasks
app.post("/api/tasks", (req, res) => {
    // A. DESESTRUCTURAR LA DESCRIPCIÓN (desc) DEL CUERPO DE LA PETICIÓN (req.body)
    
    // B. VALIDAR: SI NO HAY DESCRIPCIÓN
    if (!desc) {
        // Retorna status 400 con error: "description is required"
    }

    // C. CREAR EL NUEVO OBJETO TAREA
    // El ID debe ser el del último elemento + 1
    // El status inicial debe ser "pending"
    const newTask = {
        // ...completa el objeto
    };

    // D. AGREGAR LA NUEVA TAREA AL ARREGLO (push)
    
    // E. RESPONDER CON STATUS 201 (CREATED) Y EL ARREGLO ACTUALIZADO
});


// 5. LEVANTAR EL SERVIDOR
app.listen(3000, () => {
    console.log(colors.cyan("Servidor corriendo en http://localhost:3000"));
});