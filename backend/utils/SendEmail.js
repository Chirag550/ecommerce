const nodemailer = require("nodemailer");

const SendMail = async (options) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "tcmonlineshop@gmail.com",
      pass: "9034338894",
      clientId:
        "399229361435-cu4ncdp9ojivdko66hnling67ajl4oir.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04t9iZvP_4ArRCgYIARAAGAQSNwF-L9IrX0TPWwKVlwA4V3PPu0c3G7ZJzw8DED8QaWG_K1dnioFUFHToyPawCI0b4PNtC-Vq-5A",
    },
  });

  let mailDetails = {
    from: "chiragmunjal550@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.Message,
  };
  await mailTransporter.sendMail(mailDetails);
};

module.exports = SendMail;
