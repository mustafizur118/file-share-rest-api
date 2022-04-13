const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, 
            auth: {
                user: process.env.MAIL_USER, // generated user
                pass: process.env.MAIL_PASSWORD, // generated password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `FileShareApp <${from}>`, // sender address
        to: to, 
        subject: subject, 
        text: text, 
        html: html, 
    });
}