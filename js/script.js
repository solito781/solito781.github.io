window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    // link = document.querySelectorAll('.menu__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
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
    
    
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });


    
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
              }
        });
    };

    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    
    
});