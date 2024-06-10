"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;

// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return numConnection;
};

// check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnection = countConnect();
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections based on CPU cores
    const maxConnection = numCores * 5;

    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    console.log(`Active connections: ${numConnection}`);

    if (numConnection > maxConnection) {
      console.log("Connection overload detected!");
    }
  }, _SECONDS); // Monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverload,
};
