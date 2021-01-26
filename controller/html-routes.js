const db = require("../models");
const router = require("express").Router();

router.post("/playlist", async (req, res) => {
  res.json(await db.Playlist.create(req.body));
});

router.post("/Song", async (req, res) => {
  res.json(await db.Song.create(req.body));
});

router.post("/associateSongPlaylist", async (req, res) => {
  const playlistId = req.body.playlist.id;
  const songId = req.body.song.id;
  const playlist = await db.Playlist.findOne({
    where: {
      id: playlistId
    }
  });
  const song = await db.Song.findOne({
    where: {
      id: songId
    }
  });
  res.json(playlist.addSongs([song]));
});

router.get("/", async (req, res) => {
  const dpJson = [];
  const dataPlaylist = await db.Playlist.findAll();
  for (let i = 0; i < dataPlaylist.length; i++) {
    const playSong = {};
    const playlist = dataPlaylist[i];
    playSong.playlist = playlist;
    const songs = await playlist.getSongs();
    playSong.songs = songs;
    dpJson[i] = playSong;
  }
  const dataPlaylistJson = JSON.parse(JSON.stringify(dpJson));
  res.render("index", { playlist: dataPlaylistJson });
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
