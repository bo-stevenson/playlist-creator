/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const Playlist = sequelize.define("Playlist", {
    plName: {
      type: DataType.STRING(70),
      allowNull: false
    }
  });
  Playlist.associate = function(models) {
    Playlist.belongsToMany(models.Song, { through: "SongPlaylist" });
  };
  return Playlist;
};
