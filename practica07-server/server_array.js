import http from "http";

let numbers = [10,20,30];

const server = http.createServer((req,res)=>{
    const { method, url } = req;
    res.setHeader("Content-type", "application/json");
    
    if (url.startsWith("/numbers")) {
        const parts = url.split("/");
        const index = parts.length > 2 ? parseInt(parts[2]) : null;
        console.log(parts, index);
        
        switch (method) {
            case "GET":
                if(index===null || isNaN(index)) {
                    res.statusCode = 200;
                    res.end(JSON.stringify({
                        numbers
                    }));
                } else {
                    if(index>=0 && index<numbers.length) {
                        res.statusCode = 200;
                        res.end(JSON.stringify({ 
                            value: numbers[index]
                        }));
                    } else {
                        res.statusCode = 404;
                        res.end(JSON.stringify({ 
                            error: "Índice no encontrado (404)"
                        }));
                    }
                }
                break;
        
            default:
                res.statusCode = 405;
                res.end(JSON.stringify({error: "Método no permitido (405)"}));
                break;
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ 
            error: "Url no encontrada (404)"
        }));
    }
});

server.listen(3000,()=>{
    console.log("Servidor escuchando...");
    
})