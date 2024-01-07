import { Router } from "express";
import dao from "../../database";
import { timeoutPromise } from "../../tools/timeoutPromise";

const { ToDo } = dao.models;

const toDoRouter = Router();

toDoRouter.post("/", async (req, res) => {
  console.log("POST To-Do");
  await timeoutPromise(1);
  try {
    const {
      data: {
        label = `Autocreated label ${Date.now()}`,
        finished = false,
      } = {},
    } = req.body;
    console.log("POSTED DATA", req.body);
    console.log("POSTED label & finished", label, finished);
    const createdToDo = await ToDo.create({ label, finished });
    res.json({ success: 1, data: createdToDo });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.get("/", async (req, res) => {
  console.log("GET To-Do");
  await timeoutPromise(3);
  try {
    const toDoes = await ToDo.find();
    res.json({ success: 1, data: toDoes });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

toDoRouter.get("/:id", async (req, res) => {
  console.log("GET To-Do by ID", req.params?.id);
  await timeoutPromise(3);
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
  console.log("UPDATE To-Do by ID", req.params?.id);
  await timeoutPromise(1);
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
  await timeoutPromise(2);
  console.log("DELETE To-Do by ID", req.params?.id);
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
