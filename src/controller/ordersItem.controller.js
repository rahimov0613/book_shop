import { createOrderItem, deleteOneOrderItem, getAllOrderItem, getOneOrderItem, updateOrderItem } from "../servies/index.js";


export const orderItemController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createOrderItem(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllOrderItem();
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        try {
            const orderItemId = parseInt(req.params.id);
            if (!orderItemId) {
                return res.status(400).send({ message: "Invalid order item id" });
            }
            const result = await getOneOrderItem(orderItemId
            );
            res.status(200).send(result);
        } catch (error) {
            next(error);

        }
    },
    //update
    async update(req, res, next) {
        try {
            const orderItemId = parseInt(req.params.id);
            if (!orderItemId) {
                return res.status(400).send({ message: "Invalid order item id" });
            }
            const body = req.body;
            const result = await updateOrderItem(orderItemId, body);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        try {

            const orderItemId = parseInt(req.params.id);
            if (!orderItemId) {
                return res.status(400).send({ message: "Invalid order item id" });
            }
            const result = await deleteOneOrderItem(orderItemId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    }
}