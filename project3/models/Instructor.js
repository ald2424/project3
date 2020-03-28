const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema ({
  name: {
    type: String,
  },  
  email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        unique: true
      }

});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;