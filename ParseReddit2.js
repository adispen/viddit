var jsdom = require('jsdom');

jsdom.env({
	html: 'http://reddit.com/domain/youtube.com',
	scripts: ['http://code.jquery.com/jquery.js'],
	done: (function (errors, window) {
		var $ = window.$;
		var stories = $.map($('#siteTable .thing:lt(1)'), function (thing) {
			stories.title1 = $('a.title', thing).text(),
			stories.href1= $('a.title',thing).attr('href')'
			stories.permalink1= $('a.comments', thing).attr('href'),
		};
		var stories = $.map($('#siteTable .thing:lt(2)'), function (thing) {
			stories.title2 = $('a.title', thing).text(),
			stories.href2= $('a.title',thing).attr('href')'
			stories.permalink2= $('a.comments', thing).attr('href'),
		};
		var stories = $.map($('#siteTable .thing:lt(3)'), function (thing) {
			stories.title3 = $('a.title', thing).text(),
			stories.href3= $('a.title',thing).attr('href')'
			stories.permalink3= $('a.comments', thing).attr('href'),
		};
	});

	console.log(stories.title2);

})
});
