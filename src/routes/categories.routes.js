import { Router } from "express";
import { categoryController } from "../controller/index.js";

export const categoryRouter = Router();

// create
categoryRouter.post("/", categoryController.create),

    // get all
    categoryRouter.get("/", categoryController.getAll),

    // get one
    categoryRouter.get("/:id", categoryController.getById),

    // update
    categoryRouter.put("/:id", categoryController.update),

    // delete
    categoryRouter.delete("/:id", categoryController.delete);
