import { Router } from "express";
import { bookAuthcorsCOntroller } from "../controller/index.js";

export const bookAuthorsRouter = Router();

//create
bookAuthorsRouter.post('/',bookAuthcorsCOntroller.create);

//get all
bookAuthorsRouter.get('/', bookAuthcorsCOntroller.getAll);

//get one
bookAuthorsRouter.get('/:id', bookAuthcorsCOntroller.getById);

//update
bookAuthorsRouter.put('/:id', bookAuthcorsCOntroller.update);

//delete
bookAuthorsRouter.delete('/:id', bookAuthcorsCOntroller.delete);
