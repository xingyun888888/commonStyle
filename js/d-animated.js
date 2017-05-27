// 图片翻转js
$(function () {
    // 图片翻转
    if ( $('html').hasClass('csstransforms3d') ) {
        $('.artGroup').removeClass('slide').addClass('flip');
        $('.artGroup.flip').on('mouseenter',
            function () {
                $(this).find('.artwork').addClass('theFlip');
            });
        $('.artGroup.flip').on('mouseleave',
            function () {
                $(this).find('.artwork').removeClass('theFlip');
            });
    } else {
        $('.artGroup').on('mouseenter',
            function () {
                $(this).find('.detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
            });
        $('.artGroup').on('mouseleave',
            function () {
                $(this).find('.detail').stop().animate({bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
            });
    }

    //导航效果
    $('.menu').click(function () {
        $(this).toggleClass('active');
    })

});
