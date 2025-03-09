import { Router } from "express";
import { CustomerController } from "../controller/index.js";

export const customerRouter = Router();

// create
customerRouter.post("/",CustomerController.create),
    // get all
    customerRouter.get("/", CustomerController.getAll),

    // get one
    customerRouter.get("/:id", CustomerController.getById),

    // update
    customerRouter.put("/:id", CustomerController.update),

    // delete

    customerRouter.delete("/:id", CustomerController.delete);