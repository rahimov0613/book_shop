import { Router } from "express";
import { authorRouter } from "./author.routes.js";
import { bookRouter } from "./book.routes.js";
import { categoryRouter } from "./categories.routes.js";
import { bookAuthorsRouter } from "./bookAuthors.routes.js";
import { customerRouter } from "./customers.routes.js";
import { orderRouter } from "./orders.routes.js";
import { orderItemRouter } from "./ordersItem.routes.js";
import { publisherRouter } from "./publisher.routes.js";

export const apiRouter = Router();

apiRouter.use("/authors", authorRouter);
apiRouter.use("/books", bookRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use('/bookAuthor', bookAuthorsRouter);
apiRouter.use('/customers', customerRouter);
apiRouter.use('/order', orderRouter);
apiRouter.use('/orderItem', orderItemRouter);
apiRouter.use('/publisher', publisherRouter);