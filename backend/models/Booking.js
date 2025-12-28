const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    place: {
      type: String,
      required: [true, 'Please add a place'],
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
    },
    serviceType: {
      type: String,
      required: [true, 'Please select a service type'],
      enum: ['Installation', 'Repair', 'Maintenance'],
    },
    deviceType: {
      type: String,
      required: [true, 'Please select a device type'],
      enum: ['Air Conditioner', 'Fridge', 'Washing Machine'],
    },
    preferredDate: {
      type: Date,
      required: [true, 'Please select a preferred date'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', bookingSchema);
