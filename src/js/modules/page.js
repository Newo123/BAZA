$(function(){
    $('.page iframe').each(function () {
        // height =
        // $(this).height($(this).height()*($(this).parent().width()/$(this).height()));
        $(this).attr('height', $(this).height() * ($(this).parent().width() / $(this).width()));
        $(this).attr('width', $(this).parent().width());
    });
});