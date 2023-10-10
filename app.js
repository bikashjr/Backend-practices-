// inbuilt
const http = require('http');
const moduleDate = require('./moduleDate');

//   create a server and listen is the port number 
http.createServer((req, res) => {

    // to get the date 
    const Dato = moduleDate.myDate()    
    
    // to get the time
    const Times = moduleDate.myTime();
    
   console.log(Dato)

    // 200 is an "OK" status code 
    res.writeHead(200, { "content-type": "text/html" })

    // Body content
    res.write("<b>Hello" + Dato + "noob Me</b>");   
    res.write("<b> hello " + Times + " hi </b>");

    res.end()
}).listen(4001)


console.log("App is running on port 4001")





