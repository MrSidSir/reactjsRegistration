const express = require("express");
const router = express.Router();

const { postStudent, getStudents } = require("../controller/controller");


router.post("/newstudent", postStudent);
router.get("/get_student" , getStudents)

module.exports = router;
