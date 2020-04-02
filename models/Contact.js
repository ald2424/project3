const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Integer,
    required: true
  }
});
module.exports = Contact = mongoose.model("contacts", ContactSchema);