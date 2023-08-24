const allLang = ['lv', 'ru']

if (allLang.includes(window.location.hash.substring(1))) {
	location.href = window.location.href + '#lv'
}

document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('lang') === 'primary') {
		document.querySelectorAll('.header__languages span').forEach(lang => {
			lang.innerText = 'Lv'
		})
		localStorage.setItem('lang', 'primary')
		location.href = window.location.pathname + '#' + 'lv'
	} else if (localStorage.getItem('lang') === 'secondary') {
		document.querySelectorAll('.header__languages span').forEach(lang => {
			lang.innerText = 'Ru'
		})
		localStorage.setItem('lang', 'secondary')
		location.href = window.location.pathname + '#' + 'ru'
	} else {
		document.querySelectorAll('.header__languages span').forEach(lang => {
			lang.innerText = 'Lv'
		})
		localStorage.setItem('lang', 'primary')
		location.href = window.location.pathname + '#' + 'lv'
	}

	document
		.querySelectorAll('.header__languages-dropdown_lang')
		.forEach(lang => {
			lang.addEventListener('click', () => {
				if (
					lang.innerText ===
					document.querySelector('.header__languages span').innerText
				) {
					return
				}
				if (lang.innerText === 'Ru') {
					localStorage.setItem('lang', 'secondary')
				} else {
					localStorage.setItem('lang', 'primary')
				}

				document.querySelectorAll('.trank').forEach(slide => {
					if (localStorage.getItem('lang') === 'primary') {
						slide.removeAttribute('data-name')
						slide.removeAttribute('data-skill')
						slide.setAttribute('data-name', slide.dataset.nameprimary)
						slide.setAttribute('data-skill', slide.dataset.skillprimary)
					} else {
						slide.removeAttribute('data-name')
						slide.removeAttribute('data-skill')
						slide.setAttribute('data-name', slide.dataset.namesecondary)
						slide.setAttribute('data-skill', slide.dataset.skillsecondary)
					}
				})

				location.reload()
			})
		})
	const datas = document.querySelectorAll('.lang')
	const inputs = document.querySelectorAll('.lang-input')
	const logo = document.querySelector('.header__logo')

	logo.addEventListener('click', () => {
		location.href = '/'
	})

	document.querySelectorAll('.trank').forEach(slide => {
		if (localStorage.getItem('lang') === 'primary') {
			slide.setAttribute('data-name', slide.dataset.nameprimary)
			slide.setAttribute('data-skill', slide.dataset.skillprimary)
		} else {
			slide.setAttribute('data-name', slide.dataset.namesecondary)
			slide.setAttribute('data-skill', slide.dataset.skillsecondary)
		}
	})

	inputs.forEach(input => {
		if (localStorage.getItem('lang') === 'primary') {
			input.id === 'name'
				? input.setAttribute('placeholder', 'NAME')
				: input.setAttribute('placeholder', 'NUMBER')
		} else {
			input.id === 'name'
				? input.setAttribute('placeholder', 'ИМЯ')
				: input.setAttribute('placeholder', 'НОМЕР')
		}
	})

	datas.forEach(data => {
		if (localStorage.getItem('lang') === 'primary') {
			data.innerText = data.dataset.primary
		} else {
			data.innerText = data.dataset.secondary
		}
	})
})
