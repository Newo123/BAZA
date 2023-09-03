document.addEventListener('DOMContentLoaded', () => {
	const buttonStyles = Array.from(document.querySelectorAll('.cat-tab'))
	const tables = Array.from(document.querySelectorAll('.timetable__table'))

	if (buttonStyles.length > 0) {
		const store = localStorage.getItem('tableTab')
		let activeTab = buttonStyles.forEach(button => {
			if (button.dataset.name === store) {
				button.classList.add('active')
			}
		})

		let activeTable = tables.forEach(table => {
			if (table.dataset.name === store) {
				table.classList.add('active')
			}
		})

		if (!store) {
			buttonStyles[0].classList.add('active')
			tables[0].classList.add('active')
		}

		buttonStyles.forEach(button => {
			button.addEventListener('click', e => {
				const btn = e.target

				if (!btn.classList.contains('active')) {
					buttonStyles.forEach(btn => {
						btn.classList.remove('active')
					})
					localStorage.setItem('tableTab', btn.dataset.name)
					btn.classList.add('active')
				} else {
					return
				}

				const tabelActive = tables.find(
					table => table.dataset.name === btn.dataset.name
				)

				if (tabelActive) {
					tables.forEach(table => table.classList.remove('active'))
				}

				tabelActive.classList.add('active')
			})
		})
	}
})
