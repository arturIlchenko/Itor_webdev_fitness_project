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
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});

	validateForms('#consultation .form');
	validateForms('#order .form');
	validateForms('.consultation__form');

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите Ваше имя",
				phone: "Пожалуйста, введите Ваш номер телефона",
				email: {
					required: "Нам нужен Ваш e-mail для связи",
					email: "Введите e-mail в формате name@domain.ru"
				}
			}
		});
	};

	$("input[name=phone]").mask("+7(999) 999-9999");

	$('form').submit(function (e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return
		};
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
		});
	});
	// скролинг и pageup
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a").on('click', function (event) {

		// Убедитесь, что это. Hash имеет значение перед переоценкой поведения по умолчанию
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			const hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	new WOW().init();
})