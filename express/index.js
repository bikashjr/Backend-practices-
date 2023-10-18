const express = require ("express")
const PORT  = 3333 ;
const app = express();
const indexRouter = require('./routes')

app.use("/",indexRouter);

app.listen(`${PORT}`);
console.log(`App is running on ${PORT}`)

