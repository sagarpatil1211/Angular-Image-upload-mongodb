let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        name : { type : String, required : true, unique : true}
    }
)

let State = mongoose.model("states", schema);

module.exports = State;