import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory, } from "../servies/index.js";


export const categoryController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createCategory(body);

            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllCategory();
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).send({ message: "Invalid order id" });
            }
            const result = await getCategoryById(orderId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req, res, next) {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).send({ message: "Invalid order id" });
            }
            const body = req.body;
            const result = await updateCategory(orderId, body);
            res.status(200).send(result);


        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        try {
            const orderId = parseInt(req.params.id);
            if (!orderId) {
                return res.status(400).send({ message: "Invalid order id" });
            }
            const result = await deleteCategory(orderId);
            res.status(200).send(result);


        } catch (error) {
            next(error);
        }
    }
}
