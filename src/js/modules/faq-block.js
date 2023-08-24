$( document ).ready(function() {
    $('.js-faqName').on('click', function() {
        $(this).closest('.js-faqBlock').toggleClass('open');
    })
});