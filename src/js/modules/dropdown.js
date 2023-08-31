document.addEventListener('DOMContentLoaded', () => {
	const dropdownRight = document.querySelector(
		'.timetable__head-dropdown_open-right'
	)

	const dropMenuRight = document.querySelector('.timetable__head-dropdown.two')

	dropdownRight.addEventListener('click', () => {
		if (dropMenuRight.classList.contains('active')) {
			dropMenuRight.classList.remove('active')
			dropdownRight.children[0].style.transform = 'rotate(0)'
		} else {
			dropMenuRight.classList.add('active')
			dropdownRight.children[0].style.transform = 'rotate(180deg)'
		}
	})
})
