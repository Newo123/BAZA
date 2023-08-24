$(function () {

    /*
    Аккардион
    */
    $('.spoiler-title,.spoiler > .fa-angle-down').click(function () {
        $(this).parent().toggleClass('open');
        $(this).parent().find('div.spoiler-content').slideToggle();
        return false;
    });

    $('body').on('click', '.js-exitError', function () {
        var form = $(this).closest('.sendler');
        form.removeClass('error')
    });
    
});//document.ready

