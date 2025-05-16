const express = require('express');
const router = express.Router();
const { createEmployee } = require('../controller/employeeController');

router.post('/register', createEmployee);

module.exports = router;
