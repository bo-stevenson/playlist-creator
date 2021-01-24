/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const Playlist = sequelize.define("Playlist", {
    name: {
      type: DataType.STRING(70),
      allowNull: false
    }
  });
  Playlist.associate = (models) => {
    Playlist.hasMany(models.Song, {
      onDelete: "cascade"
    });
  };
  return Playlist;
};
