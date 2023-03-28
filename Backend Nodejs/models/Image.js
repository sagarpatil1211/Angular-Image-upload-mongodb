let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true},
        image : { type : String, required : true},
   
    }
)

let Business = mongoose.model("businesses", schema);

module.exports = Business;