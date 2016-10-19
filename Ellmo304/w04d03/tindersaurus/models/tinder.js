const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: String,
  age: Number,
  species: String,
  image: String,
  hasChildren: Boolean,
  bodyShape: String
});

module.exports = mongoose.model("Profile", profileSchema);
