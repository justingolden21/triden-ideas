$(function() {

	// update menu icon
	$('#menu-btn').click(function() {
		if($('#menu-icon').hasClass('fa-bars') ) {
			$('#menu-icon').addClass('fa-times');
			$('#menu-icon').removeClass('fa-bars');
		} else {
			$('#menu-icon').addClass('fa-bars');
			$('#menu-icon').removeClass('fa-times');
		}
	});

	// perform search on button click or enter key
	$('#search-btn').click(doSearch);
	$('#search-input').on('keypress', (evt)=> {
		if(evt.which == 13) // enter key
			doSearch();
	});

});

let searchables = 'about services solutions contact support cloud security infrastructure'.split(' ');

let searchablesPretty = [];
for(let i=0; i<searchables.length; i++) {
	let str = searchables[i].charAt(0).toUpperCase() + searchables[i].slice(1);
	searchablesPretty.push(str);
}

// set to true in index scripts only
let isHome = false;

function doSearch() {
	let val = $('#search-input').val().toLowerCase().trim();
	if(val=="") return;

	for(let i=0; i < searchables.length; i++) {
		if(searchables[i].indexOf(val) != -1) { // found
			if(isHome) // on homepage
				window.open(searchables[i] + '/index.html', '_self');
			else
				window.open('../' + searchables[i] + '/index.html', '_self');
			
			return;
		}
	}
}

// https://twitter.github.io/typeahead.js/examples/
let substringMatcher = function(strs) {
	return function findMatches(q, cb) {
		let matches, substringRegex;

		// an array that will be populated with substring matches
		matches = [];

		// regex used to determine if a string contains the substring `q`
		substrRegex = new RegExp(q, 'i');

		// iterate through the pool of strings and for any string that
		// contains the substring `q`, add it to the `matches` array
		$.each(strs, function(i, str) {
			if (substrRegex.test(str)) {
				matches.push(str);
			}
		});

		cb(matches);
	};
};

$('#search-form .typeahead').typeahead({
	hint: true,
	highlight: true,
	minLength: 1
},
{
	name: 'searchables',
	source: substringMatcher(searchablesPretty)
});
