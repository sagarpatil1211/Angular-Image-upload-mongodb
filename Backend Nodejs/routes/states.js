let express = require("express");
let State =require("../models/State")
let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    let object = new State(body);
    object.save().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    State.findByIdAndUpdate(id,body).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.get("/", (req,res)=>{
    State.find().sort({name : 1}).then(result=>{
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
    State.findById(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
})

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    State.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
})



module.exports = router;