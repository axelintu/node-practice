import http from "http";
import fs from "fs";
import colors from "colors";
import dayjs from "dayjs";

const cthtml = {"Content-type": "text/html"};
const ctcss  = {"Content-type": "text/css"};
const urls = [
    {url: "/",           src: "index.html",    type: cthtml },
    {url: "/nosotros",   src: "nosotros.html", type: cthtml },
    {url: "/contacto",   src: "contacto.html", type: cthtml },
    {url: "/styles.css", src: "styles.css",    type: ctcss  }
]

const server = http.createServer((req, res)=>{
    const requestedUrl = req.url;
    const found = urls.find((url)=> {
        return url.url === requestedUrl;
    });

    if (found) {
        const html = fs.readFileSync(`./${found.src}`,"utf-8");
        res.writeHead(200, found.type);
        res.end(html);
        console.log(colors.green(`[${dayjs().format()}] GET ${requestedUrl}` ));
    } else {
        const html404 = fs.readFileSync("./404.html","utf-8");
        res.writeHead(404, cthtml);
        res.end(html404);
        console.log(colors.red(`[${dayjs().format()}] GET ${requestedUrl}` ));
    }
});

server.listen(3000, ()=> {
    console.log("Servidor ejecutándose en el puerto 3000");
})