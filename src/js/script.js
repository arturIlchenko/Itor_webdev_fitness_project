$(document).ready(function () {
	$('.carousel__inner').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/arrow_prev.png"></img></button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/arrow_next.png"></img></button>'
	});
});