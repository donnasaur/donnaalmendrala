
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
		},
		cyclic	: 'true',
		enableEscapeButton: 'true'
		
	});


	/*$('a.expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').slideToggle().siblings('.collapse:visible').slideUp();
        return false;
    });*/
    
    var items = [
    	"<div class=\"items\"><div class=\"thumb chimpcy\"><a class=\"fancybox_gallery\" href=\"images/chimpcy.png\" rel=\"Chimpcy\" title=\"&quot;Chimpcy&quot; Drawn for the <a href=&quot;http://www.cartoonstudies.org/index.php/2012/05/20/read-the-cartoon-crier-online-today/&quot; target=&quot;_blank&quot; alt=&quot;http://www.cartoonstudies.org/index.php/2012/05/20/read-the-cartoon-crier-online-today/&quot;>Center for Cartoon Studies and National Cartoonists Society: Cartoon Crier</a> (2012)\">Chimpcy</a></div><div class=\"thumb ss2\"><a class=\"fancybox_gallery\" href=\"images/ss2_cover_front.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Front Cover\">Solstice Submarine II (2011) Front Cover</a></div><div><a class=\"fancybox_gallery\" href=\"images/ss2_ink_1.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Page 1\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/ss2_ink_2.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Page 2\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/ss2_ink_3.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Page 3\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/ss2_ink_4.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Page 4\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/ss2_cover_back.png\" rel=\"ss2\" title=\"&quot;Solstice Submarine&quot; (2011) Back Cover\"></a></div><div class=\"thumb showersecrets\"><a class=\"fancybox_gallery\" href=\"images/showersecrets.png\" rel=\"ShowerSecrets\" title=\"&quot;Shower Secrets&quot; from the Anthology Lies My Parents Told Me (2011)\">Shower Secrets</a></div><div class=\"thumb baby\"><a class=\"fancybox_gallery\" href=\"images/baby_p1.png\" rel=\"baby\" title=\"&quot;Baby&quot; (2011) Page 1\">Baby Page 1</a></div><div><a class=\"fancybox_gallery\" href=\"images/baby_p2.png\" rel=\"baby\" title=\"&quot;Baby&quot; (2011) Page 2\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/baby_p3.png\" rel=\"baby\" title=\"&quot;Baby&quot; (2011) Page 3\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/baby_p4.png\" rel=\"baby\" title=\"&quot;Baby&quot; (2011) Page 4\"></a></div><div class=\"thumb concretes\"><a class=\"fancybox_gallery\" href=\"images/concretes.png\" rel=\"noisepop2011\" title=\"&quot;The Concretes&quot; <a href=&quot;http://2011.noisepop.com/comics/&quot; target=&quot;_blank&quot; alt=&quot;http://2011.noisepop.com/comics/&quot;>NoisePop 2011 Concert Review</a>\">NoisePop2011</a></div><div class=\"thumb ss1\"><a class=\"fancybox_gallery\" href=\"images/submarine_p1.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Front Cover\">Solstice Submarine (2010) Front Cover</a></div><div><a class=\"fancybox_gallery\" href=\"images/submarine_p2.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Page 1\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/submarine_p3.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Page 2\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/submarine_p4.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Page 3\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/submarine_p5.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Page 4\"></a></div><div><a class=\"fancybox_gallery\" href=\"images/submarine_p6.png\" rel=\"ss1\" title=\"&quot;Solstice Submarine&quot; (2010) Back Cover\"></a></div></div>",
    	"<div class=\"items\"><div class=\"thumb jenslek\"><a class=\"fancybox_gallery\" href=\"images/jenslek_graveltoes.png\" rel=\"illustration\" title=\"D&D Character Portrait (2012)\">D&D Character Portrait</a></div><div class=\"thumb wayfarers\"><a class=\"fancybox_gallery\" href=\"images/wayfarers_ossus.png\" rel=\"illustration\" title=\"Wayfarers of Ossus Guild Banner (2012)\">Wayfarers of Ossus Guild Banner</a></div><div class=\"thumb macaque\"><a class=\"fancybox_gallery\" href=\"images/macaque_attack.png\" rel=\"illustration\" title=\"Macaque Attack Logo (2012)\">Macaque Attack Logo</a></div><div class=\"thumb lutescon\"><a class=\"fancybox_gallery\" href=\"images/lutescon_tshirt.png\" rel=\"illustration\" title=\"Silkscreen T-shirt Design with Jason Lutes for LutesCon (2011)\">Silkscreen T-shirt Design with Jason Lutes for LutesCon</a></div><div class=\"thumb selfportrait\"><a class=\"fancybox_gallery\" href=\"images/self_portrait.png\" rel=\"illustration\" title=\"Self-Portrait with Apologies to Ernie Bushmiller and Art Speigelman (2011)\">Self-Portrait with Apologies to Ernie Bushmiller and Art Spiegelman</a></div><div class=\"thumb thebeatus\"><a class=\"fancybox_gallery\" href=\"images/thebeatus_flyer.png\" rel=\"illustration\" title=\"The Beatus Concert Flyer (2011)\">The Beatus Concert Flyer</a></div><div class=\"thumb troll\"><a class=\"fancybox_gallery\" href=\"images/troll_gag.png\" rel=\"illustration\" title=\"Old Norse Gag (2011)\">Troll Gag</a></div><div class=\"thumb damonbot\"><a class=\"fancybox_gallery\" href=\"images/damonbot.png\" rel=\"illustration\" title=\"Damon-Bot Avatar (2011)\">Damon-Bot Avatar</a></div><div class=\"thumb gitcard\"><a class=\"fancybox_gallery\" href=\"images/gitcard.png\" rel=\"illustration\" title=\"Git Greeting Card (2011)\">Git Card</a></div><div class=\"empty\"></div><div class=\"thumb megadonna\"><a class=\"fancybox_gallery\" href=\"images/megadonna.png\" rel=\"illustration\" title=\"Screen-Printed Self-Portrait Mega-Man\">Self-Portrait</a></div></div>",
    	"<div class=\"items\"><div class=\"thumb piratehook1\"><a class=\"fancybox_gallery\" href=\"flash/underconstruction.swf\" rel=\"piratehook1\" title=\"Flash mockup for Design of Piratehook.com (2011)\">Under Construction</a></div><div><a class=\"fancybox_gallery\" href=\"images/piratehook_1.png\" rel=\"piratehook1\" title=\"Static Image for Design of Piratehook.com (2011)\"></a></div><div class=\"thumb piratehook2\"><a class=\"fancybox_gallery\" href=\"flash/404_vector.swf\" rel=\"piratehook2\" title=\"Flash mockup for Design of Piratehook.com/404 (2011)\">404</a></div><div><a class=\"fancybox_gallery\" href=\"images/piratehook_2.png\" rel=\"piratehook2\" title=\"Static Image for Design of Piratehook.com/404 (2011)\"></a></div><div class=\"thumb serverdm\"><a class=\"fancybox_gallery\" href=\"images/serverdm_64.gif\" rel=\"serverdm\" title=\"8-bit Pixel Art Animation (2012)\">ServerDM</a></div></div>"
    ];
    
    $('a.comics').click(
    	function() {
    		$('div.items').replaceWith(items[0]);
    	}
    );
    
    $('a.illustration').click(
    	function() {
    		$('div.items').replaceWith(items[1]);
    	}
    );
    
    $('a.animation').click(
    	function() {
    		$('div.items').replaceWith(items[2]);
    	}
    );

});