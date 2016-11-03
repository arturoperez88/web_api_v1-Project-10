
 $('.flikr').click(function () {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    $(".background-msg").remove();
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul class="photo-area">';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="photos">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#Photo-gallery').html(photoHTML);
      console.log(data);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); 


$('.spotify').click(function (){
  $('button').removeClass('selected');
  $(this).addClass('selected');
    $(".background-msg").remove();
    var spotifyApi = "https://api.spotify.com/v1/search?q=jay-z&type=track"
    function displayAlbums(object){
      var albumHTML = '<ul class="photo-area">';
      each(object.tracks.items, function(i, album){
        photoHTML += '<li class="photos">';
        photoHTML += '<a href="' + /*idk what to do here*/ + '" class="image">';
        photoHTML += '<img src="' + /*idk what to do here*/ + '"></a></li>';        
      });
    }
  $.getJSON(spotifyApi,function(data) {
    console.log(data)
 
  })
});
