$(function() {
	$('#envelope').hover(
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