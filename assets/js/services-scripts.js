$(function() {
	$('details').click(function(evt) {
		$('details').not(this).removeAttr('open');
		$('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');

		if(! $(this).prop('open') )
			$(this).find('.fa-caret-right').addClass('fa-caret-down').removeClass('fa-caret-right');
		else
			$(this).find('.fa-caret-down').addClass('fa-caret-right').removeClass('fa-caret-down');
	});
});