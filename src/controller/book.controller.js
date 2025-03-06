import { createBook, deleteBook, getAllBooks, updateBook } from "../servies/index.js";


export const bookController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createBook(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllBooks();
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        try {
            const bookId = parseInt(req.params.id);
            if (!bookId) {
                return res.status(400).send({ message: "Invalid book id" });
            }
            const result = await getBookById(bookId);
            res.status(200).send(result);


        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req, res, next) {
        try {
            const bookId = parseInt(req.params.id);
            if (!bookId) {
                return res.status(400).send({ message: "Invalid book id" });
            }
            const body = req.body;
            const result = await updateBook(bookId, body);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        try {

            const bookId = parseInt(req.params.id);
            if (!bookId) {
                return res.status(400).send({ message: "Invalid book id" });
            }
            const result = await deleteBook(bookId);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }
}
