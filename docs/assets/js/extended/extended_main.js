function sidebarFix(){
    if (window.innerWidth >= 1024){
        var position = $('.page__content').position();
        var articleRight = position.left + $('.page__content').width();
        
        if (window.innerWidth < 1280){
            var sidebarWid = document.body.clientWidth - articleRight - 30;
            $('.sidebar__right_fix').css('width', sidebarWid);
        } else {
            $('.sidebar__right_fix').removeAttr("style")
        }

        $('.sidebar__right_fix').css('left', articleRight);
        var articleTop = position.top;
        var menuHeight = $('.masthead').height();
        if (articleTop < $(this).scrollTop() + menuHeight){
            $('.sidebar__right_fix').css('top', menuHeight + 30);
        } else {
            $('.sidebar__right_fix').css('top', articleTop - $(this).scrollTop() + 30);
        }
    }
    else {
        $('.sidebar__right_fix').removeAttr("style")
    }
}

function menuScroll(){
    var lastScrollTop = 0
    $(window).bind('scroll', function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 50){
            if (scrollTop > lastScrollTop){
                $('.masthead').removeClass('masthead_fixed');
            } else {
                $('.masthead').addClass('masthead_fixed');
                $('.masthead__inner-wrap').addClass('masthead_shrink');
            }
        } else {
            $('.masthead').removeClass('masthead_fixed');
            $('.masthead__inner-wrap').removeClass('masthead_shrink');
        }
        lastScrollTop = scrollTop;
        sidebarFix();
    });
}

$(document).ready(function(){
    menuScroll();
    
    $('.sidebar__right').addClass('sidebar__right_fix');
    sidebarFix();
    $(window).resize(sidebarFix);
});