const express = require ("express")

const PORT  = 3333 ;
const app = express();

app.get('/',(req,res)=>{
    res.send("hello express buddy")
})


app.listen(`${PORT}`);
console.log(`App is running on ${PORT}`)

