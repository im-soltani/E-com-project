/* eslint-disable quotes */
const mailer = require("nodemailer");
// const { Hello } = require("./hello_template");
// const { Thanks } = require("./thanks_template");
let getResponse = {};
const getEmailData = (email, subject, description) => {
  let data = null;
  data = {
    from: email,
    to: "othmankahlani@gmail.com",
    subject,
    html: description,
  };
  return data;
};

const sendEmail = (email, subject, description) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "othmankahlani@gmail.com",
      pass: "deutschland000",
    },
  });

  const mail = getEmailData(email, subject, description);

  smtpTransport.sendMail(mail, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
      console.log(response, "response");
      getResponse = { success: true };
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail, getResponse };
