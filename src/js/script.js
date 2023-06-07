$(document).ready(function () {
	$('.carousel__inner').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		adaptiveHeight: false,
		autoplay: false,
		autoplaySpeed: 1000,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/arrow_prev.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/arrow_next.png"></button>'
	});
});