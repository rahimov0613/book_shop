import pool from "../config/db.js";

export async function createBookAthors(body) {
    try {
        const query = "INSERT INTO book_authors (bookId, authorId) VALUES ($1,$2) RETURNING *";
        const values = [body.bookId, body.authorId];
        console.log(values);
        console.log(query);
        
        

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating book_authors", error);
        throw error;
    }
}
export async function getAllBookAuthors() {
    try {
        const bookAuthors = await pool.query("SELECT * FROM book_authors");
        return bookAuthors.rows;
    } catch (error) {
        console.error("error getting all book_authors", error);
        throw error;
    }
}
export async function getOneBookAuthors(id) {
    try {
        const query = "SELECT * FROM book_authors WHERE bookId = $1";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("error getting book_authors by id", error);
        throw error;
    }
}
export async function updateBookAuthors(id, body) {
    try {
        const query = "UPDATE book_authors SET authorId = $1 WHERE bookId = $2 RETURNING *";
        const values = [body.authorId, id];

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error('error updating book_author', error);
        throw error;
    }
}
export async function deleteOnebookAuthors(id) {
    try {
        const query = "DELETE FROM book_authors WHERE bookId = $1 RETURNING *";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting book_author", error);
        throw error;
    }
}
