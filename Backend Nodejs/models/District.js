let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        stateid : { type : Schema.Types.ObjectId, ref : "states" },
        name : { type : String, required : true, unique : true}
    }
)

let District = mongoose.model("districts", schema);

module.exports = District;