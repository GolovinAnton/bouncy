$(document).ready(function() {
    $('.team__slider').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: true,
        speed: 1000
    });

    $('.testimonials-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 3000
    });

    //layout isotop

    var $isotop = $('.portfolio').isotope({
        itemSelector: '.image',
        masonry: {
            horizontalOrder: true
        }
    });

    //isotop 

    $("body").on("click", ".filters li", function(e) {
        e.preventDefault();
        $(".filters li").removeClass("active");
        $(this).addClass("active");
        var filter = $(this).attr("data-filter");
        filter = filter == '*' ? filter : '.' + filter;
        $isotop.isotope({ filter: filter });
    });

    //"scroll to" function on click

    $('body').on('click', '.scrollTo', function(e) {
        e.preventDefault();
        var target = $(this).attr('href'),
            offset = Math.floor($(target).offset().top);
        $('html').animate({
            scrollTop: offset
        }, 1000, function() {
            if (offset <= 0) {
                $('.header__nav').removeClass('fixed');
            } else {
                $('.header__nav').addClass('fixed');
            }
        });
    });
})

// scroll event

function scrollEvent() {
                var $getEvent = $('.header__nav');
                if ($(window).scrollTop() < 100) {
                    $('.header__nav').removeClass('fixed');
                } else {
                  $('.header__nav').addClass('fixed');
                }
            
                }
                $(window).scroll(scrollEvent);
                scrollEvent();



function initMap() {
    
    var address = {lat: 47.096779, lng: 37.539277},
        map = new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        center: address
    });

    var marker = new google.maps.Marker({
        position: address,
        map: map,
        icon: 'url: .//favicon.png'
    });
}
        