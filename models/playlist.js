/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const Playlist = sequelize.define("Playlist", {
    plName: {
      type: DataType.STRING(70),
      allowNull: false
    }
  });
  Playlist.associate = function(models) {
    Playlist.hasMany(models.Song);
  };
  return Playlist;
};
