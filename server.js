require("dotenv").config();
//{path: __dirname + "/.env"}
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4269;
const db = require("./models/");
const path = require("path");
const apiRoutes = require("./controllers/api-routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRoutes);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });