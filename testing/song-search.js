var allSongs;
$(document).ready(function(){
  $.getJSON('songs.json', function(data) {
    allSongs = data;
    displaySongs(allSongs);
  });
  var searchInput = $('#search-input').val();
  $('#search-button').click(function(){
    searchSongs(searchInput);
  });
});

  var searchInput;
  function searchSongs(searchInput){
    // code to filter and search the songs
    var searchResults = allSongs.filter(function(song) {
      return song.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    });
    console.log(searchResults);
    displaySongs(searchResults);
  }
  
  function displaySongs(songs){
    console.log(songs);
    // code to display songs in a well-formatted manner
    var resultsContainer = $('#results');
    resultsContainer.empty();
    if(songs.length > 0){
      songs.forEach(function(song){
        var songDiv = $('<div>').addClass('song-result');
        var songTitle = $('<h2>').text(song.title);
        var songArtist = $('<p>').text(song.artist);
        var songAlbum = $('<p>').text(song.album);
        var songCover = $('<img>').attr('src',song.album_cover_url);
        var songDate = $('<p>').text(song.release_date);

        songDiv.append(songTitle);
        songDiv.append(songArtist);
        songDiv.append(songAlbum);
        songDiv.append(songCover);
        songDiv.append(songDate);
        resultsContainer.append(songDiv);
    });
  }else{
    resultsContainer.append("<p>No Results Found</p>");
  }
}