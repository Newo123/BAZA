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
				tabs.style.bottom = '0'
			}
		} else {
			button.removeAttribute('style')
			tabs.removeAttribute('style')
		}
	})
})
