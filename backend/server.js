const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/db");
const studentRoutes = require("./routes/studentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const labourRoutes = require("./routes/labourRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/labour", labourRoutes);

// Start Server after DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });
