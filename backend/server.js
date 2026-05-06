const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Campus Resource Booking API is running");
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend server is running",
  });
});

// Sample resources route
app.get("/api/resources", (req, res) => {
  const resources = [
    {
      id: 1,
      name: "Study Room A",
      type: "Study Room",
      location: "Library",
      capacity: 4
    },
    {
      id: 2,
      name: "Computer Lab 101",
      type: "Lab",
      location: "Engineering Building",
      capacity: 25
    }
  ];

  res.json(resources);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
