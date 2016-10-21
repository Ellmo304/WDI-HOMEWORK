const mongoose = require("mongoose");


const guitarSchema =mongoose.Schema({
Make: String,
Model: String,
Colour: String,
Frets: String
 
});





module.exports= mongoose.model("Guitar", guitarSchema);
