document.addEventListener('DOMContentLoaded', () => {
	const dropdownRight = document.querySelector(
		'.timetable__head-dropdown_open-right'
	)
	const dropMenuRight = document.querySelector('.timetable__head-dropdown.two')

	const dropdownLeft = document.querySelector(
		'.timetable__head-dropdown_open-left'
	)
	const dropMenuLeft = document.querySelector('.timetable__head-dropdown.one')
	const countTab = Array.from(document.querySelectorAll('.cat-tab'))
	const countryTab = Array.from(document.querySelectorAll('.country-tab'))

	if (dropdownLeft.length > 0) {
		if (countryTab.length > 2) {
			dropdownLeft.addEventListener('click', () => {
				if (dropMenuLeft.classList.contains('active')) {
					dropMenuLeft.classList.remove('active')
					dropdownLeft.children[0].style.transform = 'rotate(0)'
				} else {
					dropMenuLeft.classList.add('active')
					dropdownLeft.children[0].style.transform = 'rotate(180deg)'
				}
			})
		}
	}

	if (dropdownRight.length > 0) {
		if (countTab.length > 9) {
			dropdownRight.addEventListener('click', () => {
				if (dropMenuRight.classList.contains('active')) {
					dropMenuRight.classList.remove('active')
					dropdownRight.children[0].style.transform = 'rotate(0)'
				} else {
					dropMenuRight.classList.add('active')
					dropdownRight.children[0].style.transform = 'rotate(180deg)'
				}
			})
		}
	}
})
