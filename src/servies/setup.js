import pool from "../config/db.js";

//set up all tables
export const setUp = async () => {

    const createTableBooksQuery = ` CREATE TABLE "books" (
        id SERIAL PRIMARY KEY,
        title VARCHAR(60) NOT NULL,
        publisherId INT NOT NULL,
        FOREIGN KEY (publisherId) REFERENCES "publishers" (id) ON DELETE CASCADE,
        publication_year INT CHECK (publication_year >= 1000 AND publication_year <= EXTRACT(YEAR FROM CURRENT_DATE)),-- mavjud bulmagan yillarni yozishlikni yonini olish uchun
        isbn VARCHAR(20) UNIQUE NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        categoryId INT NOT NULL,
        FOREIGN KEY (categoryId) REFERENCES "categories" (id) ON DELETE CASCADE,
        stock_quantity INT NOT NULL DEFAULT 0
        )`;

    const createTableAuthorsQuery = `CREATE TABLE "authors" (
            id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    bio VARCHAR(255)
    )`;

    const createTableBookAuthorsQuery = `CREATE TABLE "book_authors" (
        bookId INT NOT NULL,
        authorId INT NOT NULL,
        PRIMARY KEY (bookId, authorId),
        FOREIGN KEY (bookId) REFERENCES "books" (id) ON DELETE CASCADE,
        FOREIGN KEY (authorId) REFERENCES "authors" (id) ON DELETE CASCADE
        )`;

    const createTablePublishersQuery = `CREATE TABLE "publishers" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            email VARCHAR(255) UNIQUE
            )`;

    const createTableCategoriesQuery = `CREATE TABLE "categories" (
                id SERIAL PRIMARY KEY,
                category_name VARCHAR(255) NOT NULL
                )`;

    const createTableCustomersQuery = `CREATE TABLE "customers" (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(255) NOT NULL,
                    last_name VARCHAR(255) NOT NULL,
                    phone VARCHAR(20) NOT NULL,
                    email VARCHAR(255) UNIQUE,
                    address VARCHAR(255)
                    )`;

    const createTableOrdersQuery = `CREATE TABLE "orders" (
                        id SERIAL PRIMARY KEY,
                        customerId INT NOT NULL,
                        FOREIGN KEY (customerId) REFERENCES "customers" (id) ON DELETE CASCADE,
                        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        status VARCHAR(30) CHECK (status IN ('pending', 'shipped', 'completed'))
)`;

    const createTableOrderItemsQuery = `CREATE TABLE "order_items" (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES "orders" (id) ON DELETE CASCADE,
    book_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES "books" (id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL
    )`;
    try {
        //use async/await to run queries in sequence
        await Promise.all([
            
            pool.query(createTablePublishersQuery),
            pool.query(createTableCategoriesQuery),
            pool.query(createTableBooksQuery),
            pool.query(createTableAuthorsQuery),
            pool.query(createTableBookAuthorsQuery),
            pool.query(createTableCustomersQuery),
            pool.query(createTableOrdersQuery),
            pool.query(createTableOrderItemsQuery),
            
        ]);
        return "All tables created successfully!"
    } catch (error) {
        console.error("error creating tables", error);
        throw new Error("error creating tables");
    }
};