
 var Sendgrid = require("sendgrid-web");

    var sendgrid = new Sendgrid({
      user: "adisp",
      key: "AD4A1F547BBED"
    });

    sendgrid.send({
      to: 'aedan.dispenza@gmail.com',
      from: 'hackruviddit@googlegroups.com',
      subject: 'Hello world!',
      html: '<h1>Hello world!</h1>'
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success.");
      }
    });