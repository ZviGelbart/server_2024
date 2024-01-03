const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rule: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  license: [
    {
      title: {
        type: String,
        enum: ["A", "B", "C", "D"],
        required: true,
      },
      issueDate: {
        type: Date,
        default: Date.now,
        required: true,
      },
    },
  ],
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
