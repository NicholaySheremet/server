import { Router } from "express";
import toDoRouter from "./to-do";
import rootRouter from "./root";

const appRouter = Router();
appRouter.use("/", rootRouter);
appRouter.use("/to-do", toDoRouter);

export default appRouter;
