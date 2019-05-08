"use strict";


var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $fullScreen = $('.fullscreen-banner') || $('.section-fullscreen'),
    $halfScreen = $('.halfscreen-banner'),
    searchActive = false;

//Check if function exists
$.fn.exists = function () {
    return this.length > 0;
};

function fullScreen() {
    if ($fullScreen.exists()) {
        $fullScreen.each(function () {
            var $elem = $(this),
                elemHeight = $window.height();
            if ($window.width() < 768) $elem.css('height', elemHeight / 1);
            else $elem.css('height', elemHeight);
        });
    }
    if ($halfScreen.exists()) {
        $halfScreen.each(function () {
            var $elem = $(this),
                elemHeight = $window.height();
            $elem.css('height', elemHeight / 2);
        });
    }
}


function scrolltop() {
    var pxShow = 300,
        goTopButton = $(".scroll-top")
    // Show or hide the button
    if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
            if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
        } else {
            goTopButton.removeClass('scroll-visible')
        }
    });
    $('.smoothscroll').on('click', function (e) {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
}


function fxheader() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('#header-wrap').addClass('fixed-header');
        } else {
            $('#header-wrap').removeClass('fixed-header');
        }
    });
}


function databgcolor() {
    $('[data-bg-color]').each(function (index, el) {
        $(el).css('background-color', $(el).data('bg-color'));
    });
    $('[data-text-color]').each(function (index, el) {
        $(el).css('color', $(el).data('text-color'));
    });
    $('[data-bg-img]').each(function () {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });
}


function countdown() {
    $('.countdown').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
        });
    });
}


function wowanimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}


$(document).ready(function () {
    scrolltop(),
        fxheader(),
        databgcolor(),
        countdown();
});


$window.resize(function () {
    fullScreen();
});


$(window).on('load', function () {
    wowanimation();
});

