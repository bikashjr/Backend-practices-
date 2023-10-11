// inbuilt

const http = require('http');
const QRCode = require('qrcode')

// const moduleDate = require('./moduleDate');

//   create a server and listen is the port number 

http.createServer(async (req, res) => {
    // for qrcode generator 
    
    const qrUrl = await QRCode.toDataURL('https://www.instagram.com/');
    res.writeHead(200, { "content-type": "text/html" })
    
    res.write(`<img src =${qrUrl} />`);



    res.end()
}).listen(4001)


console.log("App is running on port 4001")







// to get the date 
// const Dato = moduleDate.myDate()
// console.log(Dato)

// to get the time
// const Times = moduleDate.myTime();
// console.log(Times)

// 200 is an "OK" status code

// Body content
// res.write("<b>Hello" + Dato + "noob Me</b>");
// res.write("<b> hello " + Times + " hi </b>");