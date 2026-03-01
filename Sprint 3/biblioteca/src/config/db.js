import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "pass",
    database: "biblioteca"
});

export default pool;