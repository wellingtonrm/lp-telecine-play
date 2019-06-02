$(document).ready(function () {
    $('.multiple-itemsDesk').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.multiple-items').slick({
        
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        
    });
    $('.banner').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.slick-prev').hide();
    $('.slick-next').hide();
});
