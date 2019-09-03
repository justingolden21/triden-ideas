$(function() {
	$('#col-security').hover(function() {
		$('#lock-open-icon').css('display', 'none');
		$('#lock-closed-icon').css('display', 'inline');
	});
	$('#col-security').mouseleave(function() {
		if(! $(this).hasClass('active') ) {
			$('#lock-open-icon').css('display', 'inline');
			$('#lock-closed-icon').css('display', 'none');			
		}
	});

	$('#col-infra').hover(function() {
		$('.extra-server-icon').css('display', 'inline');
		$('.fa-server').css('margin', '0px 10px');
	});
	$('#col-infra').mouseleave(function() {
		if(! $(this).hasClass('active') ) {
			$('.extra-server-icon').css('display', 'none');
			$('.fa-server').css('margin', '0px 0px');
		}
	});


	$('#slider').slick({
		// dots: true
		// autoplay: true,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 750
	});

	$('.big-col-inner').find('.learn-more-btn').addClass('hidden');

	$('#slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.big-col-inner').removeClass('active');
		$('#col-'+ 'cloud security infra'.split(' ')[nextSlide]).addClass('active');

		$('.big-col-inner').find('.learn-more-btn').addClass('hidden');
		$('#col-'+ 'cloud security infra'.split(' ')[nextSlide]).find('.learn-more-btn').removeClass('hidden');

		if(nextSlide==1) {
			$('#lock-open-icon').css('display', 'none');
			$('#lock-closed-icon').css('display', 'inline');
		} else {
			if(! $('#col-security').is(':hover') ) {
				$('#lock-open-icon').css('display', 'inline');
				$('#lock-closed-icon').css('display', 'none');
			}
		}
		if(nextSlide==2) {
			$('.extra-server-icon').css('display', 'inline');
			$('.fa-server').css('margin', '0px 10px');
		} else {
			if(! $('#col-infra').is(':hover') ) {
				$('.extra-server-icon').css('display', 'none');
				$('.fa-server').css('margin', '0px 0px');
			}
		}
		// console.log(nextSlide);
	});

	$('#col-cloud').hover(function() {
		$('#slider').slick('goTo', 0);
	}
	,function() {$('#slider').slick('goTo', 3);}
	);
	$('#col-security').hover(function() {
		$('#slider').slick('goTo', 1);
	}
	,function() {$('#slider').slick('goTo', 3);}
	);
	$('#col-infra').hover(function() {
		$('#slider').slick('goTo', 2);
	}
	,function() {$('#slider').slick('goTo', 3);}
	);

	// $('.big-col-inner').hover(function() {
	// 	$('#slider').slick('slickPause');
	// 	// $('html, body').animate({
	// 	// 	scrollTop: $('#headline-slogan').offset().top
	// 	// }, 750);
	// });

	$('#slider').hover( ()=> $('#slider').slick('slickPause') );

	// $('#col-cloud').addClass('active');
	$('#slider').slick('goTo', 3);

	// $('#hex-video').prop('playbackRate',2);

});