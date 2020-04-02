const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
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
      },
      attending:{
          type: Boolean
      },
      lessons: [
          {
          type: Schema.Types.ObjectId,
          ref: "Lesson"
          }
      ]

});

module.exports = Student = mongoose.model("Student", StudentSchema);