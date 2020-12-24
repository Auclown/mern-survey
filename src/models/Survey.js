const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const surveySchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  subject: {
    type: String,
  },
  recipients: {
    type: [String],
  },
});

model("Survey", surveySchema);
