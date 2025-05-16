const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  qualification: { type: String, required: true },
  jobRole: { type: String, required: true },
  currentJob: { type: String, required: true },
  expectedSalary: { type: String, required: true },
  maritalStatus: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
