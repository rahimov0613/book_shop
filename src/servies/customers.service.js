import pool from "../config/db.js";

export async function createCustomer(customer) {
    try {
        const query = "INSERT INTO customers (first_name, last_name, email, phone, address) VALUES ($1,$2,$3,$4,$5) RETURNING *";
        const values = [customer.first_name, customer.last_name, customer.email, customer.phone, customer.address];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating customer", error);
        throw error;
    }
}
export async function getAllCustomers() {
    try {
        const customers = await pool.query("SELECT * FROM customers");
        return customers.rows;

    } catch (error) {
        console.error("error getting all customers", error);
        throw error;
    }
}
export async function getOneCustomer(customerId) {
    try {
        const query = "SELECT * FROM customers WHERE id = $1";
        const values = [customerId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error getting customer by id", error);
        throw error;

    }
}
export async function updateCustomer(customerId, customer) {
    try {
        const query = "UPDATE customers SET first_name = $1 WHERE id = $2 RETURNING *";
        const values = [customer.first_name, customerId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error updating customer", error);
        throw error;
    }
}
export async function deleteOneCustomer() {
    try {
        const query = "DELETE FROM customers WHERE id = $1 RETURNING *";
        const values = [customerId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting customer", error);
        throw error;
    }
}