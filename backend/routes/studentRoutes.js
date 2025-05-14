const express = require("express");
const router = express.Router();

const { postStudent } = require("../controller/controller");


router.post("/newstudent", postStudent);

module.exports = router;
