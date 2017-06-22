$(document).ready(function() {
	console.log(":)");
    $('.client-work-slides, .personal-work-slides').slick({
    	autoplay: true,
    	fade: true,
    	autoplaySpeed: 8000,
 		swipe: true,
 		touchMove: true,
 		adaptiveHeight: true
    });
});
