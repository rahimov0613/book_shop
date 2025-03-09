import { Router } from "express";
import { orderItemController } from "../controller/index.js";

export const orderItemRouter = Router();

//create
orderItemRouter.post("/",orderItemController.create),

    // get all
    orderItemRouter.get("/", orderItemController.getAll),

    // get one
    orderItemRouter.get("/:id", orderItemController.getById),

    // update
    orderItemRouter.put("/:id", orderItemController.update),

    // delete
    orderItemRouter.delete("/:id", orderItemController.delete);
