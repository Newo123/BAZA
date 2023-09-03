document.addEventListener('DOMContentLoaded', () => {
	const callback = document.querySelector('.callback')

	if (!callback) {
		return
	}

	const elTop =
		(callback.getBoundingClientRect().top + window.pageYOffset ||
			document.documentElement.scrollTop) - callback.offsetHeight
	const button = document.querySelector('.header__action')
	const tabs = document.querySelector('.hero-second__actions')
	const tabsPrice = document.querySelector('.hero-price__tabs')

	if (window.scrollY >= elTop) {
		button.removeAttribute('style')
	}

	window.addEventListener('scroll', () => {
		if (
			window.scrollY >= elTop &&
			window.matchMedia('(max-width: 900px)').matches
		) {
			button.style.transform = 'translateY(110%)'

			if (tabs) {
				tabs.classList.add('hide')
			}

			if (tabsPrice) {
				tabsPrice.classList.add('hide')
			}
		} else {
			button.removeAttribute('style')
			if (tabs) {
				tabs.classList.remove('hide')
			}
			if (tabsPrice) {
				tabsPrice.classList.remove('hide')
			}
		}
	})
})
