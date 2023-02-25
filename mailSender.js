import nodemailer from "nodemailer";

export default class MailSender {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: true,
    port: 465,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  constructor() {}

  /**
   *  This functions returns emailOptions
   *
   * @param {string} subject
   * @param {string} text
   * @returns emailOptions
   */
  getEmailOptions(subject, text) {
    return {
      from: process.env.USER_EMAIL,
      to: process.env.EMAIL_RECIEVER,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };
  }

  /**
   * @param string
   * @void
   */
  sendEmailForHighIndex(index) {}

  /**
   * @param string
   * @void
   */
  sendEmailForLowIndex(index) {}

  sendMail() {
    this.transporter.sendMail(this.mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}
