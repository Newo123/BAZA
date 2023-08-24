$(function(){
    /*
    Клик по бургеру
    */
    $('.mobile-menu').click(function () {
        $(".header").toggleClass("show-menu");
    });

     /*
    Фиксация навигации при поркуртке
    */
    var tempScrollTop, currentScrollTop = $(window).scrollTop();

    $(window).on('scroll load', function () {
        if ($('section.preloader').length == 0) {
            currentScrollTop = $(window).scrollTop();
            if (currentScrollTop > $('.header').height() && !$('body').hasClass('hidden')) {
                $('body').addClass('fixed-header');
                if (tempScrollTop < currentScrollTop) {
                    $('.header').removeClass('show');
                } else if (tempScrollTop > currentScrollTop) {
                    $('.header').addClass('show');
                }
            } else {
                $('body').removeClass('fixed-header');
                $('.header').removeClass('show');
            }

            tempScrollTop = currentScrollTop;
        }
    });
});