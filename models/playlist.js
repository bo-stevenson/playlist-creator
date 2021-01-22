/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const Playlist = sequelize.define(
    "playlist",
    {
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
      }
    },
    { freezeTableName: true }
  );

  return Playlist;
};
