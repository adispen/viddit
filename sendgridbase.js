var Sendgrid = require("sendgrid-web");

    var sendgrid = new Sendgrid({
      user: "adisp",
      key: "CF2D123518F62"
    });

    sendgrid.send({
      to: 'aedan.dispenza@gmail.com',
      from: 'hackruviddit@gmail.com',
      subject: 'Hello world!',
      html: '<h1>Hello world!</h1>'
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success.");
      }
    });