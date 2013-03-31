var jsdom = require('jsdom');

jsdom.env({
	html: 'http://reddit.com/domain/youtube.com',
	scripts: ['http://code.jquery.com/jquery.js'],
	done: (function (errors, window) {
		var $ = window.$;
		var title1 = $.map($('#siteTable .thing:eq(1)'), function (thing) {
			return{ 
				title: $('a.title', thing).text(),
			}
		});
		var title2 = $.map($('#siteTable .thing:eq(2)'), function (thing) {
			return{ 
				title: $('a.title', thing).text(),
			}
		});
		var title3 = $.map($('#siteTable .thing:eq(3)'), function (thing) {
			return{ 
				title: $('a.title', thing).text(),
			}
		});
		var href1 = $.map($('#siteTable .thing:eq(1)'), function (thing) {
			return{ 
				href: $('a.title', thing).attr('href'),
			}
		});
		var href2 = $.map($('#siteTable .thing:eq(2)'), function (thing) {
			return{ 
				href: $('a.title', thing).attr('href'),
			}
		});
		var href3 = $.map($('#siteTable .thing:eq(3)'), function (thing) {
			return{ 
				href: $('a.title', thing).attr('href'),
			}
		});
		var permalink1 = $.map($('#siteTable .thing:eq(1)'), function (thing) {
			return{ 
				permalink: $('a.comments', thing).attr('href'),
			}
		});
		var permalink2 = $.map($('#siteTable .thing:eq(2)'), function (thing) {
			return{ 
				permalink: $('a.comments', thing).attr('href'),
			}
		});
		var permalink3 = $.map($('#siteTable .thing:eq(3)'), function (thing) {
			return{ 
				permalink: $('a.comments', thing).attr('href'),
			}
		});
		console.log(permalink3)
})
});