require("dotenv").config({path: __dirname + "/.env"});
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4269;
const db = require("./models/");
<<<<<<< HEAD
//const path = require("path");
const cors = require("cors");

app.use(cors());
=======
const path = require("path");
const apiRoutes = require("./controllers/api-routes");

app.use("/api", apiRoutes);
>>>>>>> a994f53de9d559449e21cae5e5efe620b07bde66


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });