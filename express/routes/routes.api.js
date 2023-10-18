const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Api is working")
})

router.get("/qr",(req,res)=>{
    res.send("Qr Api is working")
})

module.exports = router;