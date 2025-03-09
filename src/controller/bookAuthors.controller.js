import { createBookAthors, deleteOnebookAuthors, getAllBookAuthors, getOneBookAuthors, updateBookAuthors } from '../servies/index.js'

export const bookAuthcorsCOntroller = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createBookAthors(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllBookAuthors();
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
            const result = await getOneBookAuthors(bookId);
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
            const result = await updateBookAuthors(bookId, body);
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
            const result = await deleteOnebookAuthors(bookId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    }
}