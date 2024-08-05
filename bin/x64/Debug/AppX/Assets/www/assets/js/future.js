/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#FUTURE 2014 - The ultimate countdown 8:1
	@Author		   Torros / Madeon08
	@Type          Javascript
	@Last Update   2:10 PM Thursday, July 3rd, 2014

	TABLE OF CONTENTS
	---------------------------
	 1. Loading
	 2. Countdown
	 3. Carousel
	 4. Map
	 5. Notify
	 6. Popup
	 7. Video
	 8. Buttons, Links & Animations
	 9. Newsletter
	10. Tooltip

  =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* /

/* ***** 1. Loading ***** */
		
$(window).load(function() {
	
	$('.globload').delay(2000).fadeOut("slow")
	
	setTimeout(function() {
		$('h1.tlt').textillate({ in: { effect: 'fadeInUp', shuffle: false, delayScale: 2.0  } });
	}, 2000);
	
	setTimeout(function() {
	
	$(".tlt").addClass("fadeOut animated");
	}, 6000);
	
	setTimeout(function() {
	
	$(".tlt").addClass("display-none");
	}, 8500);
		
	setTimeout(function() {
	
			$("#main-future").removeClass("opacity-0").addClass("opacity-1 animated fadeIn");
			$("#progress2").removeClass("opacity-0").addClass("opacity-1 animated slideInUp");
			$(".control-video").removeClass("opacity-0").addClass("opacity-1 animated fadeIn");
			$("#tit-main").addClass("animated fadeInDown");
			$(".border").addClass("animated fadeInUp");
			$(".link-box").addClass("animated fadeInUp");
		
		}, 8500);
	
	setTimeout(function() {
		
		$(".days_dash").addClass("animated fadeInDown opacity-1");
		}, 8500);
	
	setTimeout(function() {
	
		$(".hours_dash").addClass("animated fadeInDown opacity-1");
		}, 9000);
	
	setTimeout(function() {
	
		$(".minutes_dash").addClass("animated fadeInDown opacity-1");
		}, 9500);
	
	setTimeout(function() {
		$(".seconds_dash").addClass("animated fadeInDown opacity-1");
		}, 10000);
		
});

/* **** 2. Countdown **** */		

jQuery(document).ready(function() {
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		24,
			'month': 	12,
			'year': 	2015,
			'hour': 	11,
			'min': 		13,
			'sec': 		0
		},
		omitWeeks: true
	});
	
	
	/* **** 3. Carousel **** */
	
	$('.carousel').carousel({
	  interval: 5000
	})
	
	/* ****** 4. Map ******* */
	
	// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		google.maps.event.addDomListener(window, 'resize', init);
		
		function init() {
	
			var myLatlng = new google.maps.LatLng(49.6122021,6.1324549,17);
	
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			draggable: false,
			
			// The latitude and longitude to center the map (always required)
			center: myLatlng,
			
			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [	{	stylers:[			{hue:'#ff1a00'},			{invert_lightness:true},			{saturation:-100},			{lightness:33},			{gamma:0.5}	]	},{		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#2D333C'}		]	}]
		};
	
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
			var contentString = '<div class="info-content"><h1 class="info-h1">We are here <small>28, Rue du Nord @ Luxembourg</small></h1><p>Located in the center of the city, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum euismod erat, nec porta turpis fringilla sed. Morbi euismod metus sagittis, gravida orci id, tincidunt odio. Pellentesque habitant morbi tristique.</p></div>';
	
			var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	
			var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});
	
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
	
	/* ****** 5. Notify ******* */
	// Activate notifyMe plugin on a '#notifyMe' element	
		$("#notifyMe").notifyMe();
			
});
	
/* ****** 6. Popup ******* */
	
$(document).ready(function() {

	$('#my_popup').popup({
		transition: 'all 1.2s'
	});

	$('#about-exp').popup({
		pagecontainer: '.container',
		transition: 'all 1.2s'
	});


/* ****** 7. Video ******* */

// **** Button for mute or unmute the video ****
	
	$('a#video-volume').click(function()
	{
		$('a#video-unmute').fadeIn('slow');
		$('a#video-volume').fadeOut('fast');
	});
	$('a#video-unmute').click(function()
	{
		$('a#video-unmute').fadeOut('fast');
		$('a#video-volume').fadeIn('slow');
	})
});
	
/* ****** 8. Buttons, Links & Animations ******* */	
	
jQuery(document).ready(function() {
	
	jQuery('a#supramap').click(function(){
		 jQuery('#map').addClass('frontoff');
		 jQuery('#close-map').addClass('sub-down');
		 jQuery('#main-future').addClass('fadeOut animated');
	});

    jQuery('a#about-anim').click(function(){
         jQuery('.about-p').addClass('fadeInLeft animated');
		 jQuery('#img-about').addClass('fadeInRight animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a#contact-anim').click(function(){
         jQuery('.cont-icon').addClass('fadeInUp animated');
		 jQuery('#main-cont').addClass('fadeInLeft animated');
		 jQuery('#text-cont').addClass('fadeInRight animated');
		 jQuery('.fullwidth').addClass('fadeInUp animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a.fa-comp').click(function(){
		 jQuery('#main-future').removeClass('fadeOut').addClass('fadeIn');
    });
	
	$(document).keyup(function(e) {

		if (e.keyCode == 27) { jQuery('#main-future').removeClass('fadeOut').addClass('fadeIn'); }   // keycode 27 is Esc
	
	});
	
	jQuery('a#close-map-top').click(function(){
		 jQuery('#map').removeClass('frontoff');
		 jQuery('#close-map').removeClass('sub-down');
		 jQuery('#main-future').removeClass("fadeOut").addClass("fadeIn");
    });
	
	jQuery('a#newsletter').click(function(){
         jQuery('#subscribe').toggleClass('sub-down');
    });
	
	$("a#fullscreen").click(function() {
	   if ($('#main-future').hasClass("fadeIn")) {
		  $('#main-future').removeClass("fadeIn").addClass("fadeOut animated");
		  return;
	   }
	   if ($('#main-future').hasClass("fadeOut")) {
		  $('#main-future').removeClass("fadeOut").addClass("fadeIn");
		  return;
	   }
	});
	
	jQuery('a.switch').click(function(){
         jQuery('#switcher').toggleClass('showing');
    });
	
});

/* ****** 9. Newsletter ******* */	

$("a#newsletter")
	.each(function(i) {
		
		if (i != 0) { 
		  $("#beep-two")
			.clone()
			.attr("id", "beep-two" + i)
			.appendTo($(this).parent()); 
		}
		
		$(this).data("beeper", i);
	  })
	  
	.mouseenter(function() {
		$("#beep-two" + $(this).data("beeper"))[0].play();
	});
		$("#beep-two").attr("id", "beep-two0");
		
/* ****** 10. Tooltip ******* */	

if (window.matchMedia("(min-width: 991px)").matches) {	
			
$(function () { $("[data-toggle='tooltip']").tooltip(); });

}