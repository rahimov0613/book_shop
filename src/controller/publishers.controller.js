import { createPublisher, deleteOnePublisher, getAllPublisher, getOnePublisher, updatePublisher } from "../servies/index.js";


export const publisherController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createPublisher(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllPublisher();
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        try {
            const publisherId = parseInt(req.params.id);
            if (!publisherId) {
                return res.status(400).send({ message: "Invalid publisher id" });
            }
            const result = await getOnePublisher(publisherId);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req, res, next) {
        try {
            const publisherId = parseInt(req.params.id);
            if (!publisherId) {
                return res.status(400).send({ message: "Invalid publisher id" });
            }
            const body = req.body;
            const result = await updatePublisher(publisherId, body);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        try {
            const publisherId = parseInt(req.params.id);
            if (!publisherId) {
                return res.status(400).send({ message: "Invalid publisher id" });
            }
            const result = await deleteOnePublisher(publisherId);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }
}