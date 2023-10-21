const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Ui is working")
})
router.get("/",(req,res)=>{
    res.send("QR rendered")
})

module.exports = router;