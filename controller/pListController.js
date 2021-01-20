const express = require("express");
const router = express.Router();
const playlist = require("../models/playlists.js");

router.get("/", (_req, res) => {
  playlist.all(data => {
    const playlistObject = {
      playlists: data
    };
    console.log(playlistObject);
    res.render("index", playlistObject);
  });
});

module.exports = router;
