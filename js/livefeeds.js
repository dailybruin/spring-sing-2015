//Twitter feed 
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id))
				{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Instafeed: github.com/stevenschobert/instafeed.js
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'springsing2015',
    clientId: 'bae7ab0c06204012bc64b451d0d5d465',
    template:  '<a class="instagram-feed"><img src="{{image}}" /></a>',
    });
feed.run();