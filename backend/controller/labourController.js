const Labour = require("../models/Labour");

const createLabour = async (req, res) => {
  try {
    const labour = new Labour(req.body);
    await labour.save();
    res.status(201).json({ message: "Labour registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createLabour };
