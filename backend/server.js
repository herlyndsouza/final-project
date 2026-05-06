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

// Sample bookings data
let bookings = [
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

// Get all bookings route
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// Create booking route
app.post("/api/bookings", (req, res) => {
  const { studentName, resourceName, startTime, endTime } = req.body;

  if (!studentName || !resourceName || !startTime || !endTime) {
    return res.status(400).json({
      message: "studentName, resourceName, startTime, and endTime are required"
    });
  }

  const newBooking = {
    id: bookings.length + 1,
    studentName,
    resourceName,
    startTime,
    endTime,
    status: "confirmed",
    checkedIn: false
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking created successfully",
    booking: newBooking
  });
});

// Delete booking route
app.delete("/api/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);

  const bookingExists = bookings.some((booking) => booking.id === bookingId);

  if (!bookingExists) {
    return res.status(404).json({
      message: "Booking not found"
    });
  }

  bookings = bookings.filter((booking) => booking.id !== bookingId);

  res.json({
    message: "Booking deleted successfully",
    bookingId: bookingId
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
