require("dotenv").config;
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

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init db
require("./dbs/init.mongodb.js");
const { checkOverload } = require("./helpers/check.connect.js");
checkOverload();

// init routes
app.use("", require("./routes"));

// handling errors

module.exports = app;
