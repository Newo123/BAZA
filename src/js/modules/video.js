document.addEventListener('DOMContentLoaded', () => {
    function resizeVideoBg(){
        $('.js-video').each(function() {
            if($(this).attr('data-video') !== undefined){
                $(this).addClass('video');
                let prp_v
                if($(window).width() <= 460) {
                    prp_v = .95;
                } else {
                    prp_v = 1.1;
                }
                let video = $('<video autoplay="true" loop="true" preload="auto" muted="muted" playsinline><source src="'+$(this).attr('data-video')+'.mp4" type="video/mp4"><source src="'+$(this).attr('data-video')+'.webm" type="video/webm">');
                let prp = $(this).outerHeight()/$(this).outerWidth();
                if(prp > prp_v) {
                    video.css("width",$(this).outerHeight()/prp_v);
                    video.css("left",($(this).outerWidth()-$(".js-video video").width())/2);
                    video.css("top",0);
                } else {
                    video.css("width",'auto');
                    video.css("height",$(this).width()*prp_v);
                    video.css("top",($(this).outerHeight()-$(".js-video video").height())/2);
                    video.css("left",0);
                }
                $(this).prepend(video);
            }
        });
    }
    $(window).on('load',function(){
        if($(window).width() <= 768) {
            resizeVideoBg();
        }
    });
})