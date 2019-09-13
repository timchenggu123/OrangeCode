const express = require("express");
const app = express();

//Port setting, use export PORT=""
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
