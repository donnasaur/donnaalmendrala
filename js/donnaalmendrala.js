
// Get jQuery to promises us some JSON
var retrieveStatusUpdates = $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=donnamatata&callback=?');

// Wait for the page to be ready
$(function() {
	
	// Find the container for the tweet.
	var container = $('#balloon');
	
	// Wait for the promise to be fulfilled
    retrieveStatusUpdates.then(
		function(statusUpdates) {
			
			// Then set the text of the container to the latest tweet.
			var currentStatus = statusUpdates[0];
			
			container.text(currentStatus.text);	
		},
		function() {
			
			// Or set the text to some default.
			container.text("I don't know!");
		}
	);
		
});

// Future learning: jQuery effects!
// $('.content > h1').toggle(function() { $(this).next().slideUp() }, function() { $(this).next().slideDown(); }).next().hide();

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a.fancybox_gallery").fancybox({
		'titlePosition'	:	'over',
		'onComplete'	:	function() {
			$("#fancybox-wrap").hover(function() {
				$("#fancybox-title").show();
			}, function() {
				$("#fancybox-title").hide();
			});
		}
	});
});