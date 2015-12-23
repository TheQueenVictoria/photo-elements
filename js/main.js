"use strict";

$(document).ready(function() {
   // top nav smooth scroll to section
    $('.page-scroll').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 1000);
     });

    $('.parallax-window').parallax({imageSrc: 'img/web/photo-1446771326090-d910bfaf00f6_web.jpg'});

});