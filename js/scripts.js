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
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 750
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
	});
	$('#col-security').click(function() {
		$('#slider').slick('goTo', 1);
	});
	$('#col-infra').click(function() {
		$('#slider').slick('goTo', 2);
	});

	$('#col-cloud').addClass('active');
	

});