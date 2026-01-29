import http from "http";

const server = http.createServer((req, res) => {
    const {method, url } = req;
    res.writeHead(200, { "Content-Type": "application/json" });
    switch (method) {
        case 'GET':
            res.end(JSON.stringify({ 
                message: "Obteniendo lista de tareas..." 
            }))
        break;
        case 'POST':
            res.end(JSON.stringify({ 
                message: "Creando una nueva tarea..." 
            }))
        break;
        case 'PUT':
            res.end(JSON.stringify({ 
                message: "Actualizando una tarea existente..." 
            }))
        break;
        case 'DELETE':
            res.end(JSON.stringify({ 
                message: "Tarea eliminada correctamente." 
            }))
        break;   
        default:
            res.end(JSON.stringify({ 
                message: "Método no soportado" 
            }))
        break;
    }
});

server.listen(3000,()=>{
    console.log("Servidor escuchando...");
});
