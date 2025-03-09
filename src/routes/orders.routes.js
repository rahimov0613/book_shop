import { Router } from "express";
import { ordersController } from "../controller/index.js";

export const orderRouter = Router();

// create
orderRouter.post("/",ordersController.create),

    // get all
    orderRouter.get("/", ordersController.getAll),

    // get one
    orderRouter.get("/:id", ordersController.getById),

    // update
    orderRouter.put("/:id", ordersController.update),

    // delete
    orderRouter.delete("/:id", ordersController.delete);