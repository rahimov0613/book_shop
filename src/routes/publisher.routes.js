import { Router } from "express";
import { publisherController } from "../controller/index.js";


export const publisherRouter = Router();

// create
publisherRouter.post("/", publisherController.create),

    // get all
    publisherRouter.get("/", publisherController.getAll),

    // get one
    publisherRouter.get("/:id", publisherController.getById),

    // update
    publisherRouter.put("/:id", publisherController.update),

    // delete
    publisherRouter.delete("/:id", publisherController.delete);
