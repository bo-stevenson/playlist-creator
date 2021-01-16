const DataType = require("sequelize");
const sequelize = require("../config/connection.js");

const playlists = sequelize.define("playlist", {
  song: DataType.STRING,
  artist: DataType.STRING,
  duration: DataType.INTEGER
});

playlists.sync();

module.exports = playlists;
