const router = require("express").Router();

router.get("/",async(req,res)=>{
    console.log(req);

})
router.post('/' , async (req,res) =>{});

module.exports = router;