const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://irshad1554:ADCwpmmxAj4Tsiw2@demo.7gpmrfs.mongodb.net/?retryWrites=true&w=majority&appName=demo");
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // stop the server if DB doesn't connect
  }
};

module.exports = connectDB;
