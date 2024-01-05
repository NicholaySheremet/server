import * as Promise from "bluebird";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dao from "./database";
import appRouter from "./router";
import { serverPort } from "./settings";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", appRouter);

Promise.all([dao.connect()]).then(() => {
  app.listen(serverPort, () =>
    console.log(`App started on port:${serverPort}`)
  );
});
