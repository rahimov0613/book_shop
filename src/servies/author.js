import pool from "../config/db.js";


export async function createAuthor(auhtor) {
    const query = ("INSERT INTO authors (first_name,last_name,bio) VALUES ($1,$2,$3)RETURNING *");
    const values = [auhtor.first_name, auhtor.last_name, auhtor.bio]

    console.log("values", values);
    try {
        const result = await pool.query(query, values);
        return (result.rows[0]);
    } catch (error) {
        console.error("error creating author", error);
        throw error;

    }
}

export async function getALlAuthors() {
    try {
        const authors = await pool.query("SELECT * FROM authors");
        return (authors.rows);

    } catch (error) {
        console.error("error getting all authors", error);
        throw error;
    }
}
export async function getAuthorById(authorId) {
    try {
        const query = "SELECT * FROM authors WHERE id = $1";
        const values = [authorId];

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error getting author by id", error);
        throw error;
    }
}
export async function updateAuthor(authorId, author) {
    const query = "update authors set first_name = $1 where id = $2 returning *";
    const values = [author.first_name, authorId];
    console.log("values", values);
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error updating author", error);
        throw error;
    }
}
export async function deleteAuthorById(auhtorId) {
    const query = "DELETE FROM authors WHERE id = $1 RETURNING *";
    const values = [auhtorId];
    try {
        const result = await pool.query(query,values);
        return result.rows[0];
    }catch(error){
        console.error("error deleting author by id", error);
        throw error;
    }
    
}


