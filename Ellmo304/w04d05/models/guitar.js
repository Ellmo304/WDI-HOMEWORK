const mongoose = require("mongoose");


const guitarSchema = mongoose.Schema({
Make: String,
Model: String,
Picture: String,
Colour: String,
Frets: Number,
Price: String
});





module.exports= mongoose.model("Guitar", guitarSchema);
