const nodemailer = require('nodemailer');

const sendMail = (day, time, link, mail) => {

        let message = '';

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_MAIL, 
                pass: process.env.USER_PASSWORD           
        }
        });

        let mailOptions = {
        from: 'noreply.lunar.doctor@gmail.com',
        to: 'rogers.ramirez2008@gmail.com', //'r.alberto.usa2018@gmail.com',
        subject: 'Appointment Scheduled on ' + day,
        text: `
                Welcome to Lunar Video Doctor
                
                Dear ${mail}, Your Appointment has been set:

                Day: ${day}
                Time: ${time}
                Link: ${link}
                
                Please Don't reply this massege`//'That was easy!' // here the link and the welcome to the consultation
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            message = 'Email sent successfully to ' + mail
            console.log('Email sent: ' + info.response);
        }
        });

        return message;
  };

  module.exports = sendMail;