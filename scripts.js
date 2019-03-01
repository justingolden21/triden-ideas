$(function() {
	$('#col-security').hover(function() {
		$('#lock-open-icon').css('display', 'none');
		$('#lock-closed-icon').css('display', 'inline');
	});
	$('#col-security').mouseleave(function() {
		$('#lock-open-icon').css('display', 'inline');
		$('#lock-closed-icon').css('display', 'none');
	});


	$('#col-infra').hover(function() {
		$('.extra-server-icon').css('display', 'inline');
	});
	$('#col-infra').mouseleave(function() {
		$('.extra-server-icon').css('display', 'none');
	});

});