document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('.modal')
	const closeModal = document.querySelector('.modal__close')
	const openModal = Array.from(document.querySelectorAll('.header__action'))

	const exitModal = () => {
		modal.classList.remove('active')
	}

	const inModal = () => {
		modal.classList.add('active')
	}

	if (modal) {
		modal.addEventListener('click', e => {
			if (e.target === modal) {
				exitModal()
			}
		})
	}

	if (openModal.length > 0) {
		openModal.forEach(open => {
			open.addEventListener('click', inModal)
		})
	}

	if (closeModal) {
		closeModal.addEventListener('click', exitModal)
	}
})
