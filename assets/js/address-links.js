$(function() {
	// convert address tags to google maps links - made by Michael Jasper
	$('p.address').each(function() {
		let link = '<a href=""https://maps.google.com/maps?q=' + encodeURIComponent($(this).text() ) + '" target="_blank">' + $(this).text() + '</a>';
		$(this).html(link);
		console.log(link);
	});
});