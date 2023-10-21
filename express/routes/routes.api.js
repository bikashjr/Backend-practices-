const router = require("express").Router();
const qrApiRoutes = require('../modules/qr.api')

router.get("/",(req,res)=>{
    res.send("Api is working")
})

router.use('/qr',qrApiRoutes);


module.exports = router;