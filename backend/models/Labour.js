const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  job: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Labour', labourSchema);
