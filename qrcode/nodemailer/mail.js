const nodemailer = require ("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ghimirebikash41@gmail.com",
      pass: "otlq zyhc ezww ltez",
    },
  });
  async function main() {
    const info = await transporter.sendMail({
      from: '"ghimirebikash41@gmail.com>', 
      to: "ghimirebikash41@gmail.com",
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>"
});
  
    console.log("Message sent: %s", info.messageId);
  }
  main().catch(console.error);