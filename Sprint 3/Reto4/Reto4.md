# Conectando mundos: Tu primera API de Lectura con MySQL

Hasta ahora, nuestras APIs de Express guardaban información en "arreglos" temporales escritos en el mismo código. El problema es que si reiniciabas el servidor, adiós datos. Por otro lado, ya aprendiste a crear tablas y guardar datos reales usando SQL en tu consola. 

¡Es hora de unir las piezas! 



Hoy en día, las aplicaciones usan "Drivers" (controladores) para que tu código JavaScript pueda enviarle sentencias SQL a tu base de datos y recibir las respuestas automáticamente para mostrarlas en el navegador.

## Tu Misión

Vas a construir el backend de lectura para una Biblioteca. Deberás crear dos recursos (endpoints) para consultar la lista de `autores` y la lista de `usuarios`, conectando tu servidor de Node.js directamente a tus tablas en MySQL.

### Criterios de Aceptación (Checklist)
* [ ] `GET /api/autores`: Devuelve todos los autores que existen en tu base de datos MySQL.
* [ ] `GET /api/usuarios`: Devuelve todos los usuarios que existen en tu base de datos MySQL.
* [ ] El código de la base de datos debe estar protegido con bloques `try/catch` para evitar que el servidor colapse si hay un error.

---

## Instrucciones

### Paso 0: Preparar la Base de Datos
Abre tu gestor de MySQL y ejecuta este código rápido para crear tus tablas de trabajo y tener datos que consultar:
```sql
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Insertamos datos de prueba
INSERT INTO autores (nombre) VALUES ('Gabriel García Márquez'), ('J.K. Rowling'), ('Isabel Allende');
INSERT INTO usuarios (nombre) VALUES ('Ana López'), ('Carlos Pérez'), ('María Gómez');
```
### Paso 1: Configurar el Proyecto Node

Abre tu terminal, crea una carpeta nueva, inicializa el proyecto (npm init -y) y recuerda poner "type": "module" en tu package.json.
Instala Express y el driver de MySQL:

```bash
npm i express mysql2
```
### Paso 2: El Código (Esqueleto)
Crea tu archivo index.js. Aquí tienes la estructura inicial con el ejemplo para la ruta de autores. Tu reto es analizarlo, entender el try/catch y escribir tú mismo la ruta para los usuarios.

```javascript
import express from 'express';
// Importamos la versión 'promise' de mysql2 para poder usar async/await
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json());

// 1. CONEXIÓN A LA BASE DE DATOS
// 🚨 ATENCIÓN: Asegúrate de poner tu contraseña real de MySQL
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_password_aqui',
    database: 'biblioteca'
});

console.log("¡Conectado a la base de datos MySQL exitosamente!");

// ==========================================
// RUTA 1: AUTORES
// ==========================================

// GET: Obtener todos los autores
app.get('/api/autores', async (req, res) => {
    // Intentamos (try) ejecutar el código de la base de datos
    try {
        // Ejecutamos la consulta SQL. 
        // mysql2 devuelve un arreglo donde la posición [0] son los datos reales (rows)
        const [rows] = await db.query('SELECT * FROM autores');
        
        // Respondemos enviando esos datos al navegador o a Thunder Client
        res.status(200).json(rows);
        
    } catch (error) {
        // Si la base de datos falla (catch), atrapamos el error y respondemos con un 500
        console.log(error);
        res.status(500).json({ error: "Error de conexión al consultar los autores" });
    }
});

// ==========================================
// RUTA 2: USUARIOS
// ==========================================

// 🚨 TU TURNO: 
// Escribe el endpoint GET para '/api/usuarios'.
// ¡La lógica es exactamente la misma que la de arriba, solo cambia el nombre de la tabla en tu consulta SQL!

// app.get('/api/usuarios', async (req, res) => {
//    Escribe tu bloque try/catch aquí...
// });


// Levantamos el servidor
app.listen(3000, () => {
    console.log('Servidor Express corriendo en http://localhost:3000');
});
```