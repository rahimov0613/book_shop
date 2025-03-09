import { createCustomer, deleteOneCustomer, getAllCustomers, getOneCustomer, updateCustomer } from "../servies/index.js";


export const CustomerController = {
    //create
    async create(req, res, next) {
        try {
            const body = req.body;
            const result = await createCustomer(body);
            res.status(201).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req, res, next) {
        try {
            const result = await getAllCustomers();
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //get one
    async getById(req, res, next) {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).send({ message: "Invalid customer id" });
            }
            const result = await getOneCustomer(customerId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req, res, next) {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).send({ message: "Invalid customer id" });
            }
            const body = req.body;
            const result = await updateCustomer(customerId, body);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    },
    // delete
    async delete(req, res, next) {
        try {
            const customerId = parseInt(req.params.id);
            if (!customerId) {
                return res.status(400).send({ message: "Invalid customer id" });
            }
            const result = await deleteOneCustomer(customerId);
            res.status(200).send(result);

        } catch (error) {
            next(error);
        }
    }
}