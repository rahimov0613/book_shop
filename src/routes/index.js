import { Router } from "express";
import { authorRouter } from "./author.routes.js";
import { bookRouter } from "./book.routes.js";
import {categoryRouter} from "./categories.routes.js";

export const apiRouter = Router();

apiRouter.use("/authors", authorRouter);
apiRouter.use("/books", bookRouter);
apiRouter.use("/categories", categoryRouter);

