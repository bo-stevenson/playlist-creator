const express = require("express");
const router = express.Router();
const playlist = require("../models/playlists.js");

router.get("/", (req, res) => {
  playlist.all(data => {
    const playlistObject = {
      playlist: data
    };
    console.log(playlistObject);
    res.render("index", playlistObject);
  });
});

module.exports = router;
