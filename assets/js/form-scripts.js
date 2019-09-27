function showAlert(success, text='') {
	$('#alert-div').html(
		'<div id="success-alert" class="alert alert-' + (success ? 'success' : 'danger') + ' alert-dismissible fade show" role="alert">' +
			(text != '' ? text : success ? 'Form submitted successfully' : 'Form not submitted') +
			'<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
				'<span aria-hidden="true">&times;</span>' +
			'</button>' +
		'</div>');
}

function showLoader() {
	$('#spinner').css('display', 'inline-block');
}
function hideLoader() {
	$('#spinner').css('display', '');
}