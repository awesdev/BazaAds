$(document).ready(function () {
    $('.check-course').click(function (e) {
        e.preventDefault();
        $('.courses').removeClass('courses__active');
        $('.about-course').addClass('about-course__active');
    });

    $('.close-course').click(function (e) {
        e.preventDefault();
        $('.courses').addClass('courses__active');
        $('.about-course').removeClass('about-course__active');
    });
})