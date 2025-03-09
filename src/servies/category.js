import pool from "../config/db.js";

export async function createCategory(category) {
    try {
        const query = "INSERT INTO categories (category_name) VALUES ($1) RETURNING *";
        const values = [category.category_name];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error creating category", error);
        throw error;
    }
}
export async function getAllCategory() {
    try {
        const categories = await pool.query("SELECT * FROM categories");
        return categories.rows;
    } catch (error) {
        console.error("error getting all categories", error);
        throw error;
    }
}
export async function getCategoryById(categoryId) {
    try {
        const query = "SELECT * FROM categories WHERE id = $1";
        const values = [categoryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error getting category by id", error);
        throw error;
    }
}
export async function updateCategory(categoryId,category) {
    try {
        const query = "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *";
        const values = [category.name, categoryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error updating category", error);
        throw error;
    }
}
export async function deleteCategory(categoryId) {
    try {
        const query = "DELETE FROM categories WHERE id = $1 RETURNING *";
        const values = [categoryId];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("error deleting category", error);
        throw error;
    }
}