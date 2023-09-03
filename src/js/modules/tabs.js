document.addEventListener('DOMContentLoaded', () => {
	const btns = Array.from(document.querySelectorAll('.hero-second__tab'))
	const action = document.querySelector('.hero-second__actions')
	const style = document.querySelector('.styles-column')
	const teachers = document.querySelector('.teachers-column')

	window.addEventListener('scroll', () => {
		if (action && window.screenY > 20) {
			action.style.zIndex = '3'
		} else if (action) {
			action.removeAttribute('style')
		}
	})

	if (btns.length > 0) {
		btns.forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				const button = e.target

				if (!button.classList.contains('active')) {
					btns.forEach(b => {
						b.classList.remove('active')
					})

					button.classList.add('active')
					localStorage.setItem('tab', button.id)

					if (localStorage.getItem('tab') === 'teachers') {
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

	if (!localStorage.getItem('tab')) {
		if (btns.length > 0) {
			btns[0].classList.add('active')
			teachers.classList.add('active')
		}
	} else {
		if (btns.length > 0) {
			let button = btns.find(btn => btn.id === localStorage.getItem('tab'))
			button.classList.add('active')

			if (button.id === 'teachers') {
				teachers.classList.add('active')
			} else {
				style.classList.add('active')
			}
		}
	}

	// price tabs

	const priceTabs = Array.from(
		document.querySelectorAll('.hero-price__tabs button')
	)
	const priceList = Array.from(document.querySelectorAll('.price__container'))

	if (priceTabs) {
		let activeTabPrice = priceTabs[0]
		let activePriceList = priceList[0]

		priceTabs.forEach(tab => {
			tab.addEventListener('click', e => {
				const button = e.target
				activeTabPrice.classList.remove('active')
				button.classList.add('active')

				activeTabPrice = button
				priceList.forEach(price => {
					if (price.dataset.id === activeTabPrice.id) {
						activePriceList.classList.remove('active')
						price.classList.add('active')
						activePriceList = price
					}
				})
			})
		})
	}
})
