$(function() {
   $('.scroll-down').click (function() {

     $('#demarche').show();
     $('html, body').animate({scrollTop: $('div#demarche').offset().top }, 'slow');
     $(window).trigger('resize.px.parallax');
     return false;
   });
 });
