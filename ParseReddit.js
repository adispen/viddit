var jsdom = require('jsdom');

jsdom.env({
	html: 'http://reddit.com/r/videos',
	scripts: ['http://code.jquery.com/jquery.js'],
	done: (function (errors, window) {
		var $ = window.$;
		var stories = $.map($('#siteTable .thing'), function (thing) {
			return { 
			title: $('a.title', thing).text(),
			href: $('a.title', thing).attr('href'),
			score: $('.score.unvoted', thing).text(),
			numComments: $('a.comments', thing).text().match(/^[0-9]*/)[0] || 0
		};
	});

	console.log(stories);

})
});