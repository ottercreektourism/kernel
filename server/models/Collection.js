const mongoose = require("mongoose");

const { Schema } = mongoose;

const collectionSchema = new Schema({
  kernels: [
    {
      type: Schema.Types.ObjectID,
      ref: "Kernel",
    },
  ],
});

const KernelCollection = mongoose.model("KernelCollection", collectionSchema);

module.exports = KernelCollection;

// holds all submitted Kernels (shopping cart)
