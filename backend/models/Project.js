const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  skills: {
    type: String,
    required: true,
  },

  positions: {
    type: Number,
    required: true,
  },
  createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
});

module.exports = mongoose.model("Project", projectSchema);