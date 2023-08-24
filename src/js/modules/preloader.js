var preloader = {
    start: function() {
        $('body').prepend('<section class="loading-wrapper"><div class="loading-window js-preloader"><div class="car"><div class="strike"></div><div class="strike strike2"></div><div class="strike strike3"></div><div class="strike strike4"></div><div class="strike strike5"></div><div class="car-detail spoiler"></div><div class="car-detail back"></div><div class="car-detail center"></div><div class="car-detail center1"></div><div class="car-detail front"></div><div class="car-detail wheel"></div><div class="car-detail wheel wheel2"></div></div><div class="text"><span>Загрррружаем</span><span class="dots">...</span></div></div></section>');
    },
    stop: function() {
        $('section.loading-wrapper').remove();
    }
}
preloader.start();

$(window).on('load',function(){
    setTimeout(function(){
        preloader.stop();
        $('body').addClass('loaded');
    },500);
    
})

$(function(){
     /*
    Прелоадер для пагинации
    */
    $('.pagination li a').click(function () {
        preloader.start();
    });

});