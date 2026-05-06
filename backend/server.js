const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Campus Resource Booking API is running");
});

// Health route
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

// Sample bookings route
app.get("/api/bookings", (req, res) => {
  const bookings = [
    {
      id: 1,
      studentName: "Demo Student",
      resourceName: "Study Room A",
      startTime: "2026-05-10T10:00:00",
      endTime: "2026-05-10T11:00:00",
      status: "confirmed",
      checkedIn: false
    }
  ];

  res.json(bookings);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
