"use strict";

const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb.js");

// init connection string mongodb
const connectString = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require("../helpers/check.connect.js");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    // set debug
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    // connect
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then(() => {
        console.log("Connected Mongodb Successfully", countConnect());
      })
      .catch((err) => {
        console.log("Connect fail", err);
      });
  }

  // get instance mongodb
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
