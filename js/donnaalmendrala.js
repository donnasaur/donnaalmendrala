
// Get jQuery to promises us some JSON
var retrieveStatusUpdates = $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=donnamatata&callback=?&include_entities=true');

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

	$("a.fancybox_gallery").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'inside'
			},
			overlay	: {
				opacity : 0.8,
				css : {
					'background-color' : '#000'
				}
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
		
	});


	$('a.expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').slideToggle().siblings('.collapse:visible').slideUp();
        return false;
    });

});