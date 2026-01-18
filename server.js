const express = require('express');

let port = 0;

const enviroment = process.argv[2];

if (enviroment.includes('--dev')){
    port = 3000;
} else if (enviroment.includes('--qa')) {
    port = 3001;
}

const app = express();

app.get('/', (req, resp)=>{
    resp.send('Hello World!');
})

app.get('/admin', (req, resp)=>{
    resp.send('Hello Admin!');
})
app.listen(port, ()=>{
    console.log('Server is running on port 3000');
    console.log('Argumentod de línea de comandos', process.argv);
    
})