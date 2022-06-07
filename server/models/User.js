const mongoose = require("mongoose");
// const KernelCollection = require("./Collection");
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const kernelSchema = require('./Kernel');


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  savedKernels: [kernelSchema],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// used 22-state activity 26 for ref
