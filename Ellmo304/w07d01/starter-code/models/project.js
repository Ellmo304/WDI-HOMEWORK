const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  github: String,
  url: String,
  users: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model("Project", projectSchema);
