  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    // $('.featured-post-slider').slick({
    //   infinite: true,
    //   horizontal: true,
    //   verticalSwiping: true,
    //   arrows: false,
    //   dots: true,
			// autoplay: true,
			// autoplaySpeed: 4000,
			// // adaptiveHeight: true,
    //   responsive: [{
    //     breakpoint: 600,
    //     settings: {
    //       vertical: false,
    //       verticalSwiping: false,
    //     }
    //   }]
    // });

    // // venobox initialize
    // $('.venobox').venobox();

  })(jQuery);

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
