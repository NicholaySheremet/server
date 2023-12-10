import { Router } from "express";
import toDoRouter from "./to-do";

const appRouter = Router();
appRouter.use("/to-do", toDoRouter);

export default appRouter;
