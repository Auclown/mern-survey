const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ connected: "true" });
});

module.exports = app;
