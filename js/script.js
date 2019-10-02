$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        effect: 'fade',
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.my-pagination',
            // dynamicBullets: true,
            clickable: true,
        },
    });

    $("#scrollBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("header").outerHeight()
        }, 1000);
        return false;
    });

    // $(window).scroll(function() {
    //     if ( $("#scrollBtn").offset().top >= window.pageYOffset) {
    //         $("#scrollBtn").css("bottom", "100px")
    //         console.log(true)
    //     };
    // });

    $(document)
    .on('click', ".hamburger_btn",function() {
        $("header").toggleClass('nav_open');
    })

});

