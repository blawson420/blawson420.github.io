$.getJSON('songs.json', function(data) {
    var searchInput = $('#search-input').val();
    var searchResults = data.filter(function(song) {
      return song.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    });
    // code to display searchResults in a well-formatted manner
    var resultsContainer = $('#results');
    if(searchResults.length > 0){
        searchResults.forEach(function(song){
            var songDiv = $('<div>').addClass('song-result');
            var songTitle = $('<h2>').text(song.title);
            var songArtist = $('<p>').text(song.artist);
            var songAlbum = $('<p>').text(song.album);
            var songCover = $('<img>').attr('src', song.album_cover_url);
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

  });
  
  $(document).ready(function(){
    $('#search-button').click(function(){
      var searchInput = $('#search-input').val();
      // call the function for search the song
      searchSongs(searchInput);
    });
  });
  