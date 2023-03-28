let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true},
        imagepath : { type : String, required : true},
   
    }
)

let Image = mongoose.model("images", schema);

module.exports = Image;