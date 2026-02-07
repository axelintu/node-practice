import express from "express";
import colors from "colors";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use(userRoutes);

app.listen(3000, ()=>{
    console.log(colors.magenta("Servidor ejecutándose en el puerto: 3000"));
})

