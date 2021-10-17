new WOW().init();

$(document).ready(function () {
    $('.icon').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('active');
    });
    $('.mark-mobile').click(function(e){
        e.preventDefault();
        $('.menu').toggleClass('active');
    });
    $('.slider-home').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1200:{
                items:7
            }
        }
    });
    $('.tabs span').click(function (e) { 
        e.preventDefault();
        $('.tabs span').removeClass('active');
        var id = $(this).data('id');
        var $grid = $('.grid').isotope({});
        $grid.isotope({ filter: id });
        $(this).addClass('active');
    });
});