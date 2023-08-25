document.addEventListener('DOMContentLoaded', () => {
	const btns = Array.from(document.querySelectorAll('.hero-second__tab'))
	const action = document.querySelector('.hero-second__actions')
	const style = document.querySelector('.styles-column')
	const teachers = document.querySelector('.teachers-column')

	window.addEventListener('scroll', () => {
		if (action && window.screenY > 20) {
			action.style.zIndex = '3'
		} else {
			action.removeAttribute('style')
		}
	})

	if (btns.length > 0 && style && teachers) {
		let activeButton = btns[0]

		btns.forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				const button = e.target
				if (!button.classList.contains('active')) {
					activeButton.classList.remove('active')
					button.classList.add('active')
					activeButton = button

					if (activeButton.id === 'teachers') {
						style.classList.remove('active')
						teachers.classList.add('active')
					} else {
						teachers.classList.remove('active')
						style.classList.add('active')
					}
				}
			})
		})
	}
})
