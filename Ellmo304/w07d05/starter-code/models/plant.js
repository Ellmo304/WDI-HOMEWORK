const mongoose = require('mongoose');

const plantsSchema = new mongoose.Schema({
  species: { type: String, required: true, trim: true },
  variety: { type: String, required: true, trim: true },
  hardy: { type: Boolean, required: true },
  image: { type: String }
});

module.exports = mongoose.model('Plant', plantsSchema);
