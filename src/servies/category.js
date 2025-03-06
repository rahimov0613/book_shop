import pool from "../config/db.js";

export async function createOrder(order) {
    try {
        const query = "INSERT INTO orders( customerId, order_date, status) VALUES ($1,$2,$3) RETURNING *";
        const values = [order.customerId, order.order_date, order.status];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating order", error);
        throw error;
    }
}
export async function getAllOrder() {
    try {
        const orders = await pool.query("SELECT * FROM orders");
        return orders.rows;
    } catch (error) {
        console.error("error getting all orders", error);
        throw error;
    }
}
export async function getOrderById(orderId) {
    try {
        const query = "SELECT * FROM orders WHERE id = $1";
        const values = [orderId];

        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("error getting order by id", error);
        throw error;
    }
}
export async function updateOrder(orderId, order) {
    try {
        const query = "UPDATE orders SET status = $1 WHERE id = $2 RETURNING *";
        const values = [order.status, orderId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error updating order", error);
        throw error;
    }
}
export async function deleteOrder(orderId) {
    try {
        const query = "DELETE FROM orders WHERE id = $1 RETURNING *";
        const values = [orderId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting order", error);
        throw error;
    }
}
