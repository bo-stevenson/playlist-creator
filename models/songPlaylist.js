/* eslint-disable camelcase */
const Song = require("../models/song");
const Playlist = require("../models/playlist");
Song.belongsToMany(Playlist, { through: "Song_Playlist" });
Playlist.belongsToMany(Song, { through: "Song_Playlist" });
