const mongoose = require("mongoose");

const { Schema } = mongoose;

const kernelSchema = new Schema({
  submissionDate: {
    type: Date,
    default: Date.now,
  },
  proud: {
    type: String,
    max: 150,
    required: true,
  },
  excite: {
    type: String,
    max: 150,
    required: true,
  },
  intention: {
    type: String,
    max: 150,
    required: true,
  },
  dayRating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  habits: [String]
});

// const Kernel = mongoose.model("Kernel", kernelSchema);

module.exports = kernelSchema;

// think of this as the product added to the 'shopping cart' it gets timestamped to be sorted in the grid
