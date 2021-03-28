const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    link = document.querySelector('.menu__list');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });




const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        }   else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});