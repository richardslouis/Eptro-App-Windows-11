/**
 * Created by Theme_Industry on 4/7/2017.
 */
"use strict";

$(document).ready(function() {



    /* Script For Initializing Owl-Carousel_Team Slider */
    $("#owl-demo1").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds         
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigation: true,
        stopOnHover: true,
        navigationText : ["<span class='glyphicon glyphicon-chevron-left'></span> PREV","NEXT <span class='glyphicon glyphicon-chevron-right'></span>"] 
    });

    /* Script For Initializing Owl-Carousel_ScreenShot_Slider*/
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 5,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigation: true,
        stopOnHover: true,
        navigationText : ["<span class='glyphicon glyphicon-chevron-left'></span> PREV","NEXT <span class='glyphicon glyphicon-chevron-right'></span>"]
    });


});

//* Initializing Swiper Slider
var mySwiper = new Swiper ('.main_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',
});

/* Map */
if ($('#map').length) {
    //Contact Map
    var map;
    map = new GMaps({
        el: '#map'
        , lat: 51.507309
        , lng: -0.127448
        , scrollwheel: false
    });
    map.drawOverlay({
        lat: map.getCenter().lat()
        ,
        lng: map.getCenter().lng()
        ,
        layer: 'overlayLayer'
        ,
        content: '<div class="overlay_map"><img src="images/markeryellow.png" alt="marker"></div>'
        ,
        verticalAlign: 'top'
        ,
        horizontalAlign: 'center'
    });
}

//* Initializing Navbar Scrolling and adding Class
$(".scroll").on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
});
$(' #myNavbar ul  li  a ').on('click',function(){
    $('#myNavbar').addClass('sidenav');
});
// For adding a new class to change style and logo
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 70) { // Set position from top to add class
        $('.navbar').addClass("shrink");
        $('.navbar-brand  img').attr('src', 'images/appland_logo_colorful.png');
    }else{
        $('.navbar').removeClass("shrink");
        $('.navbar-brand  img').attr('src', 'images/appland_logo.png');
    }
});
//* For Hiding CSS Loader When Page Is Loaded
$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
});

// Number Counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// Fancy Boxs
$("[data-fancybox]").fancybox({
    // Options will go here
    onInit : function( instance ) {
        instance.$refs.downloadButton = $('<a download class="fancybox-button fancybox-download"></a>')
            .appendTo( instance.$refs.buttons );
    },
    beforeMove: function( instance, current ) {
        instance.$refs.downloadButton.attr('href', current.src);
    }
});