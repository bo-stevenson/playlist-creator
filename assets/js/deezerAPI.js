/* eslint-disable prefer-const */

let song = "";
let icon = $("#albumIcon");
let songTitle = $("#songTitle");
let albumName = $("#albumName");
let artist = $("#artistName");
let songSearch = $("#songSearch");

function searchSong(song) {
  let queryURL = "https://api.deezer.com/search?&jsoncallback=?&q=" + song;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    dataType: "jsonp",
    method: "GET",
    contentType: "application/json",
    crossDomain: true,
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }).then((response) => {
    console.log("API call made");
    console.log(response);
    $(songTitle).html(response.data[0].title);
    $(artist).html(response.data[0].artist.name);
    $(albumName).html(response.data[0].album.title);
    $(icon).html(response.data[0].album.cover_medium);
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
