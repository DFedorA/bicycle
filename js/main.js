$(function () {
    let slider = $("#reviewsSlider");
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav_1 = $("#nav_1");
    let nav_2 = $("#nav_2");
    let navToggle = $("#navToggle");
    checkScroll(scrollPos, introH);
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav_1.removeClass("show");
        nav_2.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 115
        }, 700);
    });

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav_1.toggleClass("show");
        nav_2.toggleClass("show");
    });

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});
