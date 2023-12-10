import { Router } from "express";

const toDoRouter = Router();

toDoRouter.get("/", (req, res) => {
  res.send("Get list of to-do");
});

toDoRouter.get("/delete", (req, res) => {
  res.send("Delete to-do from list");
});

toDoRouter.get("/update", (req, res) => {
  res.send("Update to-do in list");
});

export default toDoRouter;
