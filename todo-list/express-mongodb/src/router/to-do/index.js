import { Router } from "express";
import dao from "../../database";

const { ToDo } = dao.models;

const toDoRouter = Router();

toDoRouter.post("/", async (req, res) => {
  try {
    const {
      data: {
        label = `Autocreated label ${Date.now()}`,
        finished = false,
      } = {},
    } = req.body;
    const createdToDo = await ToDo.create({ label, finished });
    res.json({ success: 1, data: createdToDo });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.get("/", async (req, res) => {
  try {
    const toDoes = await ToDo.find();
    res.json({ success: 1, data: toDoes });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    res.json({ success: 1, data: toDo });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      data: {
        label = `Autocreated label ${Date.now()}`,
        finished = false,
      } = {},
    } = req.body;
    const updatedToDo = await ToDo.findByIdAndUpdate(
      id,
      { label, finished },
      { lean: true, new: true }
    );
    res.json({ success: 1, data: updatedToDo });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedToDo = await ToDo.findById(id).deleteOne();
    res.json({ success: 1, data: deletedToDo });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

export default toDoRouter;
