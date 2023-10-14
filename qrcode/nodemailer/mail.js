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
      html: "<b>Hello world?</b>",
      attachments: [
        {
            filename: 'note.txt',
            // my content here
            content: 'Some notes about this e-mail',  
            contentType:'text/plain'
        },
        {
            filename: 'image.png',
            content: Buffer.from(
                'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                    '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                    'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                'base64'
            ),
        },
    ],
});
  
    console.log("Message sent: %s", info.messageId);
  }
  main().catch(console.error);