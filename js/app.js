
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
        photoHTML += '<a href="' + photo.link + '" data-lightbox="image" data-title="'+'" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      
      $('.Photo-gallery').html(photoHTML);
      console.log(data);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); 


$('.spotify').click(function (){
  $('button').removeClass('selected');
  $(this).addClass('selected');
    $(".background-msg").remove();
    var spotifyApi = "https://api.spotify.com/v1/search?q=Jay%20Z&type=album"
    function displayAlbums(object){
      var albumHTML = '<ul class="photo-area">';
      $.each(object.albums.items, function(i, album){
        albumHTML += '<li class="photos">';
        albumHTML += '<a href="' +album.images[0].url +'" data-lightbox="image" data-title="'+'" class="image">';
        albumHTML += '<img src="' + album.images[0].url  + '"></a></li>';        
      });
        albumHTML += '</ul>';
      $('.Photo-gallery').html(albumHTML);
    }
  $.getJSON(spotifyApi,function(data){
    console.log(data);
  }
  
    );
 $.getJSON(spotifyApi,displayAlbums);
});


