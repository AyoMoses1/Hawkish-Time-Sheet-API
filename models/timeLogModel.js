const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
    },
  },
  { timestamps: true }
);

const TimeLog = mongoose.model('TimeLog', timeLogSchema);

module.exports = TimeLog;
