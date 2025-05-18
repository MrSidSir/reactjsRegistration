const express = require("express");
const router = express.Router();
const { createEmployee, getEmployees } = require("../controller/employeeController");

// POST route to register employee
router.post("/register", createEmployee);

// GET route to fetch all employees
router.get("/", getEmployees); // e.g., /api/employee

module.exports = router;
