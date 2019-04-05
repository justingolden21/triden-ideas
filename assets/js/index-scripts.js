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

	$('.big-col-inner').click(function() {
		$('html, body').animate({
			scrollTop: $('#headline-slogan').offset().top
		}, 750);
	});

	$('#col-cloud').addClass('active');
	

	$('#cloud-learn-more').click(function() {
		// window.open('/cloud/', '_self');
		window.open('/solutions/#cloud', '_self');
	});
	$('#security-learn-more').click(function() {
		// window.open('/security/', '_self');
		window.open('/solutions/#security', '_self');
	});
	$('#infra-learn-more').click(function() {
		// window.open('/infrastructure/', '_self');
		window.open('/solutions/#infrastructure', '_self');
	});

});