const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'inProgress', 'completed'],
      default: 'pending',
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
