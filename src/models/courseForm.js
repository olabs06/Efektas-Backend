const mongoose = require("mongoose");

const courseForm = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("courseForm", courseForm);
