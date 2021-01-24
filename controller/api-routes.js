const db = require("../models");

module.exports = function(app) {
  app.post("/api/Playlist", async (req, res) => {
    res.json(await db.Playlist.create(req.body));
  });

  app.get("/api/Playlist/:id", async (req, res) => {
    res.json(await db.Song.findAll({ where: { id: req.params.id } }));
  });

  app.get("/api/Playlist", async (req, res) => {
    res.json(await db.Playlist.findAll());
  });

  app.delete("/api/Playlist/:id", async (req, res) => {
    res.json(await db.Playlist.destroy({ where: { id: req.params.id } }));
  });
};
