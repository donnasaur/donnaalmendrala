
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

// Future learning: jQuery effects!
$(function() {

	 $('a.expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').slideToggle().siblings('.collapse:visible').slideUp();
        return false;
    });
	//$('.content > h1').toggle(function() { $(this).next().slideDown() }, function() { $(this).next().slideUp(); });
	//$('.content > h1').toggle(function() { $(this).next().slideUp() }, function() { $(this).next().slideDown(); }).next().hide();
	
});