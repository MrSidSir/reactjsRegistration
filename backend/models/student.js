const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },

    course: {
    type: String,
    required: true,
    },
     gender: {
    type: String,
    required: true,
     },

 message: {
    type: String,
    required: true,
 },
    
});

module.exports = mongoose.model("Student", studentSchema);
