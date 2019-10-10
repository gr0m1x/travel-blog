$(document).ready(function () {

    let swiperHeader = new Swiper('.swiper-header', {
        direction: 'vertical',
        effect: 'fade',
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.my-pagination',
            // dynamicBullets: true,
            clickable: true,
        },
        simulateTouch: false, // Отключение свайпа при прмощи мыши
    }),
    swiperFatcs = new Swiper('.swiper-facts', {
        slidesPerView: 3,
        loop: true,
        // centeredSlides: true, // Центер Мод
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }),
    swiperGuides = new Swiper('.swiper-guides', {
        // effect: 'coverflow',
        slidesPerView: 3,
        loop: true, // Бесконечный слайдер
        centeredSlides: true, // Центер Мод
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(document)
    .on('click', ".hamburger_btn",function() {
        $("header").toggleClass('nav_open');
    })
    .on("click","#scrollBtn, .navList_link__scrolling", function (event) {
        let id  = $(this).attr('href'),
            vwFix = ($(window).innerWidth() / 100) * 6,
            top = $(id).offset().top + vwFix;

        if ($('.nav_open').length) {
            setTimeout(function () {
                $("header").removeClass('nav_open');
            }, 1000);
        }

        $('body,html').animate({scrollTop: top}, 1000);
        return false;
    });
});

