
 var Sendgrid = require("sendgrid-web");

    var sendgrid = new Sendgrid({
      user: "adisp",
      key: "AD4A1F547BBED"
    });

    sendgrid.send({
      to: 'hackruviddit@googlegroups.com',
      from: 'aedan.dispenza@sendgrid.com',
      subject: 'Hello world!',
      html: '<h1>Hello world!</h1>'
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success.");
      }
    });