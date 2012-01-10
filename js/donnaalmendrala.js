
// Get jQuery to promises us some JSON
var retrieveStatusUpdates = $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=donnamatata&callback=?&include_entities=true&exclude_replies=true&include_rts=true');

console.log("I am executing");
// Wait for the page to be ready
$(function() {
	
	// Find the container for the tweet.
	var container = $('#balloon');
	console.log("I am ready");
	// Wait for the promise to be fulfilled
    retrieveStatusUpdates.then(
		function(statusUpdates) {
			console.log("I am not broken");
			// Then set the text of the container to the latest tweet.
			var currentStatus = statusUpdates[0];
			
			// Change link text to anchor tag text
			// Define variable with link regexp
			var linkRe = /http[s]?:\/\/[^\s]*/;
			
			// Find text that matches regexp and replace it with anchor tag			
			var linkedStatus = currentStatus.text.replace(linkRe, '<a href="$&" target="_blank">$&</a>'); 	
			
			// replace text in the balloon with correct and current Twitter status
			container.html(linkedStatus);
			
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