import { Router } from "express";
import { bookController } from "../controller/index.js";

export const bookRouter = Router();

//create
bookRouter.post("/",bookController.create),

//get all
bookRouter.get("/",bookController.getAll),

//get one
bookRouter.get("/:id",bookController.getById),

//update
bookRouter.put("/:id",bookController.update),

//delete
bookRouter.delete("/:id",bookController.delete);