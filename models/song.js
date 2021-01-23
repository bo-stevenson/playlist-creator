/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const Song = sequelize.define("Song", {
    artist: {
      type: DataType.STRING(70),
      allowNull: false,
      unique: false
    },
    song_name: {
      type: DataType.STRING(80),
      allowNull: false,
      unique: false
    },
    album_cover: {
      type: DataType.STRING(80),
      allowNull: false,
      unique: false
    },
    album_name: {
      type: DataType.STRING(80),
      allowNull: false,
      unique: false
    },
    songURL: {
      type: DataType.STRING(255),
      allowNull: false,
      unique: false
    }
  });
  Song.associate = function(models) {
    Song.belongsTo(models.Playlist);
  };
  return Song;
};
