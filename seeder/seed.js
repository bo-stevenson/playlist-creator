const db = require("../models");
(async () => {
  await db.sequelize.sync({ force: true });

  // seeding the database
  const song = [
    {
      artist: "Eminem",
      song_name: "lose yourself",
      album_cover: "image",
      album_name: "album name",
      songURL: "song url"
    },
    {
      artist: "Em",
      song_name: "lose yourself",
      album_cover: "image",
      album_name: "album name",
      songURL: "song url"
    },
    {
      artist: "EminemTHREE",
      song_name: "lose yourself",
      album_cover: "image",
      album_name: "album name",
      songURL: "song url"
    },
    {
      artist: "EminemFOUR",
      song_name: "lose yourself",
      album_cover: "image",
      album_name: "album name",
      songURL: "song url"
    }
  ];
  await db.Song.bulkCreate(song);

  const playlist = [
    {
      plName: "Playlist 1"
    },
    {
      plName: "Playlist 2"
    },
    {
      plName: "Playlist 3"
    }
  ];
  await db.Playlist.bulkCreate(playlist);

  const pList1 = await db.Playlist.findOne({
    where: {
      id: 1
    }
  });

  // finding a token (instance)
  const song1 = await db.Song.findOne({
    where: {
      id: 1
    }
  });
  const song2 = await db.Song.findOne({
    where: {
      id: 2
    }
  });

  // adding the association
  await pList1.addSongs(song1, song2);

  console.log("Data seeded successfully!");
  process.exit(0);
})();
