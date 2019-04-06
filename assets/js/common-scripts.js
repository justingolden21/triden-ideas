$(function() {

	$('#menu-btn').click(function() {
		if($('#menu-icon').hasClass('fa-bars') ) {
			$('#menu-icon').addClass('fa-times');
			$('#menu-icon').removeClass('fa-bars');
		} else {
			$('#menu-icon').addClass('fa-bars');
			$('#menu-icon').removeClass('fa-times');
		}
	});

	$('.fa-envelope').hover(
		function() {
			$(this).addClass('fa-envelope-open');
			$(this).removeClass('fa-envelope');
		},
		function() {
			$(this).removeClass('fa-envelope-open');
			$(this).addClass('fa-envelope');
		}
	);

});
