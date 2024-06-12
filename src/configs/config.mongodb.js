"use strict";

const dev = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
  db: {
    name: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT,
  },
  db: {
    name: process.env.PRO_DB_NAME,
    host: process.env.PRO_DB_HOST,
    port: process.env.PRO_DB_PORT,
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || "dev";
module.exports = config[env];
