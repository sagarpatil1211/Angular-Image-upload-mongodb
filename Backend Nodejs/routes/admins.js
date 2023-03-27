let express = require("express");
let Admin = require("../models/Admin");
let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;

    let object = new Admin(body);
    object.save().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
});

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    let body = req.body;

    Admin.findByIdAndUpdate(id,body).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
    
})

router.get("/", (req,res)=>{

    Admin.find().sort({name:1}).then(result=>{
        if(result.length > 0){
            res.end(JSON.stringify({status : "success", data : result}));
        }
        else{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
        }
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
    
})

router.get("/:id", (req,res)=>{
    let id = req.params.id;
    Admin.findById(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
    
})

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    Admin.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
    
})


module.exports = router;