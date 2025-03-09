import pool from "../config/db.js";

export async function createPublisher(publisher) {
    try {
        const query = "INSERT INTO publishers (name, address, phone, email) VALUES ($1,$2,$3,$4) RETURNING *";
        const values = [publisher.name, publisher.address, publisher.phone, publisher.email];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating publisher", error);
        throw error;
    }
}
export async function getAllPublisher() {
    try {
        const publishers = await pool.query("SELECT * FROM publishers");
        return publishers.rows;
    } catch (error) {
        console.error("error getting all publishers", error);
        throw error;
    }
}
export async function getOnePublisher(id) {
    try {
        const query = "SELECT * FROM publishers WHERE id = $1";
        const values = [id];
        console.log(values);
        
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error getting publisher by id", error);
        throw error;
    }
}
export async function updatePublisher(id, publisher) {
    try {
        const query = "UPDATE publishers SET name = $1 WHERE id = $2 RETURNING *";
        const values = [publisher.name, id];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error updating publisher", error);
        throw error;
    }
}
export async function deleteOnePublisher(id) {
    try {
        const query = "DELETE FROM publishers WHERE id = $1 RETURNING *";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting publisher", error);
        throw error;
    }
}