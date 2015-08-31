// Place your application-specific JavaScript functions and classes here
var slideShowSpeed = 5000;
var slideShowTimer = false;

$(document).ready(function() {    
  
  //Execute the slideShow, set 4 seconds for each images
  setUpSlideShow();

});

function setUpSlideShow() {


  //Set the opacity of all images to 0
  $('ul.slideshow li').css({opacity: 0.0});
  
  //Get the first image and display it (set it to full opacity)
  $('ul.slideshow li:first').css({opacity: 1.0});
  
  //Call the gallery function to run the slideshow  
  startSlideShow();
  
  //Show slide show controls
  $('#slideshow_controls').show();
}

function stopSlideShow() {
  $('#stopShow').hide();
  clearInterval(slideShowTimer);
  $('#playShow').show();
}

function startSlideShow() {
  $('#playShow').hide();
  slideShowTimer = setInterval('gallery()', slideShowSpeed);
  $('#stopShow').show();
}

function gallery() {


  //if no IMGs have the show class, grab the first image
  var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));

  //Get next image, if it reached the end of the slideshow, rotate it back to the first image
  var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption')? $('ul.slideshow li:first') :current.next()) : $('ul.slideshow li:first'));
    
  //Set the fade in effect for the next image, show class has higher z-index
  next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
  
  //Hide the current image
  current.animate({opacity: 0.0}, 1000).removeClass('show');

}

function goToPhoto(photo_id) {

  //if no IMGs have the show class, grab the first image
  var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('#ul.slideshow li:first'));

  //Get next image, if it reached the end of the slideshow, rotate it back to the first image
  var next = $(photo_id);

  if (current.attr('id') == next.attr('id')) return;
    
  //Set the fade in effect for the next image, show class has higher z-index
  next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
  
  //Hide the current image
  current.animate({opacity: 0.0}, 1000).removeClass('show');

}
