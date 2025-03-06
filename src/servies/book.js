import pool from "../config/db.js";

export async function createBook(book) {
    try {
        const query = `INSERT INTO Books (title, publisher_id, publication_year, isbn, price, categoryId, stock_quantity)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

        const values = [book.title, book.publisher_id, book.publication_year, book.isbn, book.price, book.categoryId, book.stock_quantity];
        const result = await pool.query(query, values);

        return result.rows[0];
    } catch (error) {
        console.error("error creating book", error);
        throw error;
    }
}
export async function getAllBooks() {
    try {
        const books = await pool.query("SELECT * FROM books");
        return books.rows;
    } catch (error) {
        console.error("error getting all books", error);
        throw error;
    }
}
export async function getBookById(bookId) {
    try {
        const query = "SELECT * FROM books WHERE id = $1";
        const values = [bookId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error getting book by id", error);
        throw error;
    }
}

export async function updateBook(bookId,book) {
    try {
    const query = "UPDATE books SET title = $1 WHERE id = $2 RETURNING *";
    const values = [book.title, bookId];

    const result = await pool.query(query,values);
    return result.rows[0];
        
    } catch (error) {
        console.error("error updating book", error);
        throw error;
    }
    
}
export async function deleteBook(bookId) {
    try {
    const query = "DELETE FROM books WHERE id = $1 RETURNING *";
    const values = [bookId];
    
    const result = await pool.query(query,values);
    return result.rows[0];
} catch (error) {
    console.error("error deleting book", error);
    throw error;
}
    
}
