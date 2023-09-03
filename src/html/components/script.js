document.addEventListener('DOMContentLoaded', () => {
	const players = Array.from(document.querySelectorAll('.player-video'))
	// const slides = Array.from(document.querySelectorAll('swiper-slide')).filter(
	// 	slide => {
	// 		if (
	// 			!slide.classList.contains('swiper-slide-duplicate') &&
	// 			!slide.classList.contains('swiper-slide-duplicate-prev')
	// 		) {
	// 			return slide
	// 		}
	// 	}
	// )

	// console.log(slides)

	players.forEach(player => {
		const playerId = player.getAttribute('id')
		player.children[0].setAttribute('data-id', playerId)
		console.log(player.children[0])
	})

	var tag = document.createElement('script')

	tag.src = 'https://www.youtube.com/iframe_api'
	var firstScriptTag = document.getElementsByTagName('script')[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	document.querySelectorAll('.to-play').forEach(play => {
		play.addEventListener('click', e => {
			let btn = e.currentTarget
			let videoId = btn.dataset.video
			let playerId = btn.dataset.id

			player = new YT.Player(playerId, {
				videoId: videoId,
				playerVars: {
					playsinline: 1,
					rel: 1,
					showinfo: 0,
					autoplay: 1,
				},
				events: {},
			})
		})
	})
})
