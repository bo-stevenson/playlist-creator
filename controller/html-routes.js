const db = require("../models");
const router = require("express").Router();

router.post("/playlist", async (req, res) => {
  res.json(await db.Playlist.create(req.body));
});

router.post("/Song", async (req, res) => {
  res.json(await db.Song.create(req.body));
});

router.post("/associateSongPlaylist", async (req, res) => {
  // if add songs is undefined need to retrieve playlist by id, put id into variable
  // then retrieve3 song by id, store in variable
  // then call addSongs on the object retrieved
  res.json(await req.body.playlist.addSongs([req.body.song]));
});

router.get("/", async (req, res) => {
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
