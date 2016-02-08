jQuery(function ($) {
    'use strict';




    //Scroll Menu

    function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 405) {
                    $('.main-nav').addClass('fixed-menu');  // rajouter les classes animated slideInDown pour rétablir l'animation
                } else {
                    $('.main-nav').removeClass('fixed-menu');
                }
            });
        } else {

            $('.main-nav').addClass('fixed-menu');

        }
    }

    menuToggle();


    // Carousel Auto Slide Off
    $('#event-carousel, #historique-feed, #sponsor-carousel ').carousel({
        interval: false
    });


    // Contact form validation
    var form = $('.contact-form');
    form.submit(function () {
        'use strict',
                $this = $(this);
        $.post($(this).attr('action'), function (data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });


// Menu responsive 

    $(window).resize(function () {
        menuToggle();
    });



if ($(window).width() > 479) {
    $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 500,
        scrollOffset: 0,
        scrollThreshold: 0.3,
        filter: ':not(.no-scroll)'
    }); }
    
    else {
  $('.navbar-toggle').on("click",function(){
    $('.main-nav ul').fadeIn();
       $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 500,
        scrollOffset: 0,
        scrollThreshold: 0.3,
        filter: ':not(.no-scroll)',
        end: function() {
            $('.main-nav ul').fadeOut();
        }

});  
    });  
    }




});


// Google Map Customization
// Pour modifier le pointeur de la carte, remplacez la lattitude (lat) et longitude (lng). La première partie GMaps permet de pointer vers la localisation, et la seconde permet de placer un marqueur sur la carte. Il est également possible de modifier le niveau de zoom avec l'onglet zoom. 
(function () {

    var map;

    map = new GMaps({
        el: '#gmap',
        lat: 50.64899, // lattitude 
        lng: 1.6307470000000421, // longitude
        scrollwheel: false,
        zoom: 16, // zoom de la carte. Diminuez la valeur pour baisser le niveau de zoom. 
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: false
    });

    var image = 'images/map-icon.png';
    map.addMarker({
        lat: 50.64899, // lattitude du pointeur
        lng: 1.6307470000000421, // longitude du pointeur
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#3e8bff',
    });


    var styles =[
        {
            "featureType": "road",
            "stylers": [
                {"color": "#b4b4b4"}
            ]
        }, {
            "featureType": "water",
            "stylers": [
                {"color": "#d8d8d8"}
            ]
        }, {
            "featureType": "landscape",
            "stylers": [
                {"color": "#f1f1f1"}
            ]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [
                {"color": "#000000"}
            ]
        }, {
            "featureType": "poi",
            "stylers": [
                {"color": "#d9d9d9"}
            ]
        }, {
            "elementType": "labels.text",
            "stylers": [
                {"saturation": 1},
                {"weight": 0.1},
                {"color": "#000000"}
            ]
        }

    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");
}());



