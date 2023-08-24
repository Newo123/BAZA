document.addEventListener('DOMContentLoaded', () => {
	const slider1 = new Swiper('.videos .swiper', {
		loop: true,
		spaceBetween: 300,
		navigation: {
			nextEl: '.videos .swiper-button-next',
			prevEl: '.videos .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	})

	const slider2 = new Swiper('.jazz__head .swiper', {})
	const slider3 = new Swiper('.jazz__img .swiper', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 800,
	})
	const slider4 = new Swiper('.jazz__bottom .swiper', {
		navigation: {
			nextEl: '.jazz__navigation .swiper-button-next',
			prevEl: '.jazz__navigation .swiper-button-prev',
		},
	})

	const swipeAllSliders = index => {
		slider2.slideTo(index)
		slider3.slideTo(index)
		slider4.slideTo(index)
	}

	slider2.on('slideChange', () => swipeAllSliders(slider2.activeIndex))
	slider3.on('slideChange', () => swipeAllSliders(slider3.activeIndex))
	slider4.on('slideChange', () => swipeAllSliders(slider4.activeIndex))
})
