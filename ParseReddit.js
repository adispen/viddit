var jsdom = require('jsdom');

jsdom.env({
	html: 'http://reddit.com/domain/youtube.com',
	scripts: ['http://code.jquery.com/jquery.js'],
	done: (function (errors, window) {
		var $ = window.$;
		var stories = $.map($('#siteTable .thing:lt(3)'), function (thing) {
			return { 
			title: $('a.title', thing).text(),
			href: $('a.title', thing).attr('href'),
			permalink: $('a.comments', thing).attr('href'),
		};
	});

	console.log(stories);

})
});