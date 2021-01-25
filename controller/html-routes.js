const db = require("../models");
const router = require("express").Router();

router.post("/playlist", async (req, res) => {
  res.json(await db.Playlist.create(req.body));
});

router.get("/", async (req, res) => {
  console.log(await db.Playlist.findAll());
  const dataPlaylist = JSON.parse(JSON.stringify(await db.Playlist.findAll()));
  console.log(dataPlaylist);
  res.render("index", { playlist: dataPlaylist });
});

router.get("/playlist/:id", async (req, res) => {
  const foundSong = JSON.parse(JSON.stringify(await db.Playlist.findAll()));
  foundSong.getSongs(Song);
  // save into variable await find the playlist id requested
  // parse and stringify requested data
  // sequelize savedVariable.getSongs()
  // pass to res.render
  res.render("playlist", { playlist: foundSong });
});

router.delete("/playlist/:id", async (req, res) => {
  res.json(await db.Playlist.destroy({ where: { id: req.params.id } }));
});

module.exports = router;
