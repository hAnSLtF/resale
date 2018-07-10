(function () {
    $('body').on('click', 'ul li', function (e) {
        e.stopPropagation();
        if ($(this).index() === $(this).siblings('li').length) {
            $(this).parent('ul').removeClass('active');
            $(this).parent('ul').next('ul').addClass('active');
        }
    });
    $('body').on('click', '.next, .first', function (e) {
        e.stopPropagation();
        var that = this;
        $(that).parents('li').next().show();
        $(that).parents('li').hide();
        if ($(that).hasClass('direct')) {
            $(that).parents('li').next().addClass('active');
        } else {
            setTimeout(function () {
                $(that).parents('li').next().addClass('active');
            }, 1);
        }
        $(that).parents('li').find('.dialog').removeClass('active');
    });
    $('body').on('click', '.back', function (e) {
        e.stopPropagation();
        var index = $('ul li:visible').index();
        var ul = $('ul li:visible').parent('ul');
        if (!index) {
            ul.removeClass('active');
            ul.prev('ul').addClass('active');
        } else {
            ul.find('li').eq(index - 1).show();
            $('ul li:visible').eq(-1).removeClass('active');
            setTimeout(function () {
                $('ul li:visible').eq(-1).hide();
            }, 500);
        }
    });
    $('body').on('click', '.choose', function (e) {
        e.stopPropagation();
        $(this).parents('li').find('.dialog').addClass('active');
    });
    $('body').on('click', '.dialog .close', function (e) {
        e.stopPropagation();
        $(this).parents('.dialog').removeClass('active');
    });
})();