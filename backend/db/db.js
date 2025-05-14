const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://irshad1554:ADCwpmmxAj4Tsiw2@demo.7gpmrfs.mongodb.net/?retryWrites=true&w=majority&appName=demo');
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
