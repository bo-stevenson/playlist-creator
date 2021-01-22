/* eslint-disable camelcase */
const DataType = require("sequelize");
const sequelize = require("../config/connection.js");

const playlists = sequelize.define("playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});
const party = sequelize.define("party playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});
const workout = sequelize.define("workout playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});
const chill = sequelize.define("chill playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});
const videoGames = sequelize.define("Video Game playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});
const cleaning = sequelize.define("cleaning playlist", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  artist: {
    type: DataType.STRING,
    allowNull: false
  },
  song_name: {
    type: DataType.STRING,
    allowNull: false
  },
  song_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  album_cover: {
    type: DataType.STRING,
    allowNull: false
  },
  freezeTableName: true
});

playlists.sync();
party.sync();
workout.sync();
chill.sync();
videoGames.sync();
cleaning.sync();

module.exports = playlists;
module.exports = party;
module.exports = workout;
module.exports = chill;
module.exports = videoGames;
module.exports = cleaning;
