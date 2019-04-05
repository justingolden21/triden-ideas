$(function() {
	let tag = window.location.href.split('#')[1];
	if(tag) {
		$('#' + tag + '-h').addClass('blue');
	}
});