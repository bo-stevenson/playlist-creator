/* eslint-disable prefer-const */
let song = "";
let icon = $("#albumIcon");
let songTitle = $("#songTitle");
let albumName = $("#albumName");
let artist = $("#artistName");
let songSearch = $("#songSearch");
function searchSong(song) {
  const queryURL =
    "https://cors-anywhere.herokuapp.com/" +
    "https://api.deezer.com/search/track?q=" +
    song;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then((response) => {
    if (response.data.length > 0) {
      $(searchedSongContainer).removeClass("displayNone");
      $(searchedSongContainer).addClass("container");
      $(searchedSongRow).html("");
      for (let i = 0; i < response.data.length; i++) {
        $(searchedSongRow).append(getSongDiv(response.data[i]));
      }
    }
  });
}
console.log("hello");
$("#songSearchBtn").on("click", (event) => {
  event.preventDefault();
  if (songSearch.val().trim() !== "") {
    song = songSearch.val().trim();
    console.log(song);
    searchSong(song);
  }
});

function getSongDiv(songMeta) {
  console.log(songMeta);
  const oc =
    "createSongAddToPlaylist('" +
    songMeta.artist.name +
    "','" +
    songMeta.title +
    "','" +
    songMeta.album.cover +
    "','" +
    songMeta.album.title +
    "','" +
    songMeta.preview +
    "')";
  return (
    `<div class="col-sm-3">
  <div class="userList">
    <img class="songImg"
      src="${songMeta.album.cover}"
      alt="Album Art Image">
    <p class="words">Title: <span>${songMeta.title}</span></p>
    <p class="words">Artist: <span>${songMeta.artist.name}</span></p>
    <button type="button" class="btn btn-success" onClick="` +
    oc +
    `">Play song</button>
    <button type="button" class="btn btn-success" onClick="` +
    oc +
    `">Add Song</button>
  </div>
</div>`
  );
}

function createSongAddToPlaylist(artist, songName, cover, title, preview) {
  const song = {};
  song.artist = artist;
  song.song_name = songName;
  song.album_cover = cover;
  song.album_name = title;
  song.songURL = preview;

  const queryURL = "/Song";

  $.ajax({
    url: queryURL,
    method: "POST",
    data: song
  }).then((response) => {
    // const songPlaylist = {};
    // songPlaylist.song = response.data?;
    // need to somehow select a specific playlist from user
    // const playlist = {};
    // playlist.id = 1;
    // songPlaylist.playlist = playlist;
    // const url = "/associateSongPlaylist";
    // now make ajax call
    // data is songPlaylist
    // url is url
    // method is POST
    console.log(response);
  });
}
