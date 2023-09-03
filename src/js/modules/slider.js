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

	if (document.querySelectorAll('.teachers .trank').length > 3) {
		new Swiper('.teachers .swiper', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 3,
			centredSlides: true,
			speed: 500,
			grabCursor: true,
			spaceBetween: 6,
			breakpoints: {
				768: {
					centredSlides: false,
					slidesPerView: 4,
					spaceBetween: 0,
				},
			},
		})
	} else {
		new Swiper('.teachers .swiper', {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 'auto',
			centredSlides: true,
			speed: 500,
			grabCursor: true,
			spaceBetween: 6,
			breakpoints: {
				768: {
					centredSlides: false,
					slidesPerView: 4,
					spaceBetween: 0,
				},
			},
		})
	}

	if (matchMedia('(max-width: 768px)').matches) {
		const slider6 = new Swiper('.teachers-styles-videos .swiper', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			speed: 500,
			grabCursor: true,

			navigation: {
				nextEl: '.teachers-styles-videos__navigation .swiper-button-next',
				prevEl: '.teachers-styles-videos__navigation .swiper-button-prev',
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
		})
	}

	document.querySelector('.teachers__info-title').innerText =
		document.querySelector('.teachers .swiper-slide-next').dataset.name

	document.querySelector('.teachers__info-description').innerText =
		document.querySelector('.teachers .swiper-slide-next').dataset.skill
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutationRecord) {
			document.querySelector('.teachers__info-title').innerText =
				document.querySelector('.teachers .swiper-slide-next').dataset.name
			document.querySelector('.teachers__info-description').innerText =
				document.querySelector('.teachers .swiper-slide-next').dataset.skill
		})
	})

	const target = document.querySelector('.teachers .swiper-wrapper')
	observer.observe(target, { attributes: true, attributeFilter: ['style'] })
})
