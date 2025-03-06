import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "book_shop",
    password: "1234",
    port: "5432"
});

pool.connect().then((client) => { 
    console.log("Connected to PostgreSQL database");
    client.release();
})
    .catch((err) => {
        console.error('database connection error', err.stack);
    })

export default pool;