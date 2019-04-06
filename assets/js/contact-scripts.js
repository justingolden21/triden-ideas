$(function() {

	$('.fa-map-marker-alt').hover(
		function() {
			console.log('aaa');
			$(this).animate({
				marginTop: '20px'
			}, 200).animate(
				{ marginTop: '10px'
			}, 100);
		},
		function() {
			console.log('aaa');
			$(this).animate({
				marginTop: '0px'
			}, 100);
		},		
	);

});
