// ============================================================
// Archivo central de modelos y relaciones de la base de datos
// Aquí se importan todos los modelos y se definen cómo se
// relacionan entre sí (quién pertenece a quién).
// ============================================================

// Importamos la conexión a la base de datos
import sequelize from "../config/db.js";

// Importamos cada uno de los modelos (tablas de la BD)
import Author from "./Author.js"; // Modelo de Autor
import Book from "./Book.js"; // Modelo de Libro
import User from "./User.js"; // Modelo de Usuario
import Review from "./Review.js"; // Modelo de Reseña
import Loan from "./Loan.js"; // Modelo de Préstamo

// ============================================================
// RELACIONES (Asociaciones entre tablas)
// ============================================================

// --- Un Autor tiene muchos Libros (1 autor → N libros) ---
// hasMany  = "tiene muchos"  → Un autor puede tener varios libros
// belongsTo = "pertenece a"  → Cada libro pertenece a un solo autor
// foreignKey: la columna en la tabla "libro" que conecta con "autor"
// as: el alias que usamos para acceder a los datos relacionados

Author.hasMany(Book, {
  foreignKey: "authorId", // Columna en Book que referencia al Author
  as: "books", // Alias: author.books → obtienes sus libros
});

Book.belongsTo(Author, {
  foreignKey: "authorId", // Misma columna, vista desde el otro lado
  as: "author", // Alias: book.author → obtienes el autor del libro
});

// --- Un Usuario tiene muchas Reseñas (1 usuario → N reseñas) ---
// Un usuario puede escribir varias reseñas sobre distintos libros

User.hasMany(Review, {
  foreignKey: "userId", // Columna en Review que referencia al User
  as: "reviews", // Alias: user.reviews → obtienes sus reseñas
});

Review.belongsTo(User, {
  foreignKey: "userId",
  as: "user", // Alias: review.user → obtienes quién escribió la reseña
});

// --- Un Usuario tiene muchos Préstamos (1 usuario → N préstamos) ---
// Un usuario puede pedir prestados varios libros

User.hasMany(Loan, {
  foreignKey: "userId", // Columna en Loan que referencia al User
  as: "loans", // Alias: user.loans → obtienes sus préstamos
});

Loan.belongsTo(User, {
  foreignKey: "userId",
  as: "user", // Alias: loan.user → obtienes quién pidió el préstamo
});

// --- Un Libro tiene muchas Reseñas (1 libro → N reseñas) ---
// Un libro puede recibir varias reseñas de distintos usuarios

Book.hasMany(Review, {
  foreignKey: "bookId", // Columna en Review que referencia al Book
  as: "reviews", // Alias: book.reviews → obtienes las reseñas del libro
});

Review.belongsTo(Book, {
  foreignKey: "bookId",
  as: "book", // Alias: review.book → obtienes de qué libro es la reseña
});

// --- Un Libro tiene muchos Préstamos (1 libro → N préstamos) ---
// Un mismo libro puede ser prestado varias veces (en distintas fechas)

Book.hasMany(Loan, {
  foreignKey: "bookId", // Columna en Loan que referencia al Book
  as: "loans", // Alias: book.loans → obtienes los préstamos del libro
});

Loan.belongsTo(Book, {
  foreignKey: "bookId",
  as: "book", // Alias: loan.book → obtienes qué libro se prestó
});

// ============================================================
// Exportamos todo para poder usarlo en otras partes del proyecto
// Ejemplo de uso: import { Author, Book } from "./models/index.js"
// ============================================================
export { sequelize, Author, Book, User, Review, Loan };