const app = require("./src/app");

const port = 3055

const server = app.listen(port, () => {
  console.log(`WSV E-Commerce start with ${port}`);
})

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server Express`))
  // notify
})
