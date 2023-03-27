let express = require("express");
let Admin = require("../models/Admin");
let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;

    Admin.find({username : body.username, password : body.password}, { password : 0, email:0, mobileno :0, _id:0}).then(result=>{
        if(result.length > 0){
            res.end(JSON.stringify({status : "success", data : result[0]}));
        }
        else{
        res.end(JSON.stringify({status : "failed", data : "Invalid Credentials"}));        

        }
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

module.exports = router;