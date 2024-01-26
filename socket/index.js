const express = require("express");
const http = require("http");
const path = require("path");

const app = express(); // Create an Express application
const server = http.createServer(app); // Create an HTTP server using the Express app

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const filename = "index.html";
  res.sendFile(filename, options);
});

server.listen(8000, () => {
  console.log("app is running");
});
