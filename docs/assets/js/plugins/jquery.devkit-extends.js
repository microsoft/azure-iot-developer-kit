// Extend functions
;(function ($, window, undefined) {
    $.devKitExtends = function () {
        mastheadFix();
        menuScroll();

        $('.sidebar__right').addClass('sidebar__right_fix');
        adjustResize();
        $(window).resize(adjustResize);

        var firstPlatform = '';
        if ($('.switcher').length > 0){
            var switchLevel = $('.switcher').next().prop('tagName');
            if (switchLevel[0] != 'H'){
                $('.switcher').remove();
            } else {
                switchLevel = switchLevel[1];
                $('.switch').each(function(){
                    var id = $(this).attr('id');
                    var platform = '';
                    var curPlatform = false;
                    var string = '';
                    $('.page__content').children().each(function(){
                        var curLevel = $(this).prop('tagName');
                        if (curPlatform){
                            if (curLevel[0] == 'H' && curLevel[1] <= switchLevel){
                                $('#' + platform + '_switch_result').html(string);
                                curPlatform = false;
                            } else {
                                string += $(this).clone().wrap('<p>').parent().html();
                                $(this).remove();
                            }
                        } else {
                            if (curLevel[0] == 'H' && curLevel[1] == switchLevel && id.search($(this).attr('id')) != -1){
                                curPlatform = true;
                                string += $(this).clone().wrap('<p>').parent().html();
                                platform = $(this).attr('id');
                                if (firstPlatform == ''){
                                    firstPlatform = platform;
                                    $(this).before('<div id = "' + platform + '_switch_result" class = "switch_result">');
                                    $('#' + platform + '_switch').addClass('switch_active');
                                } else {
                                    $(this).before('<div id = "' + platform + '_switch_result" class = "switch_result" style = "display: none">');
                                    $('#markdown-toc-' + platform).parent().css('display', 'none');
                                }
                                $(this).remove();
                            }
                        }
                    });
                    if (curPlatform){
                        $('#' + platform + '_switch_result').html(string);
                        curPlatform = false;
                    }
                });
                $('.switch').each(function(){
                    $(this).click(platformSwitcher);
                });
            }
        }

        $(window).scroll(tocScroll);

        projectCardClick();
    };

    $.reportIssue = function() {
        $('.feedback-btns').fadeOut(400, function() {
            $('.survey-monkey').fadeIn(400);
        });
        $('.survey-monkey iframe').each(function() {
            this.onload = function() {
                $(this).fadeOut(400, $.feedbackDisappeared);
            }
        });
    }

    $.feedbackDisappeared = function() {
        $('.feedback-btns').fadeOut(400, function() {
            $('.feedback-btns').html('<h3> Thank you! </h3><p> We appreciate your feedback. </p>').fadeIn(400);
        });
        setTimeout(function() {
            $('.feedback-btns').fadeOut(400);
        }, 2000);
    }

    $.feedbackButtonClick = function(eventName) {
        try {
            amplitude.getInstance().logEvent(eventName);
        } catch(e) {
            console.log('ampltitude error: '+e);
        }
    
        try {
            ga('send', 'event', {
                eventCategory: 'stepFinished',
                eventAction: 'click',
                eventLabel: eventName
                });
        } catch(e) {
            console.log('ga error: '+e);
        }
    }

    var tocScroll = function () {
        $('.toc__menu a').removeClass('toc__menu_active');
        var scrollTop = $(this).scrollTop();
        $('.toc__menu a').each(function() {
            var id = $(this).attr('href');
            var target = $(id).position().top;
            if (scrollTop >= target) {
                $('.toc__menu a').removeClass('toc__menu_active');
                $(this).addClass('toc__menu_active');
            }
        });
    };

    var adjustResize = function () {

        // Resize page hero image container
        vpw = $(window).width();
        vph = $(window).height();
        $('.page__hero--overlay-full').css({'height': vph + 'px'});

        sidebarFix();
    };

    var sidebarFix = function () {
        if (!$('.sidebar__right_fix').length){
            return;
        }
        if (window.innerWidth >= 1024){
            var position = $('.page__content').position();
            var articleRight = position.left + $('.page__content').width();
            
            //if the window is not so width, the width of the toc would depend on the width of window
            if (window.innerWidth < 1280){
                var sidebarWid = document.body.clientWidth - articleRight - 30;
                $('.sidebar__right_fix').css('width', sidebarWid);
            } else {
                $('.sidebar__right_fix').removeAttr("style")
            }
            
            //calculate the left position and the top position for the toc fixed in the window
            $('.sidebar__right_fix').css('left', articleRight);
            var articleTop = position.top;
            var menuHeight = $('.masthead').height();
            if (articleTop < $(this).scrollTop() + menuHeight){
                $('.sidebar__right_fix').css('top', menuHeight + 30);
            } else {
                $('.sidebar__right_fix').css('top', articleTop - $(this).scrollTop() + 30);
            }
    
            //when the toc is used to show, it would use scroll for overflow
            $('.sidebar__right_fix').css('height', "");
            var sidebarBottom = $('.sidebar__right_fix').position().top + $('.sidebar__right_fix').height();
            if (articleTop < $(this).scrollTop() + menuHeight && sidebarBottom > $(window).height() - 30){
                $('.sidebar__right_fix').css('height', $(window).height() - $('.sidebar__right_fix').position().top - 30);
                $('.sidebar__right_fix').css('overflow', 'scroll');
            } else {
                $('.sidebar__right_fix').css('height', "");
                $('.sidebar__right_fix').css('overflow', "");
            }
        }
        else {
            $('.sidebar__right_fix').removeAttr("style");
        }
    };

    var menuScroll = function () {
        var lastScrollTop = 0
        // var greedyNav = $('.masthead .greedy-nav');
        $(window).bind('scroll', function(){
            if (!$('.masthead').length){
                return;
            }
            var scrollTop = $(this).scrollTop();

            if (scrollTop > 50){
                if (scrollTop > lastScrollTop){
                    $('.masthead').hide().removeClass('masthead_fixed');
                } else {
                    $('.masthead__inner-wrap').addClass('masthead_shrink');
                    $('.masthead').addClass('masthead_fixed').show();
                }
            } else {
                $('.masthead').removeClass('masthead_fixed');
                $('.masthead__inner-wrap').removeClass('masthead_shrink');
            }
            lastScrollTop = scrollTop;
            sidebarFix();
        });
    };

    var mastheadFix = function () {
        if ($('.masthead').next().attr('id') !== 'main') {
            $('.masthead .greedy-nav').addClass('reverse-color');
        }
    }

    var trackClickNumber = function (element) {
        var url = $(element).attr('href');
        var redirect = true;
        try {
            dataLayer.push({
                event: 'gtm.linkClick',
                eventTimeout: 2000,
                eventCallback: function() {
                    redirect = false;
                    document.location = url;
                },
                'gtm.element': element,
                'gtm.elementUrl': url,
                'gtm.elementClass': $(element).attr('class') ? $(element).attr('class') : '',
                'gtm.elementId': $(element).attr('id') ? $(element).attr('id') : '',
                'gtm.elementTarget': $(element).attr('target') ? $(element).attr('target') : ''
            });
        } catch (e) {
            console.log('gtm error: ' + e);
        }

        setTimeout(function() {
            if (redirect)
                document.location = url;
        }, 2000);
        return false;
    };

    var platformSwitcher = function () {
        var url = $(this).attr('href');
        $('.switch_result').each(function(){
            if ($(this).attr('id').search(url.substring(1)) != -1){
                $(this).css('display', '');
            } else {
                $(this).css('display', 'none');
            }
        });
        $('.switch').each(function(){
            var tocElement =  $('#markdown-toc-' + $(this).attr('href').substring(1)).parent();
            if ($(this).attr('href') == url){
                tocElement.css('display', '');
                $(this).addClass('switch_active');
            } else {
                tocElement.css('display', 'none');
                $(this).removeClass('switch_active');
            }
        });
        return false;
    };

    var projectCardClick = function() {
        $('.grid__item').each(function() {
            $(this).css('cursor', 'pointer');
            $(this).click(function() {
                var projectTitle = $(this).find('.archive__item-title').find('a');
                if (projectTitle.length) {
                    trackClickNumber(projectTitle[0]);
                }
            })
        })
    }

}(jQuery, window));
