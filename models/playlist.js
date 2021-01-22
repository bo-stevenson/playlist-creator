/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const CreatedPlaylist = sequelize.define(
    "playlists",
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

  return CreatedPlaylist;
};

module.exports = function(sequelize, DataType) {
  const Playlist = sequelize.define(
    "playlists",
    {
      party: {
        type: DataType.STRING,
        allowNull: false
      },
      workout: {
        type: DataType.STRING,
        allowNull: false
      },
      chill: {
        type: DataType.STRING,
        allowNull: false
      },
      video_game: {
        type: DataType.STRING,
        allowNull: false
      },
      cleaning: {
        type: DataType.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  return Playlist;
};

module.exports = function(sequelize, DataType) {
  const Song = sequelize.define(
    "Songs",
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
  return Song;
};

module.exports = function(sequelize, DataType) {
  const PlaylistSongs = sequelize.define(
    "playlist songs",
    {
      PlaylistId: {
        type: DataType.INTEGER,
        references: {
          model: Playlist,
          key: "id"
        }
      },
      SongId: {
        type: DataType.INTEGER,
        references: {
          model: Song,
          key: "id"
        }
      }
    },
    { freezeTableName: true }
  );
  return PlaylistSongs;
};

Playlist.belongsToMany(Song, { through: PlaylistSongs });
Song.belongsToMany(Playlist, { through: PlaylistSongs });
