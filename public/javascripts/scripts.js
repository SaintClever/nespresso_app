// NAVBAR

(function ($) {
	$(document).ready(function(){

		$(".navbar").show();

			$(function () {
				$(window).scroll(function () {
				if ($(this).scrollTop() > 500) {
					$('.navbar').fadeOut();
				} else {
					$('.navbar').fadeIn();
				}
			});
		});
	});
}(jQuery));


// CAROUSEL

$('.carousel').carousel({
	interval: 3000
});


// WOW.JS

new WOW().init();