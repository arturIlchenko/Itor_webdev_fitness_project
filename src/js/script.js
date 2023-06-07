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