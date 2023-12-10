import express from "express";
import appRouter from "./router";

const app = express();
const port = 3000;

app.use("/", appRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
