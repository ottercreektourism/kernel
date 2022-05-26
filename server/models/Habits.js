const mongoose = require("mongoose");

const { Schema } = mongoose;

const habitsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Habits = mongoose.model("Habits", habitsSchema);

module.exports = Habits;

// holds all possible habits a user can choose
