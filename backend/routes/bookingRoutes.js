const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, phone, place, address, serviceType, deviceType, preferredDate } = req.body;

    const booking = await Booking.create({
      name,
      phone,
      place,
      address,
      serviceType,
      deviceType,
      preferredDate,
    });

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public (should be Admin protected in real app)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

module.exports = router;
