import { createOrder, getAllOrder, updateOrder, deleteOneOrder, getOneOrder } from '../servies/index.js';

export const ordersController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createOrder(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllOrder();
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
            const result = await getOneOrder(orderId);
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
            const result = await updateOrder(orderId, body);
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
            const result = await deleteOneOrder(orderId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    }
}