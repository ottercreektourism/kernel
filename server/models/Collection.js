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

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;

// holds all submitted Kernels (shopping cart)
