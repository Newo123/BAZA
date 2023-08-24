document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const lazyImages = document.querySelectorAll(
		'img[data-src],source[data-srcset]'
	)
	const loadMapBlock = document.querySelector('._load-map')
	const loadVideoBlock = document.querySelector('._load-video')
	const windowHeight = document.documentElement.clientHeight
	const loadMoreBlock = document.querySelector('_load-more')

	let lazyImagesPositions = []

	const lazyScrollCheck = () => {
		let imgIndex = lazyImagesPositions.findIndex(
			item => pageYOffset > item - windowHeight
		)

		if (imgIndex >= 0) {
			if (lazyImages[imgIndex].dataset.src) {
				lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
				lazyImages[imgIndex].removeAttribute('data-src')
			} else if (lazyImages[imgIndex].dataset.srcset) {
				lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset
				lazyImages[imgIndex].removeAttribute('data-srcset')
			}
			delete lazyImagesPositions[imgIndex]
		}
	}

	const getMap = () => {
		const loadMapBlockPosition =
			loadMapBlock.getBoundingClientRect().top + pageYOffset

		if (pageYOffset > loadMapBlockPosition - windowHeight) {
			const loadMapUrl = loadMapBlock.dataset.map

			if (loadMapUrl) {
				loadMapBlock.insertAdjacentHTML(
					'beforeend',
					`<iframe src="${loadMapUrl}" width="100%" loading="lazy" allowfullscreen='' referrerpolicy='no-referrer-when-downgrade' frameborder="0"></iframe>`
				)
				loadMapBlock.classList.add('_loaded')
			}
		}
	}

	// const getVideo = () => {
	//   const loadVideoBlockPosition =
	//     loadVideoBlock.getBoundingClientRect().top + pageYOffset;

	//   if (pageYOffset > loadVideoBlockPosition - windowHeight) {
	//     const loadVideoUrl = loadVideoBlock.dataset.video;

	//     if (loadVideoUrl) {
	//       loadVideoBlock.insertAdjacentHTML(
	//         'beforeend',
	//         `<iframe width="100%" height="100%" src="${loadVideoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
	//       );

	//       loadVideoBlock.classList.add('_loaded');
	//     }
	//   }
	// };

	const lazyScroll = () => {
		// if (
		//   document.querySelectorAll('img[data-src],source[data-srcset]').length > 0
		// ) {
		//   lazyScrollCheck();
		// }

		if (loadMapBlock) {
			if (!loadMapBlock.classList.contains('_loaded')) {
				getMap()
			}
		}
		// if (loadVideoBlock) {
		//   if (!loadVideoBlock.classList.contains('_loaded')) {
		//     getVideo();
		//   }
		// }
	}

	// if (lazyImages.length > 0) {
	//   lazyImages.forEach(img => {
	//     if (img.dataset.src || img.dataset.srcset) {
	//       lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
	//       lazyScrollCheck();
	//     }
	//   });
	// }
	if (loadMapBlock) {
		if (!loadMapBlock.classList.contains('_loaded')) {
			getMap()
		}
	}

	// if (loadVideoBlock) {
	//   if (!loadVideoBlock.classList.contains('_loaded')) {
	//     getVideo();
	//   }
	// }
	// _lazy _load-video data-video="https://www.youtube.com/embed/jPkKOEHz5ik"

	window.addEventListener('scroll', lazyScroll)
})
