const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

const PORT = process.env.PORT || 8080;

app.use("/public", express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main", extname: ".handlebars" }));
app.set("view engine", "handlebars");

const api = require("./controller/api-routes.js");
app.use("/api", api);

const html = require("./controller/html-routes.js");
app.use("/", html);

const db = require("./models");
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
