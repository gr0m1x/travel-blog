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
    }),
        swiperFatcs = new Swiper('.swiper-facts', {
        slidesPerView: 3,
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

