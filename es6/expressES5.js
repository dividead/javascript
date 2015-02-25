"use strict";

var app = require("express")();
app.get("/", function (req, res) {
  return res.send("harmony");
});
app.listen(3000, function () {
  return console.log("working on :3000");
});
