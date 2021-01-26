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
      // $(artist).html(response.data[0].artist.name);
      // $(albumName).html(response.data[0].album.title);
      // $(icon).html(response.data[0].album.cover_medium);
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
  return `<div class="col-sm-3">
  <div class="userList">
    <img class="songImg"
      src=""
      alt="Album Art Image">
    <p class="words">Title: <span>${songMeta.title}</span></p>
    <p class="words">Artist: <span></span></p>
    <button type="button" class="btn btn-success" onClick="">Play song</button>
    <button type="button" class="btn btn-success" onClick="">Add Song</button>
  </div>
</div>`;
}
