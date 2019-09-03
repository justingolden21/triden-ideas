$(function() {
	$('details').click(function(evt) {
		$('details').not(this).removeAttr('open');
	});
});