const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
  },
});

model("Users", userSchema);
