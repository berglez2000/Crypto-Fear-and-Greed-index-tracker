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
  sendEmailForHighIndex(index) {
    const options = this.getEmailOptions(
      `Market je GREEDY. Index je: ${index}`,
      `Market postaja vroč. Razmišljaj o prodaji. Index je ${index}`
    );

    this.sendMail(options);
  }

  /**
   * @param string
   * @void
   */
  sendEmailForLowIndex(index) {
    const options = this.getEmailOptions(
      `Market je FEARFUL. Index je: ${index}`,
      `Market postaja prestrašen. Razmišljaj o nakupu. Index je ${index}`
    );

    this.sendMail(options);
  }

  sendMail(mailOptions) {
    this.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}
