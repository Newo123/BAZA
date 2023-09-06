document.addEventListener('DOMContentLoaded', () => {
  const players = Array.from(document.querySelectorAll('.player-video'));
  const toPlays = document.querySelectorAll('.to-play');
  const videos = document.querySelector('.videos .swiper-wrapper');

  if (players.length > 0) {
    players.forEach(player => {
      const playerId = player.getAttribute('id');
      player.children[0].setAttribute('data-id', playerId);
    });
  }

  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if (toPlays.length > 0) {
    toPlays.forEach(play => {
      play.children[0].setAttribute(
        'src',
        `https://img.youtube.com/vi/${play.dataset.video}/maxresdefault.jpg`,
      );
    });
    toPlays.forEach(play => {
      play.addEventListener('click', e => {
        let btn = e.currentTarget;
        let videoId = btn.dataset.video;
        let playerId = btn.dataset.id;

        player = new YT.Player(playerId, {
          videoId: videoId,
          playerVars: {
            playsinline: 1,
            rel: 1,
            showinfo: 0,
            autoplay: 1,
          },
          events: {},
        });
      });
    });

    if (videos) {
      videos.addEventListener('transitionstart', () => {
        const iframe = document.querySelectorAll('iframe');

        if (iframe.length > 0) {
          iframe.forEach(ifr => {
            ifr.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*',
            );
          });
        }
      });
    }
  }
});
