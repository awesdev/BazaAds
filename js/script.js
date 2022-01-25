$(document).ready(function () {
    new WOW().init();

    $("#phone").mask("+7 (999) 99-99-999");

    $("#info").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".info").offset().top
        }, 500);
    });

    $("#enrollment").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".enrollment").offset().top
        }, 500);
    });

    $("#about").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });

    $("#program").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".program").offset().top
        }, 500);
    });

    $("#questions").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".questions").offset().top
        }, 500);
    });


    $("#home").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 500);
    });

    $('.check-course').click(function (e) {
        e.preventDefault();
        $('.cab-courses').removeClass('cab-courses_active');
        $('.my-courses').addClass('my-courses_active');
    });

    $('.close-course').click(function (e) {
        e.preventDefault();
        $('.cab-courses').addClass('cab-courses_active');
        $('.my-courses').removeClass('my-courses_active');
    });

    $('.check-video').click(function (e) {
        e.preventDefault();
        $('.my-courses').removeClass('my-courses_active');
        $('.video').addClass('video_active');
    });
})