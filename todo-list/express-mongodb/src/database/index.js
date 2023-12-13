import mongoose from "mongoose";
import { mongoConnectionString } from "../settings";

import withToDoModel from "./models/to-do.model";
import withMeetupsModel from "./models/meetups.model";

const dao = {
  connect() {
    if (this.db) {
      return Promise.resolve(dao);
    }

    mongoose.connect(mongoConnectionString);

    this.db = mongoose.connection;

    return new Promise((resolve, reject) => {
      this.db.once("error", reject);
      this.db.once("open", resolve);
    });
  },
  mongoose,
  models: {},
  sync() {
    return dao.connect();
  },
};

withToDoModel(dao);
withMeetupsModel(dao);

export default dao;
