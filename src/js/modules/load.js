$(function(){
            /*
        Загрузка динамических блоков
        */

        $('body').on('click', '[class *= "load--"]', function (evt) {
            var loadBtn = $(this);

            if (loadBtn.hasClass('disabled')) {
                return false;
            }

            var tpl = String(loadBtn.attr('class').split(' ').filter(function (e) {
                return e.indexOf('load--') !== -1;
            })).replace("load--", "");
            $.ajax({
                url: '/includes/' + tpl + '.php',
                // url: '/index.php?route=sendform/sendform/getPopup&template='+tpl,
                type: "GET",
                contentType: false,
                processData: false,
                dataType: 'html',
                beforeSend: function () {
                    loadBtn.addClass('disabled');
                },
                success: function (data) {
                    var append = $('<section class="float-box ' + tpl + '"><div class="float-box_inset scrollbar-medium">' + data + '</div><div class="exit"></div></section>');

                    if (append.find('form').length > 0) {
                        append.addClass('form');
                    } else {
                        // append.find('.float-box_inset').addClass('page');
                    }
                    $('body').append(append).addClass('hidden-scroll');
                    setTimeout(function () {
                        append.addClass('show');
                    }, 700);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('.popup__inner').append('<h2 style="text-align:center">Error</h2>');
                    $(".popup--load").fadeIn(100);
                },
                complete: function () {
                    loadBtn.removeClass('disabled');
                }
            });
            return false;
        });

        $('body').click(function (event) {
            if ($(event.target).hasClass('float-box') || $(event.target).hasClass('exit')) {

                if ($(event.target).hasClass('exit')) {
                    var box = $(event.target).parents(".float-box");
                } else if ($(event.target).hasClass('float-box')) {
                    var box = $(event.target);
                }

                if (box !== undefined) {
                    box.find(".exit").css('display', "none");
                    box.find(".float-box_inset").css('right', '-110%');
                    setTimeout(function () {
                        box.remove();
                    }, 500);
                }

            }
        });
});