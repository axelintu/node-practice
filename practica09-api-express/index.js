// 1. IMPORTA LOS MÓDULOS EXPRESS Y COLORS
import express from "express";
import colors from "colors";

const app = express();
let tasks = [
  { id: 1, desc: "Estudiar Node.js", status: "done" },
  { id: 2, desc: "Hacer ejercicio", status: "pending" },
  { id: 3, desc: "Leer documentación", status: "done" },
];
app.use(express.json());


// --- RUTAS ---
// RUTA 1: GET (Obtener todas las tareas)
// URL: /api/tasks
app.get("/api/tasks", (req, res) => {
    // RESPONDE CON EL CÓDIGO 200 Y EL ARREGLO DE TAREAS (tasks)
    // Pista: usa res.status(200).json(...)
    res.status(200).json(tasks);
});

// RUTA 2: GET (Obtener una tarea por su ID)
// URL: /api/tasks/:id
app.get("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let task = null;
    const isTaskId = (task) => {
        return task.id === id;
    }
    task = tasks.find(isTaskId);
    if (!task) {
        res.status(404).json( { error: "Tarea no encontrada" });
    }
    res.status(200).json(task);
});

// RUTA 3: POST (Crear una nueva tarea)
// URL: /api/tasks
app.post("/api/tasks", (req, res) => {
    const desc = req.body.desc;
    if (!desc) {
        res.status(400).json({ error: "Description is required."});
    }
    const newTask = {
        id: tasks[tasks.length-1].id + 1,
        desc: desc,
        status: "pending"
    };
    tasks.push(newTask)
    res.status(201).json(tasks);
});


// 5. LEVANTAR EL SERVIDOR
app.listen(3000, () => {
    console.log(colors.cyan("Servidor corriendo en http://localhost:3000"));
});