$(document).ready(function () {
    new WOW().init();

    $("#phone").mask("+7 (999) 99-99-999");

    $("#questions1").click(function () {
        $('html, body').animate({
            scrollTop: $(".questions").offset().top
        }, 500);
    });

    $("#enrollment").click(function () {
        $('html, body').animate({
            scrollTop: $(".questions").offset().top
        }, 500);
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });

    $("#program").click(function () {
        $('html, body').animate({
            scrollTop: $(".program").offset().top
        }, 500);
    });

    $("#questions").click(function () {
        $('html, body').animate({
            scrollTop: $(".questions").offset().top
        }, 500);
    });


    $("#home").click(function () {
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 500);
    });
})