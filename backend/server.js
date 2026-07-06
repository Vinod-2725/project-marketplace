const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const projectRoutes = require("./routes/projectRoutes");
const app = express();
const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

app.use(cors());
app.use(express.json());

// Temporary test route
app.post("/test", (req, res) => {
  console.log("Test route hit");
  res.send("Test route works");
});

console.log(projectRoutes);
app.use("/api", projectRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});