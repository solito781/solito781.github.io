const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__nav'),
    close = document.querySelector('.hamburger__close'),
    overlay = document.querySelector('.overlay');
    link = document.querySelector('.header__list');



    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    link.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    






    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1400) {
                $('.pageup').fadeIn();
            }   else {
                $('.pageup').fadeOut();
            }
        });
        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) {
                $('.homepage').fadeOut();
            }   else {
                $('.homepage').fadeIn();
            }
        });

        $("a[href^='#up']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
       
    
    });