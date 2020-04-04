const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ScheduleSchema = new Schema({
    title: {
        type: String,
        required: true
      },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    instructorId: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    }

});
module.exports = Schedule= mongoose.model("schedule", ScheduleSchema);