import { createAuthor, deleteAuthorById, getALlAuthors, getAuthorById, updateAuthor } from "../servies/index.js";

export const authorController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createAuthor(body);
            res.status(201).send(result);
        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getALlAuthors();
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        const authorId = parseInt(req.params.id);
        if (!authorId) {
            return res.status(400).send({ message: "Invalid author id" });
        }
        try {
            const result = await getAuthorById(authorId);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req, res, next) {
        const authorId = parseInt(req.params.id);
        if (!authorId) {
            return res.status(400).send({ message: "Invalid author id" });
        }
        const body = req.body;
        try {
            const result = await updateAuthor(authorId, body);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        const authorId = parseInt(req.params.id);
        if (!authorId) {
            return res.status(400).send({ message: "Invalid author id" });
        }
        try {
            const result = await deleteAuthorById(authorId);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }
}
