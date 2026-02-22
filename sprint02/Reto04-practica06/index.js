import http from "http";
import fs from "fs";

const server = http.createServer((req,res)=>{
    const requestedUrl = req.url;

    try {
        const html = fs.readFileSync(`./index.html`, "utf-8");
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(html);
    } catch (error) {
        console.error("Error leyendo el archivo:", error.message);
        res.writeHead(404, {"content-type": "text"});
        res.end("404 Not found");
    }
});

server.listen(8080, ()=> {
    console.log("Tu servidor está listo en el puerto 8080");
    
});