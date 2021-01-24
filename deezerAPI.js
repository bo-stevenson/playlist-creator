/* eslint-disable prefer-const */

let song = "";
let icon = $("albumIcon");
let songTitle = $("#songTitle");
let albumName = $("#albumName");
let artist = $("#artistName");
let songSearch = $("#songSearch");

function displaySong(event) {
  event.preventDefault();
  if (songSearch.val().trim() !== "") {
    song = songSearch.val().trim();
    searchSong(song);
  }
}

function searchSong(song) {
  let queryURL = "https://api.deezer.com/search?q=" + song;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then((response) => {
    console.log("API call made");
    console.log(response);
    $(songTitle).html(response.data.title);
    $(artist).html(response.data.artist.name);
    $(albumName).html(response.data.album.title);
    $(icon).html(response.data.album.cover_medium);
  });
}

$("songSearchBtn").on("click", displaySong);
