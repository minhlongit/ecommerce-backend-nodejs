const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// init middleware
// show log requests
app.use(morgan("dev"));

// protect from some well-known web vulnerabilities
app.use(helmet());

// optimize request performance
app.use(compression());

// init db
require("./dbs/init.mongodb.js");
const { checkOverload } = require("./helpers/check.connect.js");
checkOverload();

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello Compression";
  return res.status(200).json({
    message: "Welcome to E-Commerce API",
    metadata: strCompress.repeat(10000),
  });
});
// handling errors

module.exports = app;
