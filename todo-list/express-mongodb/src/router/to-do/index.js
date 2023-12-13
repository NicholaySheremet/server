import { Router } from "express";
import dao from "../../database";

const { Meetups, ToDo } = dao.models;

const toDoRouter = Router();

toDoRouter.get("/", async (req, res) => {
  const meetups = await Meetups.find();
  console.log(meetups);
  
  res.send("Get list of to-do");
});

toDoRouter.get("/delete", (req, res) => {
  res.send("Delete to-do from list");
});

toDoRouter.get("/update", (req, res) => {
  res.send("Update to-do in list");
});

export default toDoRouter;
