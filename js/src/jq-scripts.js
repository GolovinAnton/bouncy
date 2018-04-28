$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: true,
        speed: 1000
    });


    // nav burger 
    $('.burger').click(function() {
        $('.burger__line').toggleClass('fade');
    });

    //layout isotop

    var $isotop = $('.portfolio').isotope({
        itemSelector: '.image',
        masonry: {
            horizontalOrder: true
        }
    });

    //isotop 

    $('body').on('click', '.filters li', function(e) {
        e.preventDefault();
        $('.filters li').removeClass('active');
        $(this).addClass("active");
        var filter = $(this).attr('data-filter');
        filter = filter == '*' ? filter : '.' + filter;
        $isotop.isotope({ filter: filter });
    });

    $('body').on('click', '.burger', function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-opened');
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

// scroll event fixed menu

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

//map

function initMap() {

    var address = { lat: 47.096779, lng: 37.539277 },
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: address
        });

    var marker = new google.maps.Marker({
        position: address,
        map: map,
        icon: './img/marker.png',
        animation: google.maps.Animation.DROP
    });
}