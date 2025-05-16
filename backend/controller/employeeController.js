const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEmployee };
