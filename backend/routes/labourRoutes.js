const express = require('express');
const router = express.Router();
const { createLabour } = require('../controller/labourController');

router.post('/register', createLabour);

module.exports = router;
