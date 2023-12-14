import { Router } from "express";
import dao from "../../database";

const { ToDo } = dao.models;

const toDoRouter = Router();

toDoRouter.get("/create", async (req, res) => {
  const { data } = req.body;
  const testToDo = {
    label: `Test ToDo ${Date.now()}`,
    finished: false,
  };
  const toDo = await ToDo.create(testToDo);
  res.json({ success: 1, data: toDo})
});

toDoRouter.get("/", async (req, res) => {
  const toDoes = await ToDo.find();
  res.json({ success: 1, data: toDoes})
});

toDoRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const toDo = await ToDo.findById(id);
  res.json({ success: 1, data: toDo})
});

toDoRouter.get("/:id/update", (req, res) => {
  const { id } = req.params;
  res.send("Update to-do in list");
});

toDoRouter.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  res.send("Delete to-do from list");
});

export default toDoRouter;
