const nodemailer = require("nodemailer");
const keys = require("../config/dev");

class Mailer {
  constructor({ subject, recipients }, content) {
    this.subject = subject;
    this.content = content;
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }

  async send() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shadadaab26@gmail.com", // Your Gmail email address
        pass: "ukjl hwfj qkgs hwwd", // Your Gmail password or app-specific password
      },
    });

    for (const recipient of this.recipients) {
      const mailOptions = {
        from: "shadadaab@gmail.com", // Your sender email address
        to: recipient, // The recipient's email address
        subject: this.subject,
        html: this.content,
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
      } catch (error) {
        console.error("Error sending email:", error);
        throw error;
      }
    }
  }
}

module.exports = Mailer;
