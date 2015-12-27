$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.collapsible').collapsible();
  $('.scrollspy').scrollSpy();
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
  $('.slider').slider({
    full_width: false,
    interval:10000
  });




  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter:0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );


$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none"); 
});

});


