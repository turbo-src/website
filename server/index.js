const express = require("express");

const port = process.env.PORT || 3000;

const app = require("./app");

app.listen(port, () => {
  console.log(`Turbo-Src website listening on port ${port}`);
});
