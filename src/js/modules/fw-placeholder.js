$(function () {
        /*
        Имитация плайсхолдера
        */
        $(".fw-placeholder").each(function () {
            $(this).find('*[value]').each(function () {
                $(this).val() ? $(this).parents('.fw-placeholder').addClass('active') : false
            });
        });
        $(".fw-placeholder > *").on('focusout keyup', function () {
            if ($(this).val() === "" || $(this).val() === '+7(___)-___-__-__') {
                $(this).parent().removeClass('active');
            } else {
                $(this).parent().addClass('active');
            }
        });
});