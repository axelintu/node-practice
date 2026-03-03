import express from "express";
import bookRoutes from "./src/routes/bookRoutes.js";
import authorRoutes from "./src/routes/authorRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import displayRoutes from "./src/routes/displayRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/display", displayRoutes);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});