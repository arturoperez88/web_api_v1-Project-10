
$('.spotify').click(function (){
  if ($('button').hasClass('selected') === true) {
    $('button').removeClass('selected');
    $('.Photo-gallery').hide();
     $('.spotify').html('"Click to SHOW" Jay-Z Fetured Songs & Albums');
  }else{
  $('button').addClass('selected');
   $('.Photo-gallery').show();
   $('.spotify').html('"Click To HIDE" Jay-Z Fetured Songs & Albums');
}
    $(".background-msg").remove();
    var spotifyApi = "https://api.spotify.com/v1/search?q=jay%20Z&type=track"
    function displayAlbums(object){
      var trackHTML = '<ul class="photo-area">';
      $.each(object.tracks.items, function(i, track){
        trackHTML += '<li class="photos">';
        trackHTML += '<a href="' +track.album.images[0].url +'" data-lightbox="image" data-title="';
        trackHTML += 'Song Name: ' + track.name + '</br>';
        trackHTML += 'Artist Names: ' + track.artists.map(a => a.name) + '</br>';
        trackHTML += 'Album Name: ' + track.album.name + '</br>';
        trackHTML += '">';
        trackHTML += '<img src="' + track.album.images[0].url  + '"></a></li>';        
      });
        trackHTML += '</ul>';
      $('.Photo-gallery').html(trackHTML);
    }
  $.getJSON(spotifyApi,function(data){
    console.log(data);
  }
  
    );
 $.getJSON(spotifyApi,displayAlbums);
});

 

