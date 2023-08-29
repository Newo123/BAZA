document.addEventListener('DOMContentLoaded', () => {
	const dropLang = Array.from(
		document.querySelectorAll('.pll-parent-menu-item')
	)

	dropLang.forEach(item => {
		item.addEventListener('click', e => {
			const switcher = e.target

			if (switcher.classList.contains('active')) {
				switcher.classList.remove('active')
			} else {
				switcher.classList.add('active')
			}

			document.addEventListener('click', e => {
				if (e.target !== switcher) {
					switcher.classList.remove('active')
				}
			})
		})
	})
})
