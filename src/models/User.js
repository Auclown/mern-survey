const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
  },
  credits: {
    type: Number,
    default: 0,
  },
});

model("Users", userSchema);
