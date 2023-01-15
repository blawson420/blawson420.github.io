$(document).ready(function() {
    $.getJSON("songs.json", function(data) {
      allSongs = data;
    });
    
    var searchInput = document.getElementById("search-input").value;
    var searchButton = document.getElementById("search-button");
  
    searchButton.addEventListener("click", searchSongs);
  
    function searchSongs() {
      searchInput = document.getElementById("search-input").value;
      var filteredSongs = allSongs.filter(function(song) {
        return (
          song.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      var results = document.getElementById("results");
      results.innerHTML = "";
      if (filteredSongs.length === 0) {
        results.innerHTML = "No Results Found";
      } else {
        for (var i = 0; i < filteredSongs.length; i++) {
          results.innerHTML +=
            "<div class='song'>" +
            "<img src='" +
            filteredSongs[i].album_cover_url +
            "'/>" +
            "<h2>" +
            filteredSongs[i].title +
            "</h2>" +
            "<p>" +
            filteredSongs[i].artist +
            "</p>" +
            "<p>" +
            filteredSongs[i].album +
            "</p>" +
            "<p>" +
            filteredSongs[i].release_date +
            "</p>" +
            "</div>";
            }
            }
            }
            });
  