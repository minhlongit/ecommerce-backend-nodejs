const app = require("./src/app");
const http = require("http");
const PORT = process.env.PORT || 3055;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`WSV E-Commerce start with ${PORT}`);
});

const connections = new Set();

server.on("connection", (connect) => {
  connections.add(connect);
  connect.on("close", () => connections.delete(connect));
});

process.on("SIGINT", () => {
  console.log("Closing server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });

  // Forcefully close any remaining connections after a timeout
  setTimeout(() => {
    connections.forEach((connect) => connect.destroy());
    process.exit(0);
  }, 10000); // Adjust the timeout as needed
});
