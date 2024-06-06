const express = require("express");
const app = express();

app.post("/users", (req, res) => {
  res.status(200).send({ userId: 1 });
});

module.exports = app;
