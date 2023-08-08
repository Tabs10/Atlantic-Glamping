// Import necessary packages
const express = require("express");
// const session = require("express-session");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./controllers");

// Initialize Express.js App
const app = express();

// Import sequelize connection
const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// added routes through connections
app.use(routes);

// Setup for EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT),
    () => {
      console.log("SERVER LISTENING ON PORT: ${PORT}.... ");
    };
});

//ToDo - Set up session with sequelize store *for the README - https://www.npmjs.com/package/connect-session-sequelize
//ToDo - Set up Express.js middleware *for the README - https://expressjs.com/en/resources/middleware/session.html
