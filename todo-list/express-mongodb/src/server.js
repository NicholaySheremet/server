import express from "express";
import appRouter from "./router";
import * as Promise from "bluebird";
import dao from "./database";
import { serverPort } from "./settings";

const app = express();

app.use("/", appRouter);

/*
app.listen(port, async () => {
  await dao.connect();
  console.log('dao', dao);

  console.log(`App listening on port ${port}`);
});*/

Promise.all([dao.connect()]).then(() => {
  app.listen(serverPort, () =>
    console.log(`App started on port:${serverPort}`)
  );
});
