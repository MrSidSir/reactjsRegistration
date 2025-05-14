// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/db")
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// MongoDB Connection

app.listen(PORT,
    connectDB() ,
    () => console.log(`Server running on http://localhost:${PORT}`));

  
