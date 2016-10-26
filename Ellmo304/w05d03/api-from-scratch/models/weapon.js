const mongoose  = require("mongoose");
const bcrypt    = require("bcrypt");
const validator = require("validator");

const weaponSchema = new mongoose.Schema({
  type: { type: String, trim: true, required: true },
  weaponName: { type: String, trim: true, required: true, unique: true },
  physicalDMG: { type: Number, required: true, trim: true },
  autoAttack: { type: Number, required: true, trim: true },
  delay: { type: Number, required: true, trim: true },
  image: { type:String, required:true, trim: true, unique: true}
});


module.exports = mongoose.model("Weapon", weaponSchema);
