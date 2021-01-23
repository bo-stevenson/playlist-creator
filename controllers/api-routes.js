const db = require("./models");
module.exports = function(app) {
  app.get("/api/User", async (req, res) => {
    res.json(await db.User.findOne({ where: "" }));
  });
};
