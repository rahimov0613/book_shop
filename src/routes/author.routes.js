import { Router } from "express";
import { authorController } from "../controller/index.js";

export const authorRouter = Router();


//create 

authorRouter.post("/", authorController.create),
    //get all
    authorRouter.get("/", authorController.getAll),

    //get one
    authorRouter.get("/:id", authorController.getById),

    //update
    authorRouter.put("/:id", authorController.update),

    //delete
    authorRouter .delete("/:id", authorController.delete);


