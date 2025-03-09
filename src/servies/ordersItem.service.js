import pool from "../config/db.js";

export async function createOrderItem(ordersItem) {
    try {
        const query = "INSERT INTO orders_item (orderId, bookId, quantity) VALUES ($1,$2,$3) RETURNING *";
        const values = [ordersItem.order_id, ordersItem.book_id, ordersItem.quantity];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating orders_item", error);
        throw error;
    }
}
export async function getAllOrderItem() {
    try {
        const result = await pool.query("SELECT * FROM orders_item");
        return result.rows;
    } catch (error) {
        console.error("error getting all orders_item", error);
        throw error;

    }
}
export async function getOneOrderItem(id) {
    try {
        const query = "SELECT * FROM orders_item WHERE orderId = $1";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("error getting orders_item by id", error);
        throw error;
    }
}
export async function updateOrderItem(id, ordersItem) {
    try {
        const query = "UPDATE orders_item SET quantity = $1 WHERE orderId = $2 RETURNING *";
        const values = [ordersItem.quantity, id];

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error('error updating orders_item', error);
        throw error;
    }
}
export async function deleteOneOrderItem(id) {
    try {
        const query = "DELETE FROM orders_item WHERE orderId = $1 RETURNING *";
        const values = [id];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting orders_item", error);
        throw error;
    }
}