let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        username : { type : String , required : true },
        email : { type : String , required : true, unique : true},
        mobileno : { type : String , required : true, unique : true},
        password : { type : String , required : true },
        usertype : { type : String , required : true }
    }
)

let Admin = mongoose.model("admins",schema);

module.exports = Admin;