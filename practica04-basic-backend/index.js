import http from "http";
import fs from "fs";
import colors from "colors";
import dayjs from "dayjs";

const typeHTML = {"Content-type": "text/html"};
const typeCSS  = {"Content-type": "text/css"};

const server = http.createServer((req, res)=>{
    switch (req.url) {
        case "/":
            const html = fs.readFileSync("./index.html","utf-8");
            res.writeHead(typeHTML);
            res.end(html);
            console.log(colors.green(`[${dayjs().format()}] GET /` ));
            break;
        case "/nosotros":
            res.writeHead(typeHTML);
            res.end(fs.readFileSync(`./${req.url}.html`,"utf-8"));
            console.log(colors.green(`[${dayjs().format()}] GET ${req.url}` ));
            break;
        case "/styles.css":
            res.writeHead(200,typeCSS);
            res.end(fs.readFileSync(`./styles.css`,"utf-8"));
            console.log(colors.green(`[${dayjs().format()}] GET ${req.url}` ));
            break;
        case "/contacto":
            res.writeHead(typeHTML);
            res.end(fs.readFileSync(`./${req.url}.html`,"utf-8"));
            console.log(colors.green(`[${dayjs().format()}] GET ${req.url}` ));
            break
        default:
            const html404 = fs.readFileSync("./404.html","utf-8");
            res.writeHead(404, {"content-type":"text/html"});
            res.end(html404);
            break;
    }
    // if (req.url === "/") {
    //     const html = fs.readFileSync("./index.html","utf-8");
    //     res.writeHead(200,{"Content-type": "text/html"});
    //     res.end(html);
    //     console.log(colors.green(`[${dayjs().format()}] GET /` ));
    // } else {
    //     const html = fs.readFileSync("./404.html","utf-8");
    //     res.writeHead(404, {"content-type":"text/html"});
    //     res.end(html);
    // }
});

server.listen(3000, ()=> {
    console.log("Servidor ejecutándose en el puerto 3000");
})