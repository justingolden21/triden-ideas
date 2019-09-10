// let firstClick = true;

$(function() {

	// $('#about-logo').hide().fadeIn(2000);
	$('#about-logo').animate({
		width: 96
	});

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
		autoplay: true,
		// autoplay: false,
		autoplaySpeed: 4000,
		// speed: 750
		speed: 500
	});

	$('#slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.big-col-inner').removeClass('active');
		$('#col-'+ 'cloud security infra'.split(' ')[nextSlide]).addClass('active');
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

	$('#col-cloud').click(function() {
		$('#slider').slick('goTo', 0);
		$('#slider').removeClass('hidden');
	});
	$('#col-security').click(function() {
		$('#slider').slick('goTo', 1);
		$('#slider').removeClass('hidden');
	});
	$('#col-infra').click(function() {
		$('#slider').slick('goTo', 2);
		$('#slider').removeClass('hidden');
	});

	$('.big-col-inner').click(function() {
		$('#slider').slick('slickPause');
		// if(firstClick) {
			// firstClick = false;
			$('html, body').animate({
				scrollTop: $('#about-us-div').offset().top + 200
			}, 500);
		// }

	});

	$('#slider').click( ()=> $('#slider').slick('slickPause') );

	$('#col-cloud').addClass('active');
	$('#slider').slick('goTo', 0);
	$('#slider').removeClass('hidden');

	// $('#hex-video').prop('playbackRate',2);

});