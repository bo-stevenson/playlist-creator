const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.playlist.all(data => {
    const playlistObject = {
      playlist: data
    };
    console.log(playlistObject);
    res.render("index", playlistObject);
  });
});

module.exports = router;
