const Student = require("../models/student");

const postStudent = async (req, res) => {
  const {
    
    name,
    email,
    phone,
    gender,
    course,
    message,

  } = req.body;

  try {
    let student = await Student.findOne({ email });
    if (student) return res.status(400).json({ msg: 'User already exists' });

    student = new Student({
 name,
    email,
    phone,
    gender,
     course,
    message,
    });

    await student.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { postStudent };
