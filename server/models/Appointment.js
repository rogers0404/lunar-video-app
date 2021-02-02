const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const appointmentSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  time: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

//const Appointment = model('Appointment', appointmentSchema);

module.exports = appointmentSchema;
