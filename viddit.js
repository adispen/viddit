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
		var title1 = title1[0].title
		var title2 = title2[0].title
		var title3 = title3[0].title
		var href1 = href1[0].href
		//var href1a = 'http://www.youtube.com/embed/'+href1.substring(31,href1.length);
		var href2 = href2[0].href
		var href3 = href3[0].href
		var permalink1 = permalink1[0].permalink
		var permalink2 = permalink2[0].permalink
		var permalink3 = permalink3[0].permalink
		var currentdate = new Date(); 
		var datetime = + (currentdate.getMonth()+1)  + "/" 
				+ currentdate.getDate() + "/"
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();

		//once you have the info to send the email. write the 
	var Sendgrid = require("sendgrid-web");

    var sendgrid = new Sendgrid({
      user: "adisp",
      key: "C1A6BA43C4AA2"
    });

    var html = '<body><font color="black"><h1><center><br><br>Here are the top videos on Reddit for '+datetime+'!</center></h1></font><br><br><br><br><font color="black"><h1><center>'+title1+'</center></h1></font><center>'+href1+'</center><br><center><a href='+permalink1+'>View Comments on Reddit</a></center><br><br><br><br><font color="black"><h1><center>'+title2+'</center></h1></font><center>'+href2+'</center><br><center><a href='+permalink2+'>View Comments on Reddit</a></center><br><br><br><br><font color="black"><h1><center>'+title3+'</center></h1></font><center>'+href3+'</center><br><center><a href='+permalink3+'>View Comments on Reddit</a></center><br><br><br><br></body>'

    sendgrid.send({
      to: 'aedan.dispenza@gmail.com',
      from: 'hackruviddit@gmail.com',
      subject: 'Your Top Reddit Videos',
      html: html  
    
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success.");
      }
    });
		
})
});