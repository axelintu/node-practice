import exp from "express";

const app = exp();

app.use(exp.json());

let numbers = [10, 20, 30];

app.get("/numbers", (req, res) => {
    res.status(200).json({ numbers });
    console.log('GET /numbers');
});
app.get("/numbers/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if(isNaN(index)|| index<0 || index>= numbers.length) {
        return res.status(404).json({ error: "Indice no encontrado 404" });
    }
    res.status(200).json({ value: numbers[index] });
    console.log(`GET /numbers/${index}`);
});
app.post("/numbers", (req, res) => {
    const {value}= req.body;
    if (typeof value !== "number"){
        return res.status(400).json({error: "Debes enviar un número válido" });
    }
    numbers.push(value);
    res.status(201).json({ message: "Número agregado", numbers });
    console.log('POST /numbers');
});

app.put("/numbers/:index", (req,res)=> {
    const index = parseInt(req.params.index);
    if (typeof value !== "number") {
        return res.status(400).json({error: "Debes enviar un número válido" });
    }
    if (isNaN(index)|| index<0 || index>= numbers.length) {
        return res.status(400).json({ error: "Indice no encontrado 400, no puedo actualizar ese indice" });
    }
    numbers[index] = value;
    res.status(201).json({ message: "Número actualizado", numbers });
});

app.delete("/numbers/:index", (req, res)=>{
    const index = parseInt(req.params.index);
    if (isNaN(index)|| index<0 || index>= numbers.length) {
        return res.status(400).json({ error: "Indice no encontrado 400, no puedo actualizar ese indice" });
    }
    numbers.splice(index,1);
    res.json({message: "Número eliminado", numbers});
});

app.listen(3000, ()=> {
    console.log("Servidor ejecutándose en el puerto 3000");    
})