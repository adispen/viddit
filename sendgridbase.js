var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid('adisp', 'CF2D123518F62');
sendgrid.send({
  to: 'aedan.dispenza@gmail.com',
  from: 'aedan.dispenza@gmail.com',
  subject: 'Hello World',
  text: 'My first email through SendGrid'
}, function(success, message) {
  if (!success) {
    console.log(message);
  }
});