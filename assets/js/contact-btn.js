$(function() {
	$('#contact-btn').click(function() {
		window.open('/contact/', '_self');
	});
	if($('#home-btn') ) {
		$('#home-btn').click(function() {
			window.open('/index/', '_self');
		});		
	}

});