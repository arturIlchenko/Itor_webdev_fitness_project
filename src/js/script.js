const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 1,
	autoplay: true,
	autoplayButton: false,
	autoplayButtonOutput: false,
	controls: false,
	nav: true,
	navPosition: 'bottom',
	speed: 1500,
	responsive: {
		991: {
			autoplay: false,
			nav: false
		}
	}
});

document.querySelector('.carousel__btn_prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.carousel__btn_next').addEventListener('click', function () {
	slider.goTo('next');
});

$(document).ready(function () {
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('section.catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	function togglesSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		})
	};
	togglesSlide('.catalog-item__link');
	togglesSlide('.catalog-item__back');

	//модальные окна
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function(){
		$('.overlay').fadeOut('slow');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	})
})