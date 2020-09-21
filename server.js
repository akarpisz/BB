const express = require("express");
const app = express();
const PORT = process.env.PORT || 4269;
const db = require("./models/");





db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });